package io.gitlab.arturbosch.detekt.core

import io.github.detekt.psi.absolutePath
import io.gitlab.arturbosch.detekt.api.CodeSmell
import io.gitlab.arturbosch.detekt.api.CompilerResources
import io.gitlab.arturbosch.detekt.api.Config
import io.gitlab.arturbosch.detekt.api.CorrectableCodeSmell
import io.gitlab.arturbosch.detekt.api.Entity
import io.gitlab.arturbosch.detekt.api.FileProcessListener
import io.gitlab.arturbosch.detekt.api.Finding
import io.gitlab.arturbosch.detekt.api.Issue
import io.gitlab.arturbosch.detekt.api.RequiresTypeResolution
import io.gitlab.arturbosch.detekt.api.Rule
import io.gitlab.arturbosch.detekt.api.RuleSet
import io.gitlab.arturbosch.detekt.api.RuleSetProvider
import io.gitlab.arturbosch.detekt.api.Severity
import io.gitlab.arturbosch.detekt.api.internal.whichDetekt
import io.gitlab.arturbosch.detekt.api.internal.whichJava
import io.gitlab.arturbosch.detekt.api.internal.whichOS
import io.gitlab.arturbosch.detekt.core.suppressors.buildSuppressors
import io.gitlab.arturbosch.detekt.core.suppressors.isSuppressedBy
import io.gitlab.arturbosch.detekt.core.util.isActiveOrDefault
import io.gitlab.arturbosch.detekt.core.util.shouldAnalyzeFile
import org.jetbrains.kotlin.config.languageVersionSettings
import org.jetbrains.kotlin.psi.KtFile
import org.jetbrains.kotlin.resolve.BindingContext
import org.jetbrains.kotlin.resolve.calls.smartcasts.DataFlowValueFactoryImpl
import kotlin.reflect.full.hasAnnotation

internal class Analyzer(
    private val settings: ProcessingSettings,
    private val providers: List<RuleSetProvider>,
    private val processors: List<FileProcessListener>
) {
    fun run(
        ktFiles: Collection<KtFile>,
        bindingContext: BindingContext = BindingContext.EMPTY
    ): List<Issue> {
        val languageVersionSettings = settings.environment.configuration.languageVersionSettings

        val dataFlowValueFactory = DataFlowValueFactoryImpl(languageVersionSettings)
        val compilerResources = CompilerResources(languageVersionSettings, dataFlowValueFactory)
        if (bindingContext == BindingContext.EMPTY) {
            warnAboutEnabledRequiresTypeResolutionRules()
        }
        return if (settings.spec.executionSpec.parallelAnalysis) {
            runAsync(ktFiles, bindingContext, compilerResources)
        } else {
            runSync(ktFiles, bindingContext, compilerResources)
        }
    }

    private fun runSync(
        ktFiles: Collection<KtFile>,
        bindingContext: BindingContext,
        compilerResources: CompilerResources
    ): List<Issue> =
        ktFiles.flatMap { file ->
            processors.forEach { it.onProcess(file) }
            val issues = runCatching { analyze(file, bindingContext, compilerResources) }
                .onFailure { throwIllegalStateException(file, it) }
                .getOrDefault(emptyList())
            processors.forEach { it.onProcessComplete(file, issues) }
            issues
        }

    private fun runAsync(
        ktFiles: Collection<KtFile>,
        bindingContext: BindingContext,
        compilerResources: CompilerResources
    ): List<Issue> {
        val service = settings.taskPool
        val tasks: TaskList<List<Issue>?> = ktFiles.map { file ->
            service.task {
                processors.forEach { it.onProcess(file) }
                val issues = analyze(file, bindingContext, compilerResources)
                processors.forEach { it.onProcessComplete(file, issues) }
                issues
            }.recover { throwIllegalStateException(file, it) }
        }
        return awaitAll(tasks).filterNotNull().flatten()
    }

    private fun analyze(
        file: KtFile,
        bindingContext: BindingContext,
        compilerResources: CompilerResources
    ): List<Issue> {
        val activeRuleSetsToRuleSetConfigs = providers.asSequence()
            .map { it to settings.config.subConfig(it.ruleSetId.value) }
            .filter { (_, ruleSetConfig) -> ruleSetConfig.isActiveOrDefault(true) }
            .map { (provider, ruleSetConfig) -> provider.instance() to ruleSetConfig }
            .filter { (_, ruleSetConfig) -> ruleSetConfig.shouldAnalyzeFile(file, settings.spec.projectSpec.basePath) }

        val (correctableRules, otherRules) = activeRuleSetsToRuleSetConfigs
            .flatMap { (ruleSet, ruleSetConfig) ->
                ruleSetConfig.subConfigKeys()
                    .asSequence()
                    .mapNotNull { runCatching { Rule.Id(it) }.getOrNull() }
                    .mapNotNull { ruleId ->
                        ruleSet.rules[ruleId]?.let { it to ruleSetConfig.subConfig(ruleId.value) }
                    }
                    .filter { (_, config) -> config.isActiveOrDefault(false) }
                    .filter { (_, config) -> config.shouldAnalyzeFile(file, settings.spec.projectSpec.basePath) }
                    .map { (ruleProvider, config) ->
                        val rule = ruleProvider(config)
                        rule.toRuleInfo(ruleSet.id) to rule
                    }
            }
            .filterNot { (ruleInfo, rule) -> file.isSuppressedBy(ruleInfo.id, rule.aliases, ruleInfo.ruleSetId) }
            .filter { (_, rule) ->
                bindingContext != BindingContext.EMPTY || !rule::class.hasAnnotation<RequiresTypeResolution>()
            }
            .partition { (_, rule) -> rule.autoCorrect }

        return (correctableRules + otherRules).flatMap { (ruleInfo, rule) ->
            rule.visitFile(file, bindingContext, compilerResources)
                .filterNot {
                    it.entity.ktElement?.isSuppressedBy(ruleInfo.id, rule.aliases, ruleInfo.ruleSetId) == true
                }
                .filterSuppressedFindings(rule, bindingContext)
                .map { it.toIssue(ruleInfo, rule.computeSeverity()) }
        }
    }

    private fun warnAboutEnabledRequiresTypeResolutionRules() {
        providers.asSequence()
            .map { it to settings.config.subConfig(it.ruleSetId.value) }
            .filter { (_, ruleSetConfig) -> ruleSetConfig.isActiveOrDefault(true) }
            .map { (provider, ruleSetConfig) -> provider.instance() to ruleSetConfig }
            .flatMap { (ruleSet, ruleSetConfig) ->
                ruleSet.rules
                    .asSequence()
                    .map { (ruleId, ruleProvider) -> ruleProvider to ruleSetConfig.subConfig(ruleId.value) }
                    .filter { (_, config) -> config.isActiveOrDefault(false) }
                    .map { (ruleProvider, config) -> ruleProvider(config) }
            }
            .filter { rule -> rule::class.hasAnnotation<RequiresTypeResolution>() }
            .forEach { rule ->
                settings.debug { "The rule '${rule.ruleId}' requires type resolution but it was run without it." }
            }
    }
}

private fun List<Finding>.filterSuppressedFindings(rule: Rule, bindingContext: BindingContext): List<Finding> {
    val suppressors = buildSuppressors(rule, bindingContext)
    return if (suppressors.isNotEmpty()) {
        filter { finding -> !suppressors.any { suppressor -> suppressor.shouldSuppress(finding) } }
    } else {
        this
    }
}

private fun throwIllegalStateException(file: KtFile, error: Throwable): Nothing {
    val message = """
        Analyzing ${file.absolutePath()} led to an exception.
        Location: ${error.stackTrace.firstOrNull()?.toString()}
        The original exception message was: ${error.localizedMessage}
        Running detekt '${whichDetekt()}' on Java '${whichJava()}' on OS '${whichOS()}'
        If the exception message does not help, please feel free to create an issue on our GitHub page.
    """.trimIndent()
    throw IllegalStateException(message, error)
}

private fun Finding.toIssue(rule: Issue.RuleInfo, severity: Severity): Issue {
    return when (this) {
        is CorrectableCodeSmell -> IssueImpl(rule, entity, message, references, severity, autoCorrectEnabled)

        is CodeSmell -> IssueImpl(rule, entity, message, references, severity)

        else -> error("wtf?")
    }
}

private fun Rule.toRuleInfo(ruleSetId: RuleSet.Id): Issue.RuleInfo {
    return IssueImpl.RuleInfo(ruleId, ruleSetId, description)
}

private data class IssueImpl(
    override val ruleInfo: Issue.RuleInfo,
    override val entity: Entity,
    override val message: String,
    override val references: List<Entity>,
    override val severity: Severity,
    override val autoCorrectEnabled: Boolean = false,
) : Issue {
    data class RuleInfo(
        override val id: Rule.Id,
        override val ruleSetId: RuleSet.Id,
        override val description: String,
    ) : Issue.RuleInfo
}

/**
 * Compute severity in the priority order:
 * - Severity of the rule
 * - Severity of the parent ruleset
 * - Default severity
 */
private fun Rule.computeSeverity(): Severity {
    val configValue: String = config.valueOrNull(Config.SEVERITY_KEY)
        ?: config.parent?.valueOrNull(Config.SEVERITY_KEY)
        ?: return Severity.Error
    return parseToSeverity(configValue)
}

internal fun parseToSeverity(severity: String): Severity {
    val lowercase = severity.lowercase()
    return Severity.entries.find { it.name.lowercase() == lowercase }
        ?: error("$severity is not a valid Severity. Allowed values are ${Severity.entries}")
}

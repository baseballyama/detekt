package io.gitlab.arturbosch.detekt.api

/**
 * Represents a problem detected by detekt on the source code
 *
 * An Issue has information about the rule that detected the problem, a severity and an entity with information
 * about the position. Entity references can also be considered for deeper characterization.
 */
interface Issue {
    val ruleInstance: RuleInstance
    val entity: Entity
    val references: List<Entity>
    val message: String
    val severity: Severity
    val autoCorrectEnabled: Boolean

    val location: Location
        get() = entity.location

    interface RuleInstance {
        val id: String
        val name: Rule.Name
        val ruleSetId: RuleSet.Id
        val description: String
    }
}

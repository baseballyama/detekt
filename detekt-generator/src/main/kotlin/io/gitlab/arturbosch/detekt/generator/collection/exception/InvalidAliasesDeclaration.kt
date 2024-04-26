package io.gitlab.arturbosch.detekt.generator.collection.exception

class InvalidAliasesDeclaration : RuntimeException(
    "Invalid aliases declaration. Example: override val defaultRuleAliases = setOf(\"Name1\", \"Name2\")"
)

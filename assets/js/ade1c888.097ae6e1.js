"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[9068],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?o.createElement(k,a(a({ref:t},p),{},{components:n})):o.createElement(k,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5910:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var o=n(3117),i=n(102),r=(n(7294),n(3905)),a=["components"],s={id:"extensions",title:"Extending detekt",keywords:["extensions","rulesets"],sidebar_position:9},l=void 0,u={unversionedId:"introduction/extensions",id:"version-1.23.1/introduction/extensions",title:"Extending detekt",description:"The following page describes how to extend detekt and how to customize it to your domain-specific needs.",source:"@site/versioned_docs/version-1.23.1/introduction/extensions.md",sourceDirName:"introduction",slug:"/introduction/extensions",permalink:"/docs/introduction/extensions",draft:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.23.1/introduction/extensions.md",tags:[],version:"1.23.1",sidebarPosition:9,frontMatter:{id:"extensions",title:"Extending detekt",keywords:["extensions","rulesets"],sidebar_position:9},sidebar:"defaultSidebar",previous:{title:"Suppressors",permalink:"/docs/introduction/suppressors"},next:{title:"Using Snapshots",permalink:"/docs/introduction/snapshots"}},p={},d=[{value:'<a name="customrulesets">Custom RuleSets</a>',id:"custom-rulesets",level:4},{value:'<a name="testing">Testing your rules</a>',id:"testing-your-rules",level:5},{value:'<a name="customprocessors">Custom Processors</a>',id:"custom-processors",level:4},{value:'<a name="customreports">Custom Reports</a>',id:"custom-reports",level:4},{value:'<a name="configureextensions">Let detekt know about your extensions</a>',id:"let-detekt-know-about-your-extensions",level:4},{value:"Integrate your extension with the detekt CLI",id:"integrate-your-extension-with-the-detekt-cli",level:5},{value:"Integrate your extension with the Detekt Gradle Plugin",id:"integrate-your-extension-with-the-detekt-gradle-plugin",level:5},{value:"Gradle (Kotlin/Groovy DSL)",id:"gradle-kotlingroovy-dsl",level:6},{value:"Pitfalls",id:"pitfalls",level:5},{value:"autoCorrect property",id:"autocorrect-property",level:4}],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following page describes how to extend detekt and how to customize it to your domain-specific needs.\nThe associated ",(0,r.kt)("strong",{parentName:"p"},"code samples")," to this guide can be found in the package ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/detekt/detekt/tree/main/detekt-sample-extensions"},"detekt/detekt-sample-extensions"),"."),(0,r.kt)("h4",{id:"custom-rulesets"},(0,r.kt)("a",{name:"customrulesets"},"Custom RuleSets")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"detekt")," uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceLoader")," pattern to collect all instances of ",(0,r.kt)("inlineCode",{parentName:"p"},"RuleSetProvider")," interfaces.\nSo it is possible to define rules/rule sets and enhance ",(0,r.kt)("em",{parentName:"p"},"detekt")," with your own flavor. "),(0,r.kt)("admonition",{title:"Attention",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You need a ",(0,r.kt)("inlineCode",{parentName:"p"},"resources/META-INF/services/io.gitlab.arturbosch.detekt.api.RuleSetProvider")," file which\nhas as content the fully qualified name of your ",(0,r.kt)("inlineCode",{parentName:"p"},"RuleSetProvider")," e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"io.gitlab.arturbosch.detekt.sample.extensions.SampleProvider"),".")),(0,r.kt)("p",null,"You can use our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/detekt/detekt-custom-rule-template"},"GitHub template")," to have a basic scaffolding to\ndevelop your own custom rules. Another option is to clone the provided ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/detekt/detekt/tree/main/detekt-sample-extensions"},"detekt/detekt-sample-extensions")," project."),(0,r.kt)("p",null,"Own rules have to extend the abstract ",(0,r.kt)("em",{parentName:"p"},"Rule")," class and override the ",(0,r.kt)("inlineCode",{parentName:"p"},"visitXXX()"),"-functions from the AST.",(0,r.kt)("br",{parentName:"p"}),"\n","A ",(0,r.kt)("inlineCode",{parentName:"p"},"RuleSetProvider")," must be implemented, which declares a ",(0,r.kt)("inlineCode",{parentName:"p"},"RuleSet")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"instance()"),"-function.\nTo leverage the configuration mechanism of detekt you must pass the Config object from your rule set provider to your rule.\nAn ",(0,r.kt)("inlineCode",{parentName:"p"},"Issue")," property defines what ID, severity and message should be printed on the console or on any other output format."),(0,r.kt)("p",null,"Example of a custom rule:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class TooManyFunctions(config: Config) : Rule(config) {\n\n    override val issue = Issue(javaClass.simpleName,\n        Severity.CodeSmell,\n        "This rule reports a file with an excessive function count.",\n        Debt.TWENTY_MINS)\n\n    private val threshold = 10\n    private var amount: Int = 0\n\n    override fun visitKtFile(file: KtFile) {\n        super.visitKtFile(file)\n        if (amount > threshold) {\n            report(CodeSmell(issue, Entity.from(file), \n                "Too many functions can make the maintainability of a file costlier")\n        }\n        amount = 0\n    }\n\n    override fun visitNamedFunction(function: KtNamedFunction) {\n        super.visitNamedFunction(function)\n        amount++\n    }\n}\n')),(0,r.kt)("p",null,"Example of a much preciser rule in terms of more specific CodeSmell constructor and Rule attributes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class TooManyFunctions2(config: Config) : Rule(config) {\n\n    override val issue = Issue(\n        javaClass.simpleName,\n        Severity.CodeSmell,\n        "This rule reports a file with an excessive function count.",\n        Debt.TWENTY_MINS\n    )\n\n    private val threshold: Int by config(defaultValue = 10)\n    private var amount: Int = 0\n\n    override fun visitKtFile(file: KtFile) {\n        super.visitKtFile(file)\n        if (amount > threshold) {\n            report(ThresholdedCodeSmell(issue,\n                entity = Entity.from(file),\n                metric = Metric(type = "SIZE", value = amount, threshold = threshold),\n                message = "The file ${file.name} has $amount function declarations. " +\n                        "Threshold is specified with $threshold.",\n                references = emptyList())\n            )\n        }\n        amount = 0\n    }\n\n    override fun visitNamedFunction(function: KtNamedFunction) {\n        super.visitNamedFunction(function)\n        amount++\n    }\n}\n')),(0,r.kt)("p",null,"If you want your rule to be configurable, write down your properties inside the detekt.yml file.\nPlease note that this will only take effect, if the ",(0,r.kt)("inlineCode",{parentName:"p"},"Config")," object is passed on by the ",(0,r.kt)("inlineCode",{parentName:"p"},"RuleSetProvider"),"\nto the rule itself."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"MyRuleSet:\n  TooManyFunctions2:\n    active: true\n    threshold: 5\n  OtherRule:\n    active: false\n")),(0,r.kt)("p",null,"By specifying the rule set and rule ids, ",(0,r.kt)("em",{parentName:"p"},"detekt")," will use the sub configuration of ",(0,r.kt)("inlineCode",{parentName:"p"},"TooManyFunctions2"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'val threshold = valueOrDefault("threshold", THRESHOLD)')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"As of version 1.2.0 detekt now verifies if all configured properties actually exist in a configuration created by ",(0,r.kt)("inlineCode",{parentName:"p"},"--generate-config"),".\nThis means that by default detekt does not know about your new properties.\nTherefore we need to mention them in the configuration under ",(0,r.kt)("inlineCode",{parentName:"p"},"config>excludes"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"config:\n  validation: true\n  # 1. exclude rule set 'sample' and all its nested members\n  # 2. exclude every property in every rule under the rule set 'sample'\n  excludes: \"sample.*,sample>.*>.*\"\n")),(0,r.kt)("h5",{id:"testing-your-rules"},(0,r.kt)("a",{name:"testing"},"Testing your rules")),(0,r.kt)("p",null,"To test your rules, add the dependency on ",(0,r.kt)("inlineCode",{parentName:"p"},"detekt-test")," to your project: ",(0,r.kt)("inlineCode",{parentName:"p"},'testCompile "io.gitlab.arturbosch.detekt:detekt-test:$version"'),"."),(0,r.kt)("p",null,"The easiest way to detect issues with your newly created rule is to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"lint")," extension function:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Rule.lint(StringContent/Path/KtFile): List<Finding>"))),(0,r.kt)("p",null,"If you need to reuse the Kotlin file for performance reasons within similar test cases, please use one of these functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"compileContentForTest(content: String): KtFile")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"compileForTest(path: Path): KtFile"))),(0,r.kt)("h4",{id:"custom-processors"},(0,r.kt)("a",{name:"customprocessors"},"Custom Processors")),(0,r.kt)("p",null,"Custom processors can be used for example to implement additional project metrics."),(0,r.kt)("p",null,"When for whatever reason you want to count all loop statements inside your code base, you could write something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class NumberOfLoopsProcessor : FileProcessListener {\n\n    override fun onProcess(file: KtFile) {\n        val visitor = LoopVisitor()\n        file.accept(visitor)\n        file.putUserData(numberOfLoopsKey, visitor.numberOfLoops)\n    }\n\n    companion object {\n        val numberOfLoopsKey = Key<Int>("number of loops")\n    }\n\n    class LoopVisitor : DetektVisitor() {\n\n        internal var numberOfLoops = 0\n        override fun visitLoopExpression(loopExpression: KtLoopExpression) {\n            super.visitLoopExpression(loopExpression)\n            numberOfLoops++\n        }\n    }\n}\n')),(0,r.kt)("p",null,"To let detekt know about the new processor, we specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"resources/META-INF/services/io.gitlab.arturbosch.detekt.api.FileProcessListener")," file\nwith the full qualify name of our processor as the content: ",(0,r.kt)("inlineCode",{parentName:"p"},"io.gitlab.arturbosch.detekt.sample.extensions.processors.NumberOfLoopsProcessor"),"."),(0,r.kt)("p",null,"To test the code we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"detekt-test")," module and write a JUnit 5 testcase."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class NumberOfLoopsProcessorTest {\n\n    @Test\n    fun `should expect two loops`() {\n        val code = """\n            fun main() {\n                for (i in 0..10) {\n                    while (i < 5) {\n                        println(i)\n                    }\n                }\n            }\n        """\n\n        val ktFile = compileContentForTest(code)\n        NumberOfLoopsProcessor().onProcess(ktFile)\n\n        assertThat(ktFile.getUserData(NumberOfLoopsProcessor.numberOfLoopsKey)).isEqualTo(2)\n    }\n}\n')),(0,r.kt)("h4",{id:"custom-reports"},(0,r.kt)("a",{name:"customreports"},"Custom Reports")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"detekt")," allows you to extend the console output and to create custom output formats.\nIf you want to customize the output, take a look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConsoleReport")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"OutputReport")," classes."),(0,r.kt)("p",null,"All they need are an implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"render()"),"-function which takes an object with all findings and returns a string to be printed out."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"abstract fun render(detektion: Detektion): String?\n")),(0,r.kt)("h4",{id:"let-detekt-know-about-your-extensions"},(0,r.kt)("a",{name:"configureextensions"},"Let detekt know about your extensions")),(0,r.kt)("p",null,"So you have implemented your own rules or other extensions and want to integrate them\ninto your ",(0,r.kt)("inlineCode",{parentName:"p"},"detekt")," run? Great, make sure to have a ",(0,r.kt)("inlineCode",{parentName:"p"},"jar")," with all your needed dependencies\nminus the ones ",(0,r.kt)("inlineCode",{parentName:"p"},"detekt")," brings itself."),(0,r.kt)("p",null,"Take a look at our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/detekt/detekt/tree/main/detekt-sample-extensions"},"sample project")," on how to achieve this with gradle."),(0,r.kt)("h5",{id:"integrate-your-extension-with-the-detekt-cli"},"Integrate your extension with the detekt CLI"),(0,r.kt)("p",null,"Mention your ",(0,r.kt)("inlineCode",{parentName:"p"},"jar")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--plugins")," flag when calling the cli fatjar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"detekt --input ... --plugins /path/to/my/jar\n")),(0,r.kt)("h5",{id:"integrate-your-extension-with-the-detekt-gradle-plugin"},"Integrate your extension with the Detekt Gradle Plugin"),(0,r.kt)("p",null,"For example ",(0,r.kt)("inlineCode",{parentName:"p"},"detekt")," itself provides a wrapper over ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint"},"ktlint")," as a\ncustom ",(0,r.kt)("inlineCode",{parentName:"p"},"formatting")," rule set.\nTo enable it, we add the published dependency to ",(0,r.kt)("inlineCode",{parentName:"p"},"detekt")," via the ",(0,r.kt)("inlineCode",{parentName:"p"},"detektPlugins")," configuration:"),(0,r.kt)("h6",{id:"gradle-kotlingroovy-dsl"},"Gradle (Kotlin/Groovy DSL)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    detektPlugins("io.gitlab.arturbosch.detekt:detekt-formatting:1.23.1")\n}\n')),(0,r.kt)("h5",{id:"pitfalls"},"Pitfalls"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All rules are disabled by default and have to be explicitly enabled in the ",(0,r.kt)("inlineCode",{parentName:"li"},"detekt")," yaml configuration file."),(0,r.kt)("li",{parentName:"ul"},"If you do not pass the ",(0,r.kt)("inlineCode",{parentName:"li"},"Config")," object from the ",(0,r.kt)("inlineCode",{parentName:"li"},"RuleSetProvider")," to the rule, the rule is active, but you will not be able to use\nany configuration options or disable the rule via config file."),(0,r.kt)("li",{parentName:"ul"},"If your extension is part of your project and you integrate it like ",(0,r.kt)("inlineCode",{parentName:"li"},'detektPlugins project(":my-rules")')," make sure that this\nsubproject is build before ",(0,r.kt)("inlineCode",{parentName:"li"},"gradle detekt")," is run.\nIn the ",(0,r.kt)("inlineCode",{parentName:"li"},"kotlin-dsl")," you could add something like ",(0,r.kt)("inlineCode",{parentName:"li"},'tasks.withType<Detekt> { dependsOn(":my-rules:assemble") }')," to explicitly run ",(0,r.kt)("inlineCode",{parentName:"li"},"detekt")," only\nafter your extension sub project is built."),(0,r.kt)("li",{parentName:"ul"},"If you use detekt for your Android project, and if you want to integrate all your custom rules in a new module, please make sure that\nyou created a pure kotlin module which has no Android dependencies. ",(0,r.kt)("inlineCode",{parentName:"li"},'apply plugin: "kotlin"')," is enough to make it work."),(0,r.kt)("li",{parentName:"ul"},"Sometimes when you run detekt task, you may not see the violations detected by your custom rules. In this case open a terminal and run\n",(0,r.kt)("inlineCode",{parentName:"li"},"./gradlew --stop")," to stop gradle daemons and run the task again.")),(0,r.kt)("h4",{id:"autocorrect-property"},"autoCorrect property"),(0,r.kt)("p",null,"In detekt you can write custom rules which can manipulate your code base.\nFor this a cli flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--auto-correct")," and the gradle plugin property ",(0,r.kt)("inlineCode",{parentName:"p"},"autoCorrect")," exists.\nOnly write auto correcting code within the ",(0,r.kt)("inlineCode",{parentName:"p"},"Rule#withAutoCorrect()"),"-function."))}m.isMDXComponent=!0}}]);
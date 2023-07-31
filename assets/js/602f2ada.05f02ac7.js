"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[7258],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5299:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],l={title:"Comments Rule Set",sidebar:"home_sidebar",keywords:["rules","comments"],permalink:"comments.html",toc:!0,folder:"documentation"},p=void 0,s={unversionedId:"rules/comments",id:"version-1.23.0/rules/comments",title:"Comments Rule Set",description:"This rule set provides rules that address issues in comments and documentation",source:"@site/versioned_docs/version-1.23.0/rules/comments.md",sourceDirName:"rules",slug:"/rules/comments",permalink:"/docs/1.23.0/rules/comments",draft:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.23.0/rules/comments.md",tags:[],version:"1.23.0",frontMatter:{title:"Comments Rule Set",sidebar:"home_sidebar",keywords:["rules","comments"],permalink:"comments.html",toc:!0,folder:"documentation"},sidebar:"defaultSidebar",previous:{title:"Run detekt using the Compiler Plugin",permalink:"/docs/1.23.0/gettingstarted/compilerplugin"},next:{title:"Complexity Rule Set",permalink:"/docs/1.23.0/rules/complexity"}},c={},u=[{value:"AbsentOrWrongFileLicense",id:"absentorwrongfilelicense",level:3},{value:"Configuration options:",id:"configuration-options",level:4},{value:"CommentOverPrivateFunction",id:"commentoverprivatefunction",level:3},{value:"CommentOverPrivateProperty",id:"commentoverprivateproperty",level:3},{value:"DeprecatedBlockTag",id:"deprecatedblocktag",level:3},{value:"Noncompliant Code:",id:"noncompliant-code",level:4},{value:"Compliant Code:",id:"compliant-code",level:4},{value:"EndOfSentenceFormat",id:"endofsentenceformat",level:3},{value:"Configuration options:",id:"configuration-options-1",level:4},{value:"KDocReferencesNonPublicProperty",id:"kdocreferencesnonpublicproperty",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-1",level:4},{value:"Compliant Code:",id:"compliant-code-1",level:4},{value:"OutdatedDocumentation",id:"outdateddocumentation",level:3},{value:"Configuration options:",id:"configuration-options-2",level:4},{value:"Noncompliant Code:",id:"noncompliant-code-2",level:4},{value:"Compliant Code:",id:"compliant-code-2",level:4},{value:"UndocumentedPublicClass",id:"undocumentedpublicclass",level:3},{value:"Configuration options:",id:"configuration-options-3",level:4},{value:"UndocumentedPublicFunction",id:"undocumentedpublicfunction",level:3},{value:"Configuration options:",id:"configuration-options-4",level:4},{value:"UndocumentedPublicProperty",id:"undocumentedpublicproperty",level:3},{value:"Configuration options:",id:"configuration-options-5",level:4}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This rule set provides rules that address issues in comments and documentation\nof the code."),(0,r.kt)("h3",{id:"absentorwrongfilelicense"},"AbsentOrWrongFileLicense"),(0,r.kt)("p",null,"This rule will report every Kotlin source file which doesn't have the required license header.\nThe rule validates each Kotlin source and operates in two modes: if ",(0,r.kt)("inlineCode",{parentName:"p"},"licenseTemplateIsRegex = false")," (or missing)\nthe rule checks whether the input file header starts with the read text from the passed file in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"licenseTemplateFile")," configuration option. If ",(0,r.kt)("inlineCode",{parentName:"p"},"licenseTemplateIsRegex = true")," the rule matches the header with\na regular expression produced from the passed template license file (defined via ",(0,r.kt)("inlineCode",{parentName:"p"},"licenseTemplateFile")," configuration\noption)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,r.kt)("h4",{id:"configuration-options"},"Configuration options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"licenseTemplateFile")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'license.template'"),")"),(0,r.kt)("p",{parentName:"li"},"path to file with license header template resolved relatively to config file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"licenseTemplateIsRegex")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,r.kt)("p",{parentName:"li"},"whether or not the license header template is a regex template"))),(0,r.kt)("h3",{id:"commentoverprivatefunction"},"CommentOverPrivateFunction"),(0,r.kt)("p",null,"This rule reports comments and documentation that has been added to private functions. These comments get reported\nbecause they probably explain the functionality of the private function. However, private functions should be small\nenough and have an understandable name so that they are self-explanatory and do not need this comment in the first\nplace."),(0,r.kt)("p",null,"Instead of simply removing this comment to solve this issue prefer to split up the function into smaller functions\nwith better names if necessary. Giving the function a better, more descriptive name can also help in\nsolving this issue."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 20min"),(0,r.kt)("h3",{id:"commentoverprivateproperty"},"CommentOverPrivateProperty"),(0,r.kt)("p",null,"This rule reports comments and documentation above private properties. This can indicate that the property has a\nconfusing name or is not in a small enough context to be understood.\nPrivate properties should be named in a self-explanatory way and readers of the code should be able to understand\nwhy the property exists and what purpose it solves without the comment."),(0,r.kt)("p",null,"Instead of simply removing the comment to solve this issue, prefer renaming the property to a more self-explanatory\nname. If this property is inside a bigger class, it makes sense to refactor and split up the class. This can\nincrease readability and make the documentation obsolete."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 20min"),(0,r.kt)("h3",{id:"deprecatedblocktag"},"DeprecatedBlockTag"),(0,r.kt)("p",null,"This rule reports use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"@deprecated")," block tag in KDoc comments. Deprecation must be specified using a\n",(0,r.kt)("inlineCode",{parentName:"p"},"@Deprecated")," annotation as adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"@deprecated")," block tag in KDoc comments\n",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/kotlin-doc.html#suppress"},"has no effect and is not supported"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"@Deprecated"),"\nannotation constructor has dedicated fields for a message and a type (warning, error, etc.). You can also use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"@ReplaceWith")," annotation to specify how to solve the deprecation automatically via the IDE."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,r.kt)("h4",{id:"noncompliant-code"},"Noncompliant Code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"/**\n* This function prints a message followed by a new line.\n*\n* @deprecated Useless, the Kotlin standard library can already do this. Replace with println.\n*/\nfun printThenNewline(what: String) {\n    // ...\n}\n")),(0,r.kt)("h4",{id:"compliant-code"},"Compliant Code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'/**\n* This function prints a message followed by a new line.\n*/\n@Deprecated("Useless, the Kotlin standard library can already do this.")\n@ReplaceWith("println(what)")\nfun printThenNewline(what: String) {\n    // ...\n}\n')),(0,r.kt)("h3",{id:"endofsentenceformat"},"EndOfSentenceFormat"),(0,r.kt)("p",null,"This rule validates the end of the first sentence of a KDoc comment.\nIt should end with proper punctuation or with a correct URL."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,r.kt)("h4",{id:"configuration-options-1"},"Configuration options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"endOfSentenceFormat")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'([.?!][ \\t\\n\\r\\f<])|([.?!:]$)'"),")"),(0,r.kt)("p",{parentName:"li"},"regular expression which should match the end of the first sentence in the KDoc"))),(0,r.kt)("h3",{id:"kdocreferencesnonpublicproperty"},"KDocReferencesNonPublicProperty"),(0,r.kt)("p",null,"This rule will report any KDoc comments that refer to non-public properties of a class.\nClients do not need to know the implementation details."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,r.kt)("h4",{id:"noncompliant-code-1"},"Noncompliant Code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"/**\n* Comment\n* [prop1] - non-public property\n* [prop2] - public property\n*/\nclass Test {\n    private val prop1 = 0\n    val prop2 = 0\n}\n")),(0,r.kt)("h4",{id:"compliant-code-1"},"Compliant Code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"/**\n* Comment\n* [prop2] - public property\n*/\nclass Test {\n    private val prop1 = 0\n    val prop2 = 0\n}\n")),(0,r.kt)("h3",{id:"outdateddocumentation"},"OutdatedDocumentation"),(0,r.kt)("p",null,"This rule will report any class, function or constructor with KDoc that does not match the declaration signature.\nIf KDoc is not present or does not contain any @param or @property tags, rule violation will not be reported.\nBy default, both type and value parameters need to be matched and declarations orders must be preserved. You can\nturn off these features using configuration options."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 10min"),(0,r.kt)("h4",{id:"configuration-options-2"},"Configuration options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"matchTypeParameters")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,r.kt)("p",{parentName:"li"},"if type parameters should be matched")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"matchDeclarationsOrder")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,r.kt)("p",{parentName:"li"},"if the order of declarations should be preserved")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"allowParamOnConstructorProperties")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,r.kt)("p",{parentName:"li"},"if we allow constructor parameters to be marked as @param instead of @property"))),(0,r.kt)("h4",{id:"noncompliant-code-2"},"Noncompliant Code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"/**\n* @param someParam\n* @property someProp\n*/\nclass MyClass(otherParam: String, val otherProp: String)\n\n/**\n* @param T\n* @param someParam\n*/\nfun <T, S> myFun(someParam: String)\n")),(0,r.kt)("h4",{id:"compliant-code-2"},"Compliant Code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"/**\n* @param someParam\n* @property someProp\n*/\nclass MyClass(someParam: String, val someProp: String)\n\n/**\n* @param T\n* @param S\n* @param someParam\n*/\nfun <T, S> myFun(someParam: String)\n")),(0,r.kt)("h3",{id:"undocumentedpublicclass"},"UndocumentedPublicClass"),(0,r.kt)("p",null,"This rule reports public classes, objects and interfaces which do not have the required documentation.\nEnable this rule if the codebase should have documentation on every public class, interface and object."),(0,r.kt)("p",null,"By default, this rule also searches for nested and inner classes and objects. This default behavior can be changed\nwith the configuration options of this rule."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 20min"),(0,r.kt)("h4",{id:"configuration-options-3"},"Configuration options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"searchInNestedClass")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,r.kt)("p",{parentName:"li"},"if nested classes should be searched")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"searchInInnerClass")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,r.kt)("p",{parentName:"li"},"if inner classes should be searched")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"searchInInnerObject")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,r.kt)("p",{parentName:"li"},"if inner objects should be searched")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"searchInInnerInterface")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,r.kt)("p",{parentName:"li"},"if inner interfaces should be searched")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"searchInProtectedClass")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,r.kt)("p",{parentName:"li"},"if protected classes should be searched"))),(0,r.kt)("h3",{id:"undocumentedpublicfunction"},"UndocumentedPublicFunction"),(0,r.kt)("p",null,"This rule will report any public function which does not have the required documentation.\nIf the codebase should have documentation on all public functions enable this rule to enforce this.\nOverridden functions are excluded by this rule."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 20min"),(0,r.kt)("h4",{id:"configuration-options-4"},"Configuration options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"searchProtectedFunction")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,r.kt)("p",{parentName:"li"},"if protected functions should be searched"))),(0,r.kt)("h3",{id:"undocumentedpublicproperty"},"UndocumentedPublicProperty"),(0,r.kt)("p",null,"This rule will report any public property which does not have the required documentation.\nThis also includes public properties defined in a primary constructor.\nIf the codebase should have documentation on all public properties enable this rule to enforce this.\nOverridden properties are excluded by this rule."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Debt"),": 20min"),(0,r.kt)("h4",{id:"configuration-options-5"},"Configuration options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"searchProtectedProperty")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,r.kt)("p",{parentName:"li"},"if protected functions should be searched"))))}m.isMDXComponent=!0}}]);
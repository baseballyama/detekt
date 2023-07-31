"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[798],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return k}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),m=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),d=m(t),k=i,c=d["".concat(p,".").concat(k)]||d[k]||u[k]||o;return t?a.createElement(c,l(l({ref:n},s),{},{components:t})):a.createElement(c,l({ref:n},s))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=d;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var m=2;m<o;m++)l[m]=t[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7754:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return r},metadata:function(){return m},toc:function(){return u}});var a=t(3117),i=t(102),o=(t(7294),t(3905)),l=["components"],r={title:"Naming Rule Set",sidebar:"home_sidebar",keywords:["rules","naming"],permalink:"naming.html",toc:!0,folder:"documentation"},p=void 0,m={unversionedId:"rules/naming",id:"version-1.23.0/rules/naming",title:"Naming Rule Set",description:"The naming ruleset contains rules which assert the naming of different parts of the codebase.",source:"@site/versioned_docs/version-1.23.0/rules/naming.md",sourceDirName:"rules",slug:"/rules/naming",permalink:"/docs/1.23.0/rules/naming",draft:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.23.0/rules/naming.md",tags:[],version:"1.23.0",frontMatter:{title:"Naming Rule Set",sidebar:"home_sidebar",keywords:["rules","naming"],permalink:"naming.html",toc:!0,folder:"documentation"},sidebar:"defaultSidebar",previous:{title:"Libraries Rule Set",permalink:"/docs/1.23.0/rules/libraries"},next:{title:"Performance Rule Set",permalink:"/docs/1.23.0/rules/performance"}},s={},u=[{value:"BooleanPropertyNaming",id:"booleanpropertynaming",level:3},{value:"Configuration options:",id:"configuration-options",level:4},{value:"Noncompliant Code:",id:"noncompliant-code",level:4},{value:"Compliant Code:",id:"compliant-code",level:4},{value:"ClassNaming",id:"classnaming",level:3},{value:"Configuration options:",id:"configuration-options-1",level:4},{value:"ConstructorParameterNaming",id:"constructorparameternaming",level:3},{value:"Configuration options:",id:"configuration-options-2",level:4},{value:"EnumNaming",id:"enumnaming",level:3},{value:"Configuration options:",id:"configuration-options-3",level:4},{value:"ForbiddenClassName",id:"forbiddenclassname",level:3},{value:"Configuration options:",id:"configuration-options-4",level:4},{value:"FunctionMaxLength",id:"functionmaxlength",level:3},{value:"Configuration options:",id:"configuration-options-5",level:4},{value:"FunctionMinLength",id:"functionminlength",level:3},{value:"Configuration options:",id:"configuration-options-6",level:4},{value:"FunctionNaming",id:"functionnaming",level:3},{value:"Configuration options:",id:"configuration-options-7",level:4},{value:"FunctionParameterNaming",id:"functionparameternaming",level:3},{value:"Configuration options:",id:"configuration-options-8",level:4},{value:"InvalidPackageDeclaration",id:"invalidpackagedeclaration",level:3},{value:"Configuration options:",id:"configuration-options-9",level:4},{value:"LambdaParameterNaming",id:"lambdaparameternaming",level:3},{value:"Configuration options:",id:"configuration-options-10",level:4},{value:"MatchingDeclarationName",id:"matchingdeclarationname",level:3},{value:"Configuration options:",id:"configuration-options-11",level:4},{value:"Noncompliant Code:",id:"noncompliant-code-1",level:4},{value:"Compliant Code:",id:"compliant-code-1",level:4},{value:"MemberNameEqualsClassName",id:"membernameequalsclassname",level:3},{value:"Configuration options:",id:"configuration-options-12",level:4},{value:"Noncompliant Code:",id:"noncompliant-code-2",level:4},{value:"Compliant Code:",id:"compliant-code-2",level:4},{value:"NoNameShadowing",id:"nonameshadowing",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-3",level:4},{value:"Compliant Code:",id:"compliant-code-3",level:4},{value:"NonBooleanPropertyPrefixedWithIs",id:"nonbooleanpropertyprefixedwithis",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-4",level:4},{value:"Compliant Code:",id:"compliant-code-4",level:4},{value:"ObjectPropertyNaming",id:"objectpropertynaming",level:3},{value:"Configuration options:",id:"configuration-options-13",level:4},{value:"PackageNaming",id:"packagenaming",level:3},{value:"Configuration options:",id:"configuration-options-14",level:4},{value:"TopLevelPropertyNaming",id:"toplevelpropertynaming",level:3},{value:"Configuration options:",id:"configuration-options-15",level:4},{value:"VariableMaxLength",id:"variablemaxlength",level:3},{value:"Configuration options:",id:"configuration-options-16",level:4},{value:"VariableMinLength",id:"variableminlength",level:3},{value:"Configuration options:",id:"configuration-options-17",level:4},{value:"VariableNaming",id:"variablenaming",level:3},{value:"Configuration options:",id:"configuration-options-18",level:4}],d={toc:u};function k(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The naming ruleset contains rules which assert the naming of different parts of the codebase."),(0,o.kt)("h3",{id:"booleanpropertynaming"},"BooleanPropertyNaming"),(0,o.kt)("p",null,"Reports when a boolean property doesn't match a pattern"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Requires Type Resolution")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,o.kt)("h4",{id:"configuration-options"},"Configuration options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"allowedPattern")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'^(is|has|are)'"),")"),(0,o.kt)("p",{parentName:"li"},"naming pattern")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("del",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"del"},"ignoreOverridden"))," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Deprecated"),": This configuration is ignored and will be removed in the future"),(0,o.kt)("p",{parentName:"li"},"ignores properties that have the override modifier"))),(0,o.kt)("h4",{id:"noncompliant-code"},"Noncompliant Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val progressBar: Boolean = true\n")),(0,o.kt)("h4",{id:"compliant-code"},"Compliant Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val hasProgressBar: Boolean = true\n")),(0,o.kt)("h3",{id:"classnaming"},"ClassNaming"),(0,o.kt)("p",null,"Reports class or object names that do not follow the specified naming convention."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Aliases"),": ClassName"),(0,o.kt)("h4",{id:"configuration-options-1"},"Configuration options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"classPattern")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'[A-Z][a-zA-Z0-9]*'"),")"),(0,o.kt)("p",{parentName:"li"},"naming pattern"))),(0,o.kt)("h3",{id:"constructorparameternaming"},"ConstructorParameterNaming"),(0,o.kt)("p",null,"Reports constructor parameter names that do not follow the specified naming convention."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,o.kt)("h4",{id:"configuration-options-2"},"Configuration options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"parameterPattern")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'[a-z][A-Za-z0-9]*'"),")"),(0,o.kt)("p",{parentName:"li"},"naming pattern")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"privateParameterPattern")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'[a-z][A-Za-z0-9]*'"),")"),(0,o.kt)("p",{parentName:"li"},"naming pattern")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"excludeClassPattern")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'$^'"),")"),(0,o.kt)("p",{parentName:"li"},"ignores variables in classes which match this regex")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("del",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"del"},"ignoreOverridden"))," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Deprecated"),": This configuration is ignored and will be removed in the future"),(0,o.kt)("p",{parentName:"li"},"ignores constructor properties that have the override modifier"))),(0,o.kt)("h3",{id:"enumnaming"},"EnumNaming"),(0,o.kt)("p",null,"Reports enum names that do not follow the specified naming convention."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,o.kt)("h4",{id:"configuration-options-3"},"Configuration options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"enumEntryPattern")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'[A-Z][_a-zA-Z0-9]*'"),")"),(0,o.kt)("p",{parentName:"li"},"naming pattern"))),(0,o.kt)("h3",{id:"forbiddenclassname"},"ForbiddenClassName"),(0,o.kt)("p",null,"Reports class names which are forbidden per configuration. By default, this rule does not report any classes.\nExamples for forbidden names might be too generic class names like ",(0,o.kt)("inlineCode",{parentName:"p"},"...Manager"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,o.kt)("h4",{id:"configuration-options-4"},"Configuration options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"forbiddenName")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"[]"),")"),(0,o.kt)("p",{parentName:"li"},"forbidden class names"))),(0,o.kt)("h3",{id:"functionmaxlength"},"FunctionMaxLength"),(0,o.kt)("p",null,"Reports when very long function names are used."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,o.kt)("h4",{id:"configuration-options-5"},"Configuration options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"maximumFunctionNameLength")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"30"),")"),(0,o.kt)("p",{parentName:"li"},"maximum name length"))),(0,o.kt)("h3",{id:"functionminlength"},"FunctionMinLength"),(0,o.kt)("p",null,"Reports when very short function names are used."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,o.kt)("h4",{id:"configuration-options-6"},"Configuration options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"minimumFunctionNameLength")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"3"),")"),(0,o.kt)("p",{parentName:"li"},"minimum name length"))),(0,o.kt)("h3",{id:"functionnaming"},"FunctionNaming"),(0,o.kt)("p",null,"Reports function names that do not follow the specified naming convention.\nOne exception are factory functions used to create instances of classes.\nThese factory functions can have the same name as the class being created."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Aliases"),": FunctionName"),(0,o.kt)("h4",{id:"configuration-options-7"},"Configuration options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"functionPattern")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'[a-z][a-zA-Z0-9]*'"),")"),(0,o.kt)("p",{parentName:"li"},"naming pattern")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"excludeClassPattern")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'$^'"),")"),(0,o.kt)("p",{parentName:"li"},"ignores functions in classes which match this regex")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("del",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"del"},"ignoreOverridden"))," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Deprecated"),": This configuration is ignored and will be removed in the future"),(0,o.kt)("p",{parentName:"li"},"ignores functions that have the override modifier"))),(0,o.kt)("h3",{id:"functionparameternaming"},"FunctionParameterNaming"),(0,o.kt)("p",null,"Reports function parameter names that do not follow the specified naming convention."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,o.kt)("h4",{id:"configuration-options-8"},"Configuration options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"parameterPattern")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'[a-z][A-Za-z0-9]*'"),")"),(0,o.kt)("p",{parentName:"li"},"naming pattern")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"excludeClassPattern")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'$^'"),")"),(0,o.kt)("p",{parentName:"li"},"ignores variables in classes which match this regex")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("del",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"del"},"ignoreOverriddenFunctions"))," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Deprecated"),": Use ",(0,o.kt)("inlineCode",{parentName:"p"},"ignoreOverridden")," instead"),(0,o.kt)("p",{parentName:"li"},"ignores overridden functions with parameters not matching the pattern")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("del",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"del"},"ignoreOverridden"))," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Deprecated"),": This configuration is ignored and will be removed in the future"),(0,o.kt)("p",{parentName:"li"},"ignores overridden functions with parameters not matching the pattern"))),(0,o.kt)("h3",{id:"invalidpackagedeclaration"},"InvalidPackageDeclaration"),(0,o.kt)("p",null,"Reports when the file location does not match the declared package."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.21.0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Aliases"),": PackageDirectoryMismatch"),(0,o.kt)("h4",{id:"configuration-options-9"},"Configuration options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"rootPackage")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"''"),")"),(0,o.kt)("p",{parentName:"li"},"if specified this part of the package structure is ignored")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"requireRootInDeclaration")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,o.kt)("p",{parentName:"li"},"requires the declaration to start with the specified rootPackage"))),(0,o.kt)("h3",{id:"lambdaparameternaming"},"LambdaParameterNaming"),(0,o.kt)("p",null,"Reports lambda parameter names that do not follow the specified naming convention."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,o.kt)("h4",{id:"configuration-options-10"},"Configuration options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"parameterPattern")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'[a-z][A-Za-z0-9]*|_'"),")"),(0,o.kt)("p",{parentName:"li"},"naming pattern"))),(0,o.kt)("h3",{id:"matchingdeclarationname"},"MatchingDeclarationName"),(0,o.kt)("p",null,'"If a Kotlin file contains a single non-private class (potentially with related top-level declarations),\nits name should be the same as the name of the class, with the .kt extension appended.\nIf a file contains multiple classes, or only top-level declarations,\nchoose a name describing what the file contains, and name the file accordingly.\nUse camel humps with an uppercase first letter (e.g. ProcessDeclarations.kt).'),(0,o.kt)("p",null,'The name of the file should describe what the code in the file does.\nTherefore, you should avoid using meaningless words such as "Util" in file names." - Official Kotlin Style Guide'),(0,o.kt)("p",null,"More information at: ",(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/coding-conventions.html"},"https://kotlinlang.org/docs/coding-conventions.html")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,o.kt)("h4",{id:"configuration-options-11"},"Configuration options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"mustBeFirst")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,o.kt)("p",{parentName:"li"},"name should only be checked if the file starts with a class or object"))),(0,o.kt)("h4",{id:"noncompliant-code-1"},"Noncompliant Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class Foo // FooUtils.kt\n\nfun Bar.toFoo(): Foo = ...\nfun Foo.toBar(): Bar = ...\n")),(0,o.kt)("h4",{id:"compliant-code-1"},"Compliant Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class Foo { // Foo.kt\n    fun stuff() = 42\n}\n\nfun Bar.toFoo(): Foo = ...\n")),(0,o.kt)("h3",{id:"membernameequalsclassname"},"MemberNameEqualsClassName"),(0,o.kt)("p",null,"This rule reports a member that has the same as the containing class or object.\nThis might result in confusion.\nThe member should either be renamed or changed to a constructor.\nFactory functions that create an instance of the class are exempt from this rule."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.2.0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,o.kt)("h4",{id:"configuration-options-12"},"Configuration options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("del",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"del"},"ignoreOverriddenFunction"))," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Deprecated"),": Use ",(0,o.kt)("inlineCode",{parentName:"p"},"ignoreOverridden")," instead"),(0,o.kt)("p",{parentName:"li"},"if overridden functions and properties should be ignored")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"ignoreOverridden")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,o.kt)("p",{parentName:"li"},"if overridden functions and properties should be ignored"))),(0,o.kt)("h4",{id:"noncompliant-code-2"},"Noncompliant Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MethodNameEqualsClassName {\n\n    fun methodNameEqualsClassName() { }\n}\n\nclass PropertyNameEqualsClassName {\n\n    val propertyEqualsClassName = 0\n}\n")),(0,o.kt)("h4",{id:"compliant-code-2"},"Compliant Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class Manager {\n\n    companion object {\n        // factory functions can have the same name as the class\n        fun manager(): Manager {\n            return Manager()\n        }\n    }\n}\n")),(0,o.kt)("h3",{id:"nonameshadowing"},"NoNameShadowing"),(0,o.kt)("p",null,"Disallows shadowing variable declarations.\nShadowing makes it impossible to access a variable with the same name in the scope."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.21.0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Requires Type Resolution")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,o.kt)("h4",{id:"noncompliant-code-3"},"Noncompliant Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun test(i: Int, j: Int, k: Int) {\n    val i = 1\n    val (j, _) = 1 to 2\n    listOf(1).map { k -> println(k) }\n    listOf(1).forEach {\n        listOf(2).forEach {\n        }\n    }\n}\n")),(0,o.kt)("h4",{id:"compliant-code-3"},"Compliant Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun test(i: Int, j: Int, k: Int) {\n    val x = 1\n    val (y, _) = 1 to 2\n    listOf(1).map { z -> println(z) }\n    listOf(1).forEach {\n        listOf(2).forEach { x ->\n        }\n    }\n}\n")),(0,o.kt)("h3",{id:"nonbooleanpropertyprefixedwithis"},"NonBooleanPropertyPrefixedWithIs"),(0,o.kt)("p",null,"Reports when property with 'is' prefix doesn't have a boolean type.\nPlease check the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-8.html#jls-8.3.2"},"chapter 8.3.2 at Java Language Specification")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Requires Type Resolution")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,o.kt)("h4",{id:"noncompliant-code-4"},"Noncompliant Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val isEnabled: Int = 500\n")),(0,o.kt)("h4",{id:"compliant-code-4"},"Compliant Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val isEnabled: Boolean = false\n")),(0,o.kt)("h3",{id:"objectpropertynaming"},"ObjectPropertyNaming"),(0,o.kt)("p",null,"Reports property names inside objects that do not follow the specified naming convention."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,o.kt)("h4",{id:"configuration-options-13"},"Configuration options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"constantPattern")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'[A-Za-z][_A-Za-z0-9]*'"),")"),(0,o.kt)("p",{parentName:"li"},"naming pattern")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"propertyPattern")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'[A-Za-z][_A-Za-z0-9]*'"),")"),(0,o.kt)("p",{parentName:"li"},"naming pattern")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"privatePropertyPattern")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'(_)?[A-Za-z][_A-Za-z0-9]*'"),")"),(0,o.kt)("p",{parentName:"li"},"naming pattern"))),(0,o.kt)("h3",{id:"packagenaming"},"PackageNaming"),(0,o.kt)("p",null,"Reports package names that do not follow the specified naming convention."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Aliases"),": PackageName, PackageDirectoryMismatch"),(0,o.kt)("h4",{id:"configuration-options-14"},"Configuration options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"packagePattern")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'[a-z]+(\\.[a-z][A-Za-z0-9]*)*'"),")"),(0,o.kt)("p",{parentName:"li"},"naming pattern"))),(0,o.kt)("h3",{id:"toplevelpropertynaming"},"TopLevelPropertyNaming"),(0,o.kt)("p",null,"Reports top level constant that which do not follow the specified naming convention."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,o.kt)("h4",{id:"configuration-options-15"},"Configuration options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"constantPattern")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'[A-Z][_A-Z0-9]*'"),")"),(0,o.kt)("p",{parentName:"li"},"naming pattern")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"propertyPattern")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'[A-Za-z][_A-Za-z0-9]*'"),")"),(0,o.kt)("p",{parentName:"li"},"naming pattern")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"privatePropertyPattern")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'_?[A-Za-z][_A-Za-z0-9]*'"),")"),(0,o.kt)("p",{parentName:"li"},"naming pattern"))),(0,o.kt)("h3",{id:"variablemaxlength"},"VariableMaxLength"),(0,o.kt)("p",null,"Reports when very long variable names are used."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,o.kt)("h4",{id:"configuration-options-16"},"Configuration options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"maximumVariableNameLength")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"64"),")"),(0,o.kt)("p",{parentName:"li"},"maximum name length"))),(0,o.kt)("h3",{id:"variableminlength"},"VariableMinLength"),(0,o.kt)("p",null,"Reports when very short variable names are used."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,o.kt)("h4",{id:"configuration-options-17"},"Configuration options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"minimumVariableNameLength")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),")"),(0,o.kt)("p",{parentName:"li"},"minimum name length"))),(0,o.kt)("h3",{id:"variablenaming"},"VariableNaming"),(0,o.kt)("p",null,"Reports variable names that do not follow the specified naming convention."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,o.kt)("h4",{id:"configuration-options-18"},"Configuration options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"variablePattern")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'[a-z][A-Za-z0-9]*'"),")"),(0,o.kt)("p",{parentName:"li"},"naming pattern")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"privateVariablePattern")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'(_)?[a-z][A-Za-z0-9]*'"),")"),(0,o.kt)("p",{parentName:"li"},"naming pattern")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"excludeClassPattern")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'$^'"),")"),(0,o.kt)("p",{parentName:"li"},"ignores variables in classes which match this regex")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("del",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"del"},"ignoreOverridden"))," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Deprecated"),": This configuration is ignored and will be removed in the future"),(0,o.kt)("p",{parentName:"li"},"ignores member properties that have the override modifier"))))}k.isMDXComponent=!0}}]);
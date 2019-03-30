(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./pages/AdvancedTopics/ContextData.mdx":function(e,n,o){"use strict";o.r(n),o.d(n,"default",function(){return y});var a=o("./node_modules/docz-core/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),t=o.n(a),s=o("./node_modules/docz-core/node_modules/@babel/runtime/helpers/classCallCheck.js"),r=o.n(s),i=o("./node_modules/docz-core/node_modules/@babel/runtime/helpers/createClass.js"),p=o.n(i),m=o("./node_modules/docz-core/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),l=o.n(m),d=o("./node_modules/docz-core/node_modules/@babel/runtime/helpers/getPrototypeOf.js"),c=o.n(d),u=o("./node_modules/docz-core/node_modules/@babel/runtime/helpers/inherits.js"),f=o.n(u),g=o("./node_modules/react/index.js"),T=o.n(g),h=o("./node_modules/@mdx-js/tag/dist/index.js"),y=function(e){function n(e){var o;return r()(this,n),(o=l()(this,c()(n).call(this,e))).layout=null,o}return f()(n,e),p()(n,[{key:"render",value:function(){var e=this.props,n=e.components;t()(e,["components"]);return T.a.createElement(h.MDXTag,{name:"wrapper",components:n},T.a.createElement(h.MDXTag,{name:"h1",components:n,props:{id:"context-data"}},"Context data"),T.a.createElement(h.MDXTag,{name:"p",components:n},"Some components might need to know a current form state. All this data is passed as ",T.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uniforms")," in ",T.a.createElement(h.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://facebook.github.io/react/docs/context.html"}},"React context"),"."),T.a.createElement(h.MDXTag,{name:"h2",components:n,props:{id:"available-context-data"}},"Available context data"),T.a.createElement(h.MDXTag,{name:"pre",components:n},T.a.createElement(h.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"MyComponentUsingUniformsContext.contextTypes = {\n  uniforms: PropTypes.shape({\n    name: PropTypes.arrayOf(PropTypes.string).isRequired,\n\n    error: PropTypes.any,\n    model: PropTypes.object.isRequired,\n\n    schema: PropTypes.shape({\n      getError: PropTypes.func.isRequired,\n      getErrorMessage: PropTypes.func.isRequired,\n      getErrorMessages: PropTypes.func.isRequired,\n      getField: PropTypes.func.isRequired,\n      getInitialValue: PropTypes.func.isRequired,\n      getProps: PropTypes.func.isRequired,\n      getSubfields: PropTypes.func.isRequired,\n      getType: PropTypes.func.isRequired,\n      getValidator: PropTypes.func.isRequired\n    }).isRequired,\n\n    state: PropTypes.shape({\n      changed: PropTypes.bool.isRequired,\n      changedMap: PropTypes.object.isRequired,\n      submitting: PropTypes.bool.isRequired,\n\n      label: PropTypes.bool.isRequired,\n      disabled: PropTypes.bool.isRequired,\n      placeholder: PropTypes.bool.isRequired\n    }).isRequired,\n\n    onChange: PropTypes.func.isRequired,\n    onSubmit: PropTypes.func.isRequired,\n    randomId: PropTypes.func.isRequired\n  }).isRequired\n};\n")),T.a.createElement(h.MDXTag,{name:"h2",components:n,props:{id:"example-displayif"}},"Example: ",T.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"DisplayIf")),T.a.createElement(h.MDXTag,{name:"pre",components:n},T.a.createElement(h.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import BaseField from 'uniforms/BaseField';\nimport nothing from 'uniforms/nothing';\nimport {Children} from 'react';\n\n// We have to ensure that there's only one child, because returning an array\n// from a component is prohibited.\nconst DisplayIf = ({children, condition}, {uniforms}) => (condition(uniforms) ? Children.only(children) : nothing);\nDisplayIf.contextTypes = BaseField.contextTypes;\n\nexport default DisplayIf;\n")),T.a.createElement(h.MDXTag,{name:"p",components:n},T.a.createElement(h.MDXTag,{name:"strong",components:n,parentName:"p"},"Example:")),T.a.createElement(h.MDXTag,{name:"pre",components:n},T.a.createElement(h.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},'const ThreeStepForm = ({schema}) => (\n  <AutoForm schema={schema}>\n    <TextField name="fieldA" />\n\n    <DisplayIf condition={context => context.model.fieldA}>\n      <section>\n        <TextField name="fieldB" />\n\n        <DisplayIf condition={context => context.model.fieldB}>\n          <span>Well done!</span>\n        </DisplayIf>\n      </section>\n    </DisplayIf>\n  </AutoForm>\n);\n')),T.a.createElement(h.MDXTag,{name:"h2",components:n,props:{id:"example-submitbutton"}},"Example: ",T.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"SubmitButton")),T.a.createElement(h.MDXTag,{name:"pre",components:n},T.a.createElement(h.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import BaseField from 'uniforms/BaseField';\nimport React from 'react';\nimport filterDOMProps from 'uniforms/filterDOMProps';\n\n// This field works as follows: render standard submit field and disable it, when\n// the form is invalid. It's a simplified version of a default SubmitField from\n// uniforms-unstyled.\nconst SubmitField = (\n  props,\n  {\n    uniforms: {\n      error,\n      state: {disabled, submitting, validating}\n    }\n  }\n) => <input disabled={!!(error || disabled || submitting || validating)} type=\"submit\" />;\nSubmitField.contextTypes = BaseField.contextTypes;\n\nexport default SubmitField;\n")),T.a.createElement(h.MDXTag,{name:"h2",components:n,props:{id:"example-swapfield"}},"Example: ",T.a.createElement(h.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"SwapField")),T.a.createElement(h.MDXTag,{name:"pre",components:n},T.a.createElement(h.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import BaseField from 'uniforms/BaseField';\nimport get from 'lodash/get';\nimport {Children} from 'react';\nimport {cloneElement} from 'react';\n\n// This field works as follows: on click of its child it swaps values of fieldA\n// and fieldB. It's that simple.\nconst SwapField = ({children, fieldA, fieldB}, {uniforms: {model, onChange}}) =>\n  cloneElement(Children.only(children), {\n    onClick() {\n      const valueA = get(model, fieldA);\n      const valueB = get(model, fieldB);\n\n      onChange(fieldA, valueB);\n      onChange(fieldB, valueA);\n    }\n  });\nSwapField.contextTypes = BaseField.contextTypes;\n\nexport default SwapField;\n")),T.a.createElement(h.MDXTag,{name:"p",components:n},T.a.createElement(h.MDXTag,{name:"strong",components:n,parentName:"p"},"Example:")),T.a.createElement(h.MDXTag,{name:"pre",components:n},T.a.createElement(h.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},'<section>\n  <TextField name="firstName" />\n  <SwapField fieldA="firstName" fieldB="lastName">\n    <Icon name="refresh" />\n  </SwapField>\n  <TextField name="lastName" />\n</section>\n')))}}]),n}(T.a.Component)}}]);
//# sourceMappingURL=pages-advanced-topics-context-data.f1c320e65cff2160f14e.js.map
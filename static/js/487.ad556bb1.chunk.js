"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[487],{9487:function(n,e,r){r.r(e),r.d(e,{default:function(){return z}});var t,o,a,s,i,c,u,l=r(1413),d=r(2791),x=r(9434),p=r(7689),h=r(3329),b=function(n){return function(e){return(0,x.v9)((function(n){return n.user.userData}))?(0,h.jsx)(n,(0,l.Z)({},e)):(0,h.jsx)(p.Fg,{to:"/login",replace:!0})}},m=r(168),f=r(6444),g=f.ZP.div(t||(t=(0,m.Z)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"]))),j=f.ZP.span(o||(o=(0,m.Z)(["\n    width: 120px;\n"]))),v=f.ZP.button(a||(a=(0,m.Z)(["\n    font-size: 10px;\n    border: none;\n    outline: none;\n    border-radius: 6px;\n    padding: 4px;\n    text-transform: uppercase;\n    background: rgb(255 107 96);\n    color: #fff;\n\n  &:hover {\n    background: rgb(221 255 28);\n    color: #1ab188;\n    cursor: pointer;\n}\n"]))),Z=function(n){var e=n.id,r=n.name,t=n.number,o=n.onDeleteContact;return(0,h.jsxs)(g,{children:[(0,h.jsx)(j,{children:r}),(0,h.jsx)(j,{children:t}),(0,h.jsx)(v,{onClick:function(){return o(e)},type:"button",children:"\u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \xd7"})]})},C=f.ZP.form(s||(s=(0,m.Z)(["\n        display: flex;\nflex-direction: column;\n"]))),y=f.ZP.label(i||(i=(0,m.Z)(["\nmargin-bottom: 7px;\nfont-weight: bold;\n"]))),k=f.ZP.input(c||(c=(0,m.Z)(["\nmargin-bottom: 7px;\npadding: 2px 7px;\n\nheight: 30px;\nborder-style: none;\nbox-shadow: 6px 6px 12px rgba(0, 0, 0, 0.1);"]))),w=f.ZP.button(u||(u=(0,m.Z)(["\nwidth: 250px;\nheight: 30px;\n\n  padding: 7px;\n  margin: 10px;\n \n  border: none;\n  color: black;\n  font-weight: bold;\n  cursor: pointer;\n\n   border-radius: 5px;\n   background: #DEB887;\n  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.1);\n\n  &:hover {\n    font-size: 15px;\n  }\n\n  &:active {\n    background: #D2B48C;\n     box-shadow: inset 6px 6px 12px rgba(0, 0, 0, 0.1);\n  }\n  "]))),A=r(709);var D=function(n){var e=(0,x.I0)(),r=n.contacts;return(0,h.jsxs)(C,{onSubmit:function(n){n.preventDefault();var t={name:n.currentTarget.elements.name.value,number:n.currentTarget.elements.number.value};r.some((function(n){return n.name.toLowerCase()===t.name.toLowerCase()}))?alert("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 ".concat(t.name," \u0432\u0436\u0435 \u0456\u0441\u043d\u0443\u0454 \u0432 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0456\u0439 \u043a\u043d\u0438\u0437\u0456")):e((0,A.je)(t)),n.currentTarget.reset()},children:[(0,h.jsx)("h2",{children:"\u0414\u043e\u0434\u0430\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"}),(0,h.jsxs)(y,{children:[(0,h.jsx)("br",{}),(0,h.jsx)("b",{children:"Name"}),(0,h.jsx)(k,{autoComplete:"clear on escape",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Ba",required:!0})]}),(0,h.jsxs)(y,{children:[(0,h.jsx)("br",{}),(0,h.jsx)("b",{children:"Number"}),(0,h.jsx)(k,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,h.jsx)(w,{type:"submit",children:"\u0434\u043e\u0434\u0430\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})},P=function(n){var e=n.value,r=n.contacts,t=n.onChange,o=n.onDeleteContact;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Contacts"}),(0,h.jsxs)("label",{children:[(0,h.jsx)("span",{children:"\u0437\u043d\u0430\u0439\u0434\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0437\u0430 \u0456\u043c'\u044f\u043c \u0442\u0443\u0442"}),(0,h.jsx)("input",{onChange:t,type:"text",name:"name",value:e})]})]}),void 0!==r&&Array.isArray(r)&&0===r.length&&(0,h.jsx)("ul",{children:r.map((function(n){return(0,h.jsx)("li",{children:(0,h.jsx)(Z,(0,l.Z)((0,l.Z)({},n),{},{onDeleteContact:function(){return o(n.id)}}))},n.id)}))})]})},_=r(3521),z=b((function(){var n=(0,x.I0)(),e=(0,x.v9)((function(n){return n.user.userData})),r=(0,x.v9)((function(n){return n.phonebook.contacts})),t=(0,x.v9)((function(n){return n.phonebook.isLoading})),o=(0,x.v9)((function(n){return n.phonebook.error}));(0,d.useEffect)((function(){e&&n((0,A.VC)())}),[n,e]);var a=function(e){n((0,A.xX)(e))},s=Array.isArray(r)&&r.length>0,i=Array.isArray(r)&&0===r.length&&!t;return(0,h.jsxs)("div",{children:[i?(0,h.jsx)("p",{children:"\u043f\u043e\u043a\u0438 \u0449\u043e \u043d\u0435\u043c\u0430\u0454 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u0438\u0445 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432"}):(0,h.jsx)("p",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u0438\u0445 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432 :"}),(0,h.jsx)(D,{contacts:r}),(0,h.jsx)(P,{contacts:function(){if(r&&0!==r.length)return r}(),onChange:function(n){console.log(n.target.value);var e=Object.values(r);console.log(e())},onDeleteContact:a}),(0,h.jsx)("ul",{children:s&&r.map((function(n){var e=n.name,r=n.number,t=n.id;return(0,h.jsx)("li",{children:(0,h.jsx)(Z,{onDeleteContact:a,name:e,number:r,id:t})},t)}))}),t&&(0,h.jsx)(_.c,{}),o&&(0,h.jsxs)("p",{children:[" ",o," "]})]})}))}}]);
//# sourceMappingURL=487.ad556bb1.chunk.js.map
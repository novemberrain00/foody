(this.webpackJsonpfoody=this.webpackJsonpfoody||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),a=n(7),r=n.n(a),i=n(2),u=n(3),o=n(5),l=n(4),j=n(9),p=n(13),b={amountForCycle:1,amountForButton:1},m={isMenuOpened:!1},h=Object(j.a)({ings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ING":return console.log(e.amountForButton),{amountForCycle:e.amountForCycle+1,amountForButton:e.amountForButton+1};case"REM_ING":return console.log(e.amountForButton),Object(p.a)(Object(p.a)({},e),{},{amountForButton:e.amountForButton-1});default:return e}},menu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MENU_OPENED":return{isMenuOpened:!e.isMenuOpened};default:return e}}}),O=Object(j.b)(h),d=n(6),f=(n(22),n(1)),v=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.isMenuOpened?"hamburger hamburger_active":"hamburger";return Object(f.jsxs)("div",{onClick:function(){O.dispatch({type:"MENU_OPENED"})},className:e,children:[Object(f.jsx)("span",{className:"hamburger__line"}),Object(f.jsx)("span",{className:"hamburger__line"}),Object(f.jsx)("span",{className:"hamburger__line"})]})}}]),n}(s.Component),_=Object(d.b)((function(e){return{isMenuOpened:e.menu.isMenuOpened}}))(v),x=(n(24),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"recipes-link-wrapper",children:Object(f.jsx)("a",{className:"recipes-link",href:"#",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0440\u0435\u0446\u0435\u043f\u0442\u043e\u0432 (0)"})})}}]),n}(s.Component)),N=(n(25),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("header",{className:"app-header",children:[Object(f.jsx)(_,{}),Object(f.jsx)(x,{})]})}}]),n}(s.Component)),y=n(8),g=(n(26),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={showInput:!0,inputClassList:"search-container__item input"},e.onInputRemoved=e.onInputRemoved.bind(Object(y.a)(e)),e}return Object(u.a)(n,[{key:"onInputRemoved",value:function(){var e=this;this.setState({inputClassList:"search-container__item input input_removed"}),setTimeout((function(){e.setState({showInput:!1}),O.dispatch({type:"REM_ING"})}),990)}},{key:"render",value:function(){return this.state.showInput?this.props.amount>1?Object(f.jsxs)("div",{className:"input-wrapper",children:[Object(f.jsx)("input",{className:this.state.inputClassList,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438\u043d\u0433\u0440\u0435\u0434\u0438\u0435\u043d\u0442\u0430..."}),Object(f.jsx)("button",{onClick:this.onInputRemoved,className:"search-container__removing",children:"-"})]}):Object(f.jsx)("div",{className:"input-wrapper",children:Object(f.jsx)("input",{className:this.state.inputClassList,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438\u043d\u0433\u0440\u0435\u0434\u0438\u0435\u043d\u0442\u0430..."})}):null}}]),n}(s.Component)),k=(n(27),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"renderIngs",value:function(){for(var e=[],t=0;t<this.props.amountForCycle;t++)e.push(Object(f.jsx)(g,{amount:this.props.amountForButton}));return e}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"search-container",children:[this.renderIngs(),Object(f.jsx)("button",{onClick:function(){return O.dispatch({type:"ADD_ING"})},className:"search-container__adding",children:"+"})]})}}]),n}(s.Component)),C=Object(d.b)((function(e){return{amountForCycle:e.ings.amountForCycle,amountForButton:e.ings.amountForButton}}))(k),F=(n(28),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.isMenuOpened?"menu menu_opened position-absolute":"menu position-absolute";return Object(f.jsx)("nav",{className:e,children:Object(f.jsxs)("ul",{className:"menu__list",children:[Object(f.jsx)("li",{className:"menu__list-item",children:Object(f.jsx)("a",{className:"menu__list-link",href:"#",children:"\u041f\u043e\u0438\u0441\u043a \u0440\u0435\u0446\u0435\u043f\u0442\u0430"})}),Object(f.jsx)("li",{className:"menu__list-item",children:Object(f.jsx)("a",{className:"menu__list-link",href:"#",children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u0440\u0435\u0446\u0435\u043f\u0442\u043e\u0432"})}),Object(f.jsx)("li",{className:"menu__list-item",children:Object(f.jsx)("a",{className:"menu__list-link",href:"#",children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0440\u0435\u0446\u0435\u043f\u0442\u044b"})}),Object(f.jsx)("li",{className:"menu__list-item",children:Object(f.jsx)("a",{className:"menu__list-link",href:"#",children:"GitHub"})})]})})}}]),n}(s.Component)),I=Object(d.b)((function(e){return{isMenuOpened:e.menu.isMenuOpened}}))(F),M=(n(29),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)(d.a,{store:O,children:Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)(I,{}),Object(f.jsx)(N,{}),Object(f.jsx)(C,{})]})})}}]),n}(s.Component));r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(M,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.478d40fa.chunk.js.map
(this.webpackJsonpysblog=this.webpackJsonpysblog||[]).push([[0],[,,,,,,,,,,,,,function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},,function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){"use strict";t.r(e);var a=t(1),i=t.n(a),n=t(8),l=t.n(n),s=(t(13),t(14),t(2)),r=t(3),c=t(6),o=t(5),u=t(4),d=(t(15),t(16),t(17),t(18),t(19),{HeaderMenu:{"DAILY LIFE":["Volleyball","Coding","Actuary","Other"],ACCOUNT:["Account Info","Log Out"]}}),v=t(0),b=function(A){Object(o.a)(t,A);var e=Object(u.a)(t);function t(A){var a;return Object(s.a)(this,t),(a=e.call(this,A)).state={title:a.props.title,rows:d.HeaderMenu[a.props.title]},a}return Object(r.a)(t,[{key:"render",value:function(){var A=this.state.rows.map((function(A){return Object(v.jsx)("li",{className:"menu-row",children:A})}));return Object(v.jsxs)("ul",{className:"menu-column-container",children:[Object(v.jsx)("li",{children:Object(v.jsx)("h2",{children:this.state.title})}),A]})}}]),t}(i.a.Component),f=function(A){Object(o.a)(t,A);var e=Object(u.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"header-menu-container",children:[Object(v.jsx)(b,{title:"DAILY LIFE"}),Object(v.jsx)(b,{title:"ACCOUNT"})]})}}]),t}(i.a.Component),p=function(A){Object(o.a)(t,A);var e=Object(u.a)(t);function t(A){var a;return Object(s.a)(this,t),(a=e.call(this,A)).state={navOpen:!1},a.navBarOpen=a.navBarOpen.bind(Object(c.a)(a)),a}return Object(r.a)(t,[{key:"navBarOpen",value:function(){var A=this;document.querySelectorAll(".nav-bar-line").forEach((function(e){A.state.navOpen?(e.classList.add("nav-bar-line-close"),e.classList.remove("nav-bar-line-click")):(e.classList.add("nav-bar-line-click"),e.classList.remove("nav-bar-line-close"))})),this.setState({navOpen:!this.state.navOpen})}},{key:"componentDidUpdate",value:function(A,e,t){A.open!==this.props.open&&(this.setState({navOpen:!1}),document.querySelectorAll(".nav-bar-line").forEach((function(A){A.classList.remove("nav-bar-line-click"),A.classList.remove("nav-bar-line-close")})))}},{key:"render",value:function(){return Object(v.jsxs)("header",{className:"header-container",children:[Object(v.jsxs)("div",{className:"header-inner-container",children:[Object(v.jsx)("img",{src:"data:image/png;base64,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",className:"header-logo",alt:"logo"}),Object(v.jsx)("div",{className:"header-blank"}),Object(v.jsxs)("div",{className:"header-nav-bar",onClick:this.navBarOpen,children:[Object(v.jsx)("hr",{className:"nav-bar-line"}),Object(v.jsx)("hr",{className:"nav-bar-line"}),Object(v.jsx)("hr",{className:"nav-bar-line"})]})]}),this.state.navOpen?Object(v.jsx)(f,{}):null]})}}]),t}(i.a.Component),q=(t(21),t(22),t(23),t.p+"static/media/top-body-first.5888e637.mp4"),V=function(A){Object(o.a)(t,A);var e=Object(u.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"top-body",children:[Object(v.jsx)("video",{src:q,className:"top-body-video",autoPlay:!0,loop:!0,muted:!0}),Object(v.jsx)("h1",{className:"top-body-title",onClick:this.click,children:"A Taiwanse student's personal blog! Dream to be a Actuary x Programer."}),Object(v.jsxs)("div",{className:"top-body-section",children:[Object(v.jsxs)("h1",{children:["Yoyo - ",Object(v.jsx)("br",{}),"Studying in ",Object(v.jsx)("br",{}),"NYCU DIF"]}),Object(v.jsx)("p",{children:"Majoring in information management and finance, I start learning programming after entering college and enjoy coding, especially web developping. My goal: Become an actuary having well programming ability! Therefore, this blog is for me practicing some front-end skill and  sharing my daily life, like volleyball or guitar."})]})]})}}]),t}(i.a.Component),m=(t(24),t(25),t.p+"static/media/bgimg.f98e7611.jpg"),j=function(A){Object(o.a)(t,A);var e=Object(u.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"isLinkFocus",value:function(){var A=document.querySelectorAll(".daily-life-link-block")[0];A.classList.toggle("link-not-focus"),A.classList.toggle("link-focus");var e=document.querySelectorAll(".arrow")[0];e.classList.add("arrow-focus1"),setTimeout((function(){return e.classList.add("arrow-focus2")}),200)}},{key:"isLinkNotFocus",value:function(){var A=document.querySelectorAll(".daily-life-link-block")[0];A.classList.toggle("link-not-focus"),A.classList.toggle("link-focus");var e=document.querySelectorAll(".arrow")[0];e.classList.remove("arrow-focus1"),e.classList.remove("arrow-focus2")}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"daily-life",children:[Object(v.jsx)("div",{className:"daily-life-title-container",children:Object(v.jsx)("h2",{className:"daily-life-title",children:"DAILY LIFE"})}),Object(v.jsx)("img",{src:m,className:"daily-life-img",alt:""}),Object(v.jsx)("div",{className:"daily-life-text",children:"To get more about my volleyball experience, click on the link..."}),Object(v.jsxs)("div",{className:"daily-life-link",onMouseEnter:this.isLinkFocus,onMouseLeave:this.isLinkNotFocus,children:[Object(v.jsx)("div",{className:"daily-life-link-block link-not-focus",children:Object(v.jsx)("img",{className:"arrow",src:"data:image/png;base64,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",alt:""})}),Object(v.jsx)("div",{className:"daily-life-link-title",children:"Get some stories"})]})]})}}]),t}(i.a.Component),O=function(A){Object(o.a)(t,A);var e=Object(u.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"body",children:[Object(v.jsx)(V,{}),Object(v.jsx)(j,{})]})}}]),t}(i.a.Component),y=function(){var A=document.querySelector(".top-body-section"),e=document.querySelector(".daily-life-img"),t=document.querySelector(".daily-life-title"),a=A.children[0],i=A.children[1];window.pageYOffset<240?(a.classList.remove("top-body-section-display"),i.classList.remove("top-body-section-display"),e.classList.remove("daily-life-img-display"),t.classList.remove("daily-life-title-fixed")):window.pageYOffset>280&&window.pageYOffset<950?(e.classList.remove("daily-life-img-display"),t.classList.remove("daily-life-title-fixed"),a.classList.add("top-body-section-display"),i.classList.add("top-body-section-display")):window.pageYOffset>950&&window.pageYOffset<1540?(t.classList.remove("daily-life-title-fixed"),t.innerHTML="DAILY LIFE",e.classList.add("daily-life-img-display")):window.pageYOffset>1540&&window.pageYOffset<2e3&&(t.classList.add("daily-life-title-fixed"),t.innerHTML="VOLLEYBALL")},h=function(A){Object(o.a)(t,A);var e=Object(u.a)(t);function t(A){var a;return Object(s.a)(this,t),(a=e.call(this,A)).state={open:!1},a.handleWheel=a.handleWheel.bind(Object(c.a)(a)),document.onwheel=a.handleWheel,a}return Object(r.a)(t,[{key:"handleWheel",value:function(A){var e=function(A){var e=null;return clearTimeout(e),e=setTimeout((function(){var e=document.querySelector(".header-container");A.deltaY<=0?(e.classList.remove("header-container-close"),e.classList.add("header-container-open")):(e.classList.remove("header-container-open"),e.classList.add("header-container-close")),y()}),150),A.deltaY<=0}(A);this.setState({open:e})}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"mainpage",children:[Object(v.jsx)(p,{open:this.state.open}),Object(v.jsx)(O,{})]})}}]),t}(i.a.Component);var g=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(h,{})})},X=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,n=e.getLCP,l=e.getTTFB;t(A),a(A),i(A),n(A),l(A)}))};l.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(g,{})}),document.getElementById("root")),X()}],[[26,1,2]]]);
//# sourceMappingURL=main.b0969787.chunk.js.map
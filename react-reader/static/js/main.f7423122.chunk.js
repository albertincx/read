(this["webpackJsonpreact-reader"]=this["webpackJsonpreact-reader"]||[]).push([[0],{117:function(t,e,n){"use strict";(function(t){var o=n(36),i=n.n(o),a=n(77),r=n(73),c=n(21),s=n(22),l=n(24),u=n(23),d=n(6),h=n(1),p=n(0),f=n(30),b=n.n(f),g=n(5),j=n(74),v=n.n(j),x=n(78),m=n(25);function O(){var t=Object(d.a)(['\n  * {\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;\n    margin: 0;\n    padding: 0;\n    color: inherit;\n    font-size: inherit;\n    font-weight: 300;\n    line-height: 1.4;\n    word-break: break-word;\n  }\n  html {\n    font-size: 62.5%;\n  }\n  body {\n    margin: 0;\n    padding: 0;\n    min-height: 100vh;\n    font-size: 1.8rem;\n    background: #333;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    color: #fff;\n  }\n  #tran-a {\n    position: absolute;\n    top: 0;\n    left: 0;\n    /* padding: 20px; */\n    /* background: #565656; */\n    z-index: 4;\n\n    width: 100%;\n    height: 100%;\n  }\n  #translateLayer-border {\n  position: absolute;\n  border: 27px solid #777;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n\n  }\n  #translateLayer {\n  font-size: 16px;\n    position: absolute;\n    top: 0;\n    left: 1rem;\n    right: 1rem;\n    bottom: 1rem;\n    -webkit-transition: all 0.6s ease;\n    transition: all 0.6s ease;\n    0 0 5px rgba(0,0,0,.3): ;\n    opacity: 0;\n    margin: 27px 17px;\n  }\n  a#tran-a {text-decoration: none;}\n  #translateLayer {opacity: 0; }\n  #translateLayer.show {opacity: 1;}\n  .btns {\n  display: flex;\n  justify-content: space-between;\n  width : 100%;\n  }\n  #translateLayer button {\n  z-index: 1\n  }\n  #translateLayer.show button {\n  z-index: 3\n  }\n  .firstLayer button {\n  z-index: 2\n  }\n']);return O=function(){return t},t}var y=t.localStorage||null,k=Object(g.a)(O()),w=[],C=[],L=function(e){Object(l.a)(o,e);var n=Object(u.a)(o);function o(e){var s;return Object(c.a)(this,o),(s=n.call(this,e)).toggleFullscreen=function(){s.setState({fullscreen:!s.state.fullscreen},(function(){setTimeout((function(){document.createEvent("UIEvents").initUIEvent("resize",!0,!1,t,0)}),1e3)}))},s.onLocationChanged=function(t){console.log("location"),s.setState({location:t},(function(){y&&y.setItem("epub-location",t)}))},s.onLocationChanged2=function(t){s.setState({location2:t},(function(){y&&y.setItem("epub-location2",t)}))},s.onToggleFontSize=function(){var t=!s.state.largeText;s.setState({largeText:t},(function(){s.rendition.themes.fontSize(t?"140%":"100%")}))},s.getRendition=function(t){var e=s.state.largeText;s.rendition=t,t.themes.fontSize(e?"140%":"100%")},s.handleChangeFile=function(){var t=Object(r.a)(i.a.mark((function t(e,n){var o,r,c,l;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n.length>0)){t.next=8;break}if(o=Object(a.a)(n[0],2),r=o[0],"application/epub+zip"===(c=o[1]).type){t.next=4;break}return t.abrupt("return",alert("Unsupported type"));case 4:return l=r.target.result,t.next=7,b.a.setItem("apiprocread_cache",l).then((function(t){})).catch((function(t){console.log(t)}));case 7:s.setState({localFile:l,localName:c.name,location:null});case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),s.handleChangeFile2=function(){var t=Object(r.a)(i.a.mark((function t(e,n){var o,r,c,l;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n.length>0)){t.next=8;break}if(o=Object(a.a)(n[0],2),r=o[0],"application/epub+zip"===(c=o[1]).type){t.next=4;break}return t.abrupt("return",alert("Unsupported type"));case 4:return l=r.target.result,t.next=7,b.a.setItem("apiprocread_cache2",l).then((function(t){})).catch((function(t){console.log(t)}));case 7:s.setState({localFile2:l,localName2:c.name,location2:null});case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),s.mouse=function(t){console.log("DOWN ",t,t.target.tagName),"BUTTON"===t.target.tagName||"translateLayer-border"!==t.target.getAttribute("id")||(t.target.classList.toggle("show"),document.getElementById("translateLayer").classList.toggle("show"))},s.click=function(t){console.log(t,t.target.tagName),"BUTTON"===t.target.tagName||"translateLayer-border"!==t.target.getAttribute("id")||(t.target.classList.toggle("show"),document.getElementById("translateLayer").classList.toggle("show"))},s.state={fullscreen:!1,localFile:w||null,localName:null,location:y&&y.getItem("epub-location")?y.getItem("epub-location"):2,location2:y&&y.getItem("epub-location")?y.getItem("epub-location"):2,localFile2:C||null,localName2:null,largeText:!1},s.rendition=null,s}return Object(s.a)(o,[{key:"componentDidMount",value:function(){var t=this;b.a.getItem("apiprocread_cache").then((function(e){console.log(e),t.setState({localFile:e})})).catch((function(t){console.log(t)})),b.a.getItem("apiprocread_cache2").then((function(e){console.log(e),t.setState({localFile2:e})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t=this.state,e=t.fullscreen,n=t.location,o=t.location2,i=t.localFile,a=t.localFile2,r=t.localName,c=t.localName2;return Object(h.jsxs)(m.c,{children:[Object(h.jsx)(k,{}),Object(h.jsx)(m.a,{children:Object(h.jsxs)(m.b,{className:"btns",children:[Object(h.jsx)(v.a,{as:"buffer",onChange:this.handleChangeFile,children:Object(h.jsx)(m.d,{children:"Upload epub"})}),Object(h.jsx)(v.a,{as:"buffer",onChange:this.handleChangeFile2,children:Object(h.jsx)(m.d,{children:"Upload Translated epub"})})]})}),Object(h.jsxs)(m.e,{fullscreen:e,children:[Object(h.jsx)(x.b,{className:"firstLayer",url:i||"",title:r||"",location:n,locationChanged:this.onLocationChanged,getRendition:this.getRendition}),Object(h.jsxs)("a",{id:"tran-a",href:"javascript:",onClick:this.click,onMouseDown:this.mouse,children:[Object(h.jsx)("div",{id:"translateLayer-border"}),Object(h.jsx)("div",{id:"translateLayer",children:a?Object(h.jsx)(x.b,{url:a||"",title:c||"",location:o,locationChanged:this.onLocationChanged2,getRendition:this.getRendition}):null})]})]})]})}}]),o}(p.Component);e.a=L}).call(this,n(13))},122:function(t,e,n){"use strict";n.r(e);var o=n(1),i=(n(0),n(72)),a=n(117);Object(i.render)(Object(o.jsx)(a.a,{}),document.getElementById("root"))},25:function(t,e,n){"use strict";n.d(e,"c",(function(){return O})),n.d(e,"e",(function(){return y})),n.d(e,"a",(function(){return k})),n.d(e,"b",(function(){return w})),n.d(e,"d",(function(){return L}));var o=n(6),i=n(5),a=n(31);function r(){var t=Object(o.a)(["\n  position: fixed;\n  bottom: 1.5rem;\n  right: 1.5rem;\n  z-index: 10;\n  background: #eee;\n  border-radius: 2px;\n  padding: 0.5rem;\n"]);return r=function(){return t},t}function c(){var t=Object(o.a)(['\n  vertical-align: middle;\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  background: #666;\n  margin-left: 5px;\n  border-radius: 50%;\n  position: relative;\n  transform: rotate(45deg);\n  &:before,\n  &:after {\n    content: "";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 60%;\n    height: 2px;\n    background: #fff;\n    margin-left: -30%;\n    margin-top: -1px;\n    border-radius: 1px;\n  }\n  &:after {\n    transform: rotate(-90deg);\n  }\n']);return c=function(){return t},t}function s(){var t=Object(o.a)(["\n    font-size: 16px;\n\n  "]);return s=function(){return t},t}function l(){var t=Object(o.a)(["\n  color: #808080;\n  font-size: 12px;\n  display: inline-block;\n  margin-left: 1rem;\n  ",";\n"]);return l=function(){return t},t}function u(){var t=Object(o.a)(["\n  font-family: inherit;\n  font-size: inherit;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  user-select: none;\n  appearance: none;\n  background: none;\n"]);return u=function(){return t},t}function d(){var t=Object(o.a)(["\n    width: 330px;\n    height: 104px;\n    display: inline-block;\n    margin-left: 2px;\n  "]);return d=function(){return t},t}function h(){var t=Object(o.a)(["\n  width: 250px;\n  height: auto;\n  display: block;\n  margin: 0 auto 0px;\n  ",";\n"]);return h=function(){return t},t}function p(){var t=Object(o.a)(["\n    margin-right: auto;\n  "]);return p=function(){return t},t}function f(){var t=Object(o.a)(["\n  ",";\n"]);return f=function(){return t},t}function b(){var t=Object(o.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: baseline;\n    padding-top: 0.5rem;\n  "]);return b=function(){return t},t}function g(){var t=Object(o.a)(["\n  ",";\n"]);return g=function(){return t},t}function j(){var t=Object(o.a)(["\n    display: flex;\n    align-items: flex-end;\n  "]);return j=function(){return t},t}function v(){var t=Object(o.a)(["\n  position: absolute;\n  top: 10px;\n  left: 20px;\n  right: 20px;\n\n  ",";\n"]);return v=function(){return t},t}function x(){var t=Object(o.a)(["\n  font-size: 16px;\n  position: absolute;\n  top: ","px;\n  left: ","rem;\n  right: ","rem;\n  bottom: ","rem;\n  transition: all 0.6s ease;\n  padding: 27px;\n  ",";\n"]);return x=function(){return t},t}function m(){var t=Object(o.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n  background: linear-gradient(to bottom, #f2f2f2 0%, #333 100%);\n  overflow: hidden;\n"]);return m=function(){return t},t}var O=i.c.div(m()),y=i.c.div(x(),(function(t){return t.fullscreen?0:60}),(function(t){return t.fullscreen?0:1}),(function(t){return t.fullscreen?0:1}),(function(t){return t.fullscreen?0:1}),(function(t){return!t.fullscreen&&"0 0 5px rgba(0,0,0,.3);"})),k=i.c.header(v(),Object(a.a)("tablet")(j())),w=i.c.div(g(),Object(a.a)("mobile")(b())),C=(i.c.a(f(),Object(a.a)("tablet")(p())),i.c.img(h(),Object(a.a)("tablet")(d())),i.c.button(u())),L=Object(i.c)(C)(l(),Object(a.a)("tablet")(s()));i.c.i(c()),Object(i.c)(C)(r())},49:function(t,e,n){"use strict";e.a={viewHolder:{position:"relative",height:"100%",width:"100%"},view:{height:"100%"}}},78:function(t,e,n){"use strict";n.d(e,"a",(function(){return o.a})),n.d(e,"b",(function(){return v}));var o=n(82),i=(n(49),n(21)),a=n(22),r=n(24),c=n(23),s=n(17),l=n(80),u=n(0),d=n.n(u),h=n(1),p=n(118),f={container:{overflow:"hidden",height:"100%"},readerArea:{position:"relative",zIndex:1,height:"100%",width:"100%",backgroundColor:"#fff",transition:"all .3s ease"},containerExpanded:{transform:"translateX(256px)"},titleArea:{position:"absolute",top:20,left:50,right:50,textAlign:"center",color:"#999"},reader:{position:"absolute",top:50,left:50,bottom:20,right:50},swipeWrapper:{position:"absolute",top:0,left:0,bottom:0,right:0,zIndex:200},prev:{left:1},next:{right:1},arrow:{outline:"none",border:"none",background:"none",position:"absolute",top:"50%",marginTop:-32,fontSize:64,padding:"0 10px",color:"#E2E2E2",fontFamily:"arial, sans-serif",cursor:"pointer",userSelect:"none",appearance:"none",fontWeight:"normal"},arrowHover:{color:"#777"},tocBackground:{position:"absolute",left:256,top:0,bottom:0,right:0,zIndex:1},tocArea:{position:"absolute",left:0,top:0,bottom:0,zIndex:0,width:256,overflowY:"auto",WebkitOverflowScrolling:"touch",background:"#f2f2f2",padding:"10px 0"},tocAreaButton:{userSelect:"none",appearance:"none",background:"none",border:"none",display:"block",fontFamily:"sans-serif",width:"100%",fontSize:".9em",textAlign:"left",padding:".9em 1em",borderBottom:"1px solid #ddd",color:"#aaa",boxSizing:"border-box",outline:"none",cursor:"pointer"},tocButton:{background:"none",border:"none",width:32,height:32,position:"absolute",top:10,left:10,borderRadius:2,outline:"none",cursor:"pointer"},tocButtonExpanded:{background:"#f2f2f2"},tocButtonBar:{position:"absolute",width:"60%",background:"#ccc",height:2,left:"50%",margin:"-1px -30%",top:"50%",transition:"all .5s ease"},tocButtonBarTop:{top:"35%"},tocButtonBottom:{top:"66%"},loadingView:{position:"absolute",top:"50%",left:"10%",right:"10%",color:"#ccc",textAlign:"center",margintop:"-.5em"}},b=function(t){var e=t.children,n=Object(l.a)(t,["children"]),o=Object(p.useSwipeable)(n);return Object(h.jsx)("div",Object(s.a)(Object(s.a)({},o),{},{children:e}))},g=function(t){Object(r.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).setLocation=function(){t.props.setLocation(t.props.href)},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.styles;return Object(h.jsx)("button",{onClick:this.setLocation,style:n,children:e})}}]),n}(u.PureComponent),j=function(t){Object(r.a)(n,t);var e=Object(c.a)(n);function n(t){var o;return Object(i.a)(this,n),(o=e.call(this,t)).toggleToc=function(){o.setState({expandedToc:!o.state.expandedToc})},o.next=function(){o.readerRef.current.nextPage()},o.prev=function(){o.readerRef.current.prevPage()},o.onTocChange=function(t){var e=o.props.tocChanged;o.setState({toc:t},(function(){return e&&e(t)}))},o.setLocation=function(t){var e=o.props.locationChanged;o.setState({expandedToc:!1},(function(){return e&&e(t)}))},o.readerRef=d.a.createRef(),o.state={expandedToc:!1,toc:!1},o}return Object(a.a)(n,[{key:"renderToc",value:function(){var t=this,e=this.state,n=e.toc,o=e.expandedToc,i=this.props.styles;return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{style:i.tocArea,children:Object(h.jsx)("div",{style:i.toc,children:n.map((function(e,n){return Object(u.createElement)(g,Object(s.a)(Object(s.a)({},e),{},{key:n,setLocation:t.setLocation,styles:i.tocAreaButton}))}))})}),o&&Object(h.jsx)("div",{style:i.tocBackground,onClick:this.toggleToc})]})}},{key:"renderTocToggle",value:function(){var t=this.state.expandedToc,e=this.props.styles;return Object(h.jsxs)("button",{style:Object.assign({},e.tocButton,t?e.tocButtonExpanded:{}),onClick:this.toggleToc,children:[Object(h.jsx)("span",{style:Object.assign({},e.tocButtonBar,e.tocButtonBarTop)}),Object(h.jsx)("span",{style:Object.assign({},e.tocButtonBar,e.tocButtonBottom)})]})}},{key:"render",value:function(){var t=this.props,e=t.title,n=t.showToc,i=t.loadingView,a=t.styles,r=t.locationChanged,c=t.swipeable,u=t.className,d=Object(l.a)(t,["title","showToc","loadingView","styles","locationChanged","swipeable","className"]),p=this.state,f=p.toc,g=p.expandedToc;return Object(h.jsxs)("div",{className:u,style:a.container,children:[Object(h.jsxs)("div",{style:Object.assign({},a.readerArea,g?a.containerExpanded:{}),children:[n&&this.renderTocToggle(),Object(h.jsx)("div",{style:a.titleArea,children:e}),Object(h.jsx)(b,{onSwipedRight:this.prev,onSwipedLeft:this.next,trackMouse:!0,children:Object(h.jsxs)("div",{style:a.reader,children:[Object(h.jsx)(o.a,Object(s.a)(Object(s.a)({ref:this.readerRef,loadingView:i},d),{},{tocChanged:this.onTocChange,locationChanged:r})),c&&Object(h.jsx)("div",{style:a.swipeWrapper})]})}),Object(h.jsx)("button",{style:Object.assign({},a.arrow,a.prev),onClick:this.prev,children:"\u2039"}),Object(h.jsx)("button",{style:Object.assign({},a.arrow,a.next),onClick:this.next,children:"\u203a"})]}),n&&f&&this.renderToc()]})}}]),n}(u.PureComponent);j.defaultProps={loadingView:Object(h.jsx)("div",{style:f.loadingView,children:"Loading\u2026"}),locationChanged:null,tocChanged:null,showToc:!0,styles:f};var v=j},82:function(t,e,n){"use strict";(function(t){var o=n(17),i=n(21),a=n(22),r=n(24),c=n(23),s=n(1),l=n(0),u=n.n(l),d=n(75),h=n.n(d),p=n(49);t.ePub=h.a;var f=function(t){Object(r.a)(n,t);var e=Object(c.a)(n);function n(t){var o;return Object(i.a)(this,n),(o=e.call(this,t)).onLocationChange=function(t){var e=o.props,n=e.location,i=e.locationChanged,a=t&&t.start;n!==a&&(o.location=a,i&&i(a))},o.handleKeyPress=function(t){var e=t.key;e&&"ArrowRight"===e&&o.nextPage(),e&&"ArrowLeft"===e&&o.prevPage()},o.state={isLoaded:!1,toc:[]},o.viewerRef=u.a.createRef(),o.location=t.location,o.book=o.rendition=o.prevPage=o.nextPage=null,o}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.initBook(!0),document.addEventListener("keyup",this.handleKeyPress,!1)}},{key:"initBook",value:function(){var t=this,e=this.props,n=e.url,o=e.tocChanged,i=e.epubInitOptions;this.book&&this.book.destroy(),this.book=new h.a(n,i),this.book.loaded.navigation.then((function(e){var n=e.toc;t.setState({isLoaded:!0,toc:n},(function(){o&&o(n),t.initReader()}))}))}},{key:"componentWillUnmount",value:function(){this.book=this.rendition=this.prevPage=this.nextPage=null,document.removeEventListener("keyup",this.handleKeyPress,!1)}},{key:"shouldComponentUpdate",value:function(t){return!this.state.isLoaded||t.location!==this.props.location||t.location!==this.props.location}},{key:"componentDidUpdate",value:function(t){t.location!==this.props.location&&this.location!==this.props.location&&this.rendition.display(this.props.location),t.url!==this.props.url&&this.initBook()}},{key:"initReader",value:function(){var t=this,e=this.state.toc,n=this.props,i=n.location,a=n.epubOptions,r=n.getRendition,c=this.viewerRef.current;this.rendition=this.book.renderTo(c,Object(o.a)({contained:!0,width:"100%",height:"100%"},a)),this.prevPage=function(){t.rendition.prev()},this.nextPage=function(){t.rendition.next()},this.registerEvents(),r&&r(this.rendition),"string"===typeof i||"number"===typeof i?this.rendition.display(i):e.length>0&&e[0].href?this.rendition.display(e[0].href):this.rendition.display()}},{key:"registerEvents",value:function(){var t=this.props,e=t.handleKeyPress,n=t.handleTextSelected;this.rendition.on("locationChanged",this.onLocationChange),this.rendition.on("keyup",e||this.handleKeyPress),n&&this.rendition.on("selected",n)}},{key:"renderBook",value:function(){var t=this.props.styles;return Object(s.jsx)("div",{ref:this.viewerRef,style:t.view})}},{key:"render",value:function(){var t=this.state.isLoaded,e=this.props,n=e.loadingView,o=e.styles;return Object(s.jsx)("div",{style:o.viewHolder,children:t&&this.renderBook()||n})}}]),n}(l.Component);f.defaultProps={loadingView:null,locationChanged:null,tocChanged:null,styles:p.a,epubOptions:{},epubInitOptions:{}},e.a=f}).call(this,n(13))}},[[122,1,2]]]);
//# sourceMappingURL=main.f7423122.chunk.js.map
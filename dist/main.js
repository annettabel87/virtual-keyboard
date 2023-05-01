(()=>{"use strict";var t={705:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,a,i){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(n)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(o[l]=!0)}for(var s=0;s<t.length;s++){var u=[].concat(t[s]);n&&o[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),e.push(u))}},e}},738:t=>{t.exports=function(t){return t[1]}},34:(t,e,r)=>{r.d(e,{Z:()=>c});var n=r(738),a=r.n(n),i=r(705),o=r.n(i)()(a());o.push([t.id,".board{max-width:1000px;padding:15px;background:#5d6c9b;box-shadow:0 0 50px rgba(0,0,0,.5);display:flex;flex-wrap:wrap;gap:8px 6px}",""]);const c=o},945:(t,e,r)=>{r.d(e,{Z:()=>c});var n=r(738),a=r.n(n),i=r(705),o=r.n(i)()(a());o.push([t.id,".button{height:45px;width:7%;max-width:90px;border-radius:4px;border:none;background:rgba(255,255,255,.2);color:#fff;font-size:21px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;transition:all .4s;box-shadow:0 5px #999}.button.active{background-color:#3d2b6e;box-shadow:0 2px #666;transform:translateY(4px)}.bigButton{width:450px;background:rgba(255,255,255,.2);border:none;transition:all .4s;box-shadow:0 5px #999}.bigButton.active{background-color:#3d2b6e;box-shadow:0 2px #666;transform:translateY(4px)}",""]);const c=o},827:(t,e,r)=>{r.d(e,{Z:()=>c});var n=r(738),a=r.n(n),i=r(705),o=r.n(i)()(a());o.push([t.id,".keyboard{display:flex;align-items:center;flex-direction:column}.lang{margin-bottom:10px;color:blue}",""]);const c=o},765:(t,e,r)=>{r.d(e,{Z:()=>c});var n=r(738),a=r.n(n),i=r(705),o=r.n(i)()(a());o.push([t.id,".output{display:block;width:90%;margin:30px auto;padding:10px;font-size:20px;height:calc(100vh - 380px);min-height:300px}",""]);const c=o},192:(t,e,r)=>{r.d(e,{Z:()=>c});var n=r(738),a=r.n(n),i=r(705),o=r.n(i)()(a());o.push([t.id,".light{background-color:red}",""]);const c=o},379:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var i={},o=[],c=0;c<t.length;c++){var l=t[c],s=n.base?l[0]+n.base:l[0],u=i[s]||0,d="".concat(s," ").concat(u);i[s]=u+1;var f=r(d),y={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)e[f].references++,e[f].updater(y);else{var g=a(y,n);n.byIndex=c,e.splice(c,0,{identifier:d,updater:g,references:1})}o.push(d)}return o}function a(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,a){var i=n(t=t||[],a=a||{});return function(t){t=t||[];for(var o=0;o<i.length;o++){var c=r(i[o]);e[c].references--}for(var l=n(t,a),s=0;s<i.length;s++){var u=r(i[s]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=l}}},569:t=>{var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.nc=void 0,(()=>{const t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=document.createElement(t);return a.className=r,a.innerHTML=n,e&&e.append(a),a};var e={Digit1:"1",Digit2:"2",Digit3:"3",Digit4:"4",Digit5:"5",Digit6:"6",Digit7:"7",Digit8:"8",Digit9:"9",Digit0:"0",Minus:"-",Equal:"=",Backspace:"&larr;",Tab:"Tab",KeyQ:"й",KeyW:"ц",KeyE:"у",KeyR:"к",KeyT:"е",KeyY:"н",KeyU:"г",KeyI:"ш",KeyO:"щ",KeyP:"з",BracketLeft:"х",BracketRight:"ъ",CapsLock:"&uArr;",KeyA:"ф",KeyS:"ы",KeyD:"в",KeyF:"а",KeyG:"п",KeyH:"р",KeyJ:"о",KeyK:"л",KeyL:"д",Semicolon:"ж",Quote:"э",Enter:"&crarr;",ShiftLeft:"Shift",KeyZ:"я",KeyX:"ч",KeyC:"с",KeyV:"м",KeyB:"и",KeyN:"т",KeyM:"ь",Comma:"б",Period:"ю",Slash:".",ArrowUp:"↑",Backslash:"\\",ControlLeft:"Ctrl",AltLeft:"Alt",Space:" ",AltRight:"Alt",ControlRight:"Ctrl",ArrowLeft:"←",ArrowDown:"↓",ArrowRight:"→"},n={Digit1:"!",Digit2:'"',Digit3:"№",Digit4:";",Digit5:"%",Digit6:":",Digit7:"?",Digit8:"*",Digit9:"(",Digit0:")",Minus:"_",Equal:"+",Backspace:"&larr;",Tab:"Tab",KeyQ:"Й",KeyW:"Ц",KeyE:"У",KeyR:"К",KeyT:"Е",KeyY:"Н",KeyU:"Г",KeyI:"Ш",KeyO:"Щ",KeyP:"З",BracketLeft:"Х",BracketRight:"Ъ",CapsLock:"&uArr;",KeyA:"Ф",KeyS:"Ы",KeyD:"В",KeyF:"А",KeyG:"П",KeyH:"Р",KeyJ:"О",KeyK:"Л",KeyL:"Д",Semicolon:"Ж",Quote:"Э",Enter:"&crarr;",ShiftLeft:"Shift",KeyZ:"Я",KeyX:"Ч",KeyC:"С",KeyV:"М",KeyB:"И",KeyN:"Т",KeyM:"Ь",Comma:"Б",Period:"Ю",Slash:",",ArrowUp:"↑",Backslash:"/",ControlLeft:"Ctrl",AltLeft:"Alt",Space:" ",AltRight:"Alt",ControlRight:"Ctrl",ArrowLeft:"←",ArrowDown:"↓",ArrowRight:"→"},a={Digit1:"1",Digit2:"2",Digit3:"3",Digit4:"4",Digit5:"5",Digit6:"6",Digit7:"7",Digit8:"8",Digit9:"9",Digit0:"0",Minus:"-",Equal:"=",Backspace:"&larr;",Tab:"Tab",KeyQ:"q",KeyW:"w",KeyE:"e",KeyR:"r",KeyT:"t",KeyY:"y",KeyU:"u",KeyI:"i",KeyO:"o",KeyP:"p",BracketLeft:"[",BracketRight:"]",CapsLock:"&uArr;",keyA:"a",keyS:"s",KeyD:"d",KeyF:"f",KeyG:"g",KeyH:"h",KeyJ:"j",KeyK:"k",KeyL:"l",Semicolon:";",Quote:"'",Enter:"&crarr;",Backslash:"\\",ShiftLeft:"Shift",KeyZ:"z",KeyX:"x",KeyC:"c",KeyV:"v",KeyB:"b",KeyN:"n",KeyM:"m",Comma:",",Period:".",ArrowUp:"↑",Slash:"/",ControlLeft:"Ctrl",AltLeft:"Alt",Space:" ",AltRight:"Alt",ControlRight:"Ctrl",ArrowLeft:"←",ArrowDown:"↓",ArrowRight:"→"},i={Digit1:"!",Digit2:"@",Digit3:"#",Digit4:"$",Digit5:"%",Digit6:"^",Digit7:"&",Digit8:"*",Digit9:"(",Digit0:")",Minus:"_",Equal:"+",Backspace:"&larr;",Tab:"Tab",KeyQ:"Q",KeyW:"W",KeyE:"E",KeyR:"R",KeyT:"T",KeyY:"Y",KeyU:"U",KeyI:"I",KeyO:"O",KeyP:"P",BracketLeft:"{",BracketRight:"}",CapsLock:"&uArr;",keyA:"A",keyS:"S",KeyD:"D",KeyF:"F",KeyG:"G",KeyH:"H",KeyJ:"J",KeyK:"K",KeyL:"L",Semicolon:":",Quote:'"',Enter:"&crarr;",Backslash:"|",ShiftLeft:"Shift",KeyZ:"Z",KeyX:"X",KeyC:"C",KeyV:"V",KeyB:"B",KeyN:"N",KeyM:"M",Comma:"<",Period:">",ArrowUp:"↑",Slash:"?",ControlLeft:"Ctrl",AltLeft:"Alt",Space:" ",AltRight:"Alt",ControlRight:"Ctrl",ArrowLeft:"←",ArrowDown:"↓",ArrowRight:"→"},o=r(379),c=r.n(o),l=r(795),s=r.n(l),u=r(569),d=r.n(u),f=r(565),y=r.n(f),g=r(216),p=r.n(g),h=r(589),K=r.n(h),v=r(765),m={};m.styleTagTransform=K(),m.setAttributes=y(),m.insert=d().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=p(),c()(v.Z,m),v.Z&&v.Z.locals&&v.Z.locals;var b=t("textarea",null,"output"),A={value:"",capsLock:!1,addValue:function(t){this.value+=this.capsLock?t.toUpperCase():t},getValue:function(){return this.value},removeLastChar:function(){this.value=this.value.slice(0,-1)},toggleCapsLock:function(){this.capsLock=!this.capsLock}};const L=b;var D=r(945),C={};C.styleTagTransform=K(),C.setAttributes=y(),C.insert=d().bind(null,"head"),C.domAPI=s(),C.insertStyleElement=p(),c()(D.Z,C),D.Z&&D.Z.locals&&D.Z.locals;var S=["Space"],x=["Shift","Tab","CapsLock","Backspace","Enter","ShiftLeft","ControlLeft","AltLeft","AltRight","ControlRight"];function k(t,e){x.includes(t)||(A.addValue(e),L.textContent=A.getValue()),"Tab"===t&&(A.addValue(" "),L.textContent=A.getValue()),"Enter"===t&&(A.addValue("\n"),L.textContent=A.getValue())}const w=function(e,r,n){var a=t("button",n,S.includes(r)?"bigButton":"button",e);return a.setAttribute("currentKey",e),a.setAttribute("currentCode",r),a.addEventListener("mousedown",(function(){a.classList.add("active")})),a.addEventListener("mouseup",(function(){k(a.getAttribute("currentCode"),a.getAttribute("currentKey")),a.classList.remove("active"),"Backspace"===a.getAttribute("currentCode")&&(A.removeLastChar(),L.textContent=A.getValue()),"CapsLock"===a.getAttribute("currentCode")&&A.toggleCapsLock()})),a};var T=r(34),E={};function Z(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,a,i,o,c=[],l=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){s=!0,a=t}finally{try{if(!l&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(s)throw a}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return B(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?B(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}E.styleTagTransform=K(),E.setAttributes=y(),E.insert=d().bind(null,"head"),E.domAPI=s(),E.insertStyleElement=p(),c()(T.Z,E),T.Z&&T.Z.locals&&T.Z.locals;var R={shift:!1,toggleDataLang:function(){this.data=this.data===e?a:e,localStorage.setItem("lang",JSON.stringify(this.data))},toggleDatShift:function(){this.data=this.data===e?this.shift?n:e:this.shift?i:a,localStorage.setItem("lang",JSON.stringify(this.data))},getData:function(){return this.data},setData:function(t){localStorage.setItem("lang",JSON.stringify(t)),this.data=t},toggleShift:function(){this.shift=!this.shift}},I=t("div",null,"board");localStorage.getItem("lang")?R.setData(JSON.parse(localStorage.getItem("lang"))):R.setData(e);var M=Object.entries(R.getData()).map((function(t){var e=Z(t,2),r=e[0],n=e[1];return w(n,r,I)})),O=function(){R.toggleShift(),R.toggleDatShift(),I.innerHTML="",M=Object.entries(R.getData()).map((function(t){var e=Z(t,2),r=e[0],n=e[1];return w(n,r,I)}))};document.addEventListener("keydown",(function(t){M.find((function(e){return e.getAttribute("currentcode")===t.code})).classList.add("active"),"ShiftLeft"===t.code&&O()})),document.addEventListener("keyup",(function(t){var e=M.find((function(e){return e.getAttribute("currentcode")===t.code}));e.classList.remove("active"),k(t.code,e.getAttribute("currentkey")),t.ctrlKey+t.shiftKey&&(R.toggleDataLang(),I.innerHTML="",M=Object.entries(R.getData()).map((function(t){var e=Z(t,2),r=e[0],n=e[1];return w(n,r,I)}))),"Backspace"===t.code&&(A.removeLastChar(),L.textContent=A.getValue()),"CapsLock"===t.code&&A.toggleCapsLock(),"ShiftLeft"===t.code&&O(),"Tab"===t.code&&(A.addValue(" "),L.textContent=A.getValue())}));const P=I;var V=r(827),j={};j.styleTagTransform=K(),j.setAttributes=y(),j.insert=d().bind(null,"head"),j.domAPI=s(),j.insertStyleElement=p(),c()(V.Z,j),V.Z&&V.Z.locals&&V.Z.locals;var N=t("div",null,"keyboard"),U=t("div",null,"lang","change language: left ctrl+shift");N.append(L,U,P);const H=N;var J=r(192),Q={};Q.styleTagTransform=K(),Q.setAttributes=y(),Q.insert=d().bind(null,"head"),Q.domAPI=s(),Q.insertStyleElement=p(),c()(J.Z,Q),J.Z&&J.Z.locals&&J.Z.locals,document.body.append(H)})()})();
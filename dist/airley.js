!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("Airley",[],n):"object"==typeof exports?exports.Airley=n():t.Airley=n()}(self,(()=>(()=>{"use strict";var t={959:function(t,n,e){var r,o=this&&this.__extends||(r=function(t,n){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},r(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});var a=e(393),s=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return o(n,t),n.prototype.schema=function(){var t,n,e;return{type:"div",attrs:{id:"banner",class:"grid w-full rounded-lg bg-[#F1FBF3] shadow-sm"},children:[{type:"div",attrs:{class:"grid bg-white p-2 py-6 sm:p-4"},children:[{type:"div",attrs:{class:"relative flex flex-col justify-between rounded-lg border"},children:[{type:"div",attrs:{class:"grid grid-cols-2 gap-8 rounded-t-lg bg-white p-2 sm:grid-cols-4 sm:p-5"},children:[{type:"div",attrs:{class:"hidden flex-col sm:flex"},children:[{type:"span",attrs:{class:"text-lg text-gray-500"},children:[{type:"text",value:"".concat(this.cohort.profile.name," starts on")}]},{type:"span",attrs:{class:"text-xl font-medium"},children:[{type:"text",value:new Date(this.cohort.profile.start_date).toLocaleDateString("en-US",{month:"short",day:"numeric"})}]}]},{type:"div",attrs:{class:"hidden flex-col sm:flex"},children:[{type:"span",attrs:{class:"text-lg text-gray-500"},children:[{type:"text",value:"Available Seats"}]},{type:"div",attrs:{class:"flex items-center space-x-2"},children:[{type:"span",attrs:{class:"text-xl font-medium"},children:[{type:"text",value:null!==(e=((null===(n=null===(t=this.cohort)||void 0===t?void 0:t.profile)||void 0===n?void 0:n.max_students)-this.cohort.enrollments).toString())&&void 0!==e?e:"0"}]},{type:"span",attrs:{class:"w-max rounded-md bg-red-600 px-2 py-0.5 text-sm text-white"},children:[{type:"text",value:"Filling Fast"}]}]}]},{type:"div",attrs:{class:"flex flex-col"},children:[{type:"span",attrs:{class:"text-base font-medium sm:text-xl"},children:[{type:"text",value:"Cost"}]},{type:"div",attrs:{class:"flex flex-col items-start space-x-1 sm:flex-row sm:items-end"},children:[{type:"span",attrs:{class:"text-xl font-medium sm:text-3xl"},children:[{type:"text",value:(0,a.formatAmount)(this.cohort.profile.price,this.cohort.profile.currency)}]},{type:"span",attrs:{class:"text-sm font-medium text-gray-500 line-through sm:text-lg"},children:[{type:"text",value:(0,a.formatAmount)(1.15*this.cohort.profile.price,this.cohort.profile.currency)}]}]}]},{type:"a",attrs:{target:"_blank",href:"https://demo.airley.io/onboarding/cohort/".concat(this.cohort.profile.url_slug)},children:[{type:"button",attrs:{class:"my-auto h-max w-full rounded-lg bg-[#2D6A4F] py-3 text-white"},children:[{type:"text",value:"Enroll Now"}]}]}]}]}]}]}},n}(i(e(559)).default);n.default=s},259:function(t,n,e){var r,o=this&&this.__extends||(r=function(t,n){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},r(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});var a=i(e(559)),s=e(393),l=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return o(n,t),n.prototype.schema=function(){var t,n,e,r,o,i;return{type:"div",attrs:{id:"large",class:"grid max-h-full grid-rows-1 w-full rounded-lg bg-[#F1FBF3] shadow-sm sm:grid-cols-2"},children:[{type:"div",attrs:{class:"grid grid-rows-1 max-h-full divide-y"},children:[{type:"img",attrs:{src:(null===(e=null===(n=null===(t=this.cohort)||void 0===t?void 0:t.profile)||void 0===n?void 0:n.cover_photo)||void 0===e?void 0:e.url)||"https://api.dicebear.com/8.x/pixel-art/svg",class:"max-h-full w-full object-cover",alt:""},children:[]},{type:"div",attrs:{class:"w-full bg-[#F1FBF3] px-3 py-4"},children:[{type:"span",attrs:{class:"text-xl font-medium"},children:[{type:"text",attrs:{},children:[],value:this.cohort.course.profile.name}]}]}]},{type:"div",attrs:{class:"grid max-h-full bg-white p-4 py-6"},children:[{type:"div",attrs:{class:"relative flex flex-col justify-between rounded-lg border"},children:[{type:"div",attrs:{class:"absolute right-4 top-0"},children:[{type:"svg",attrs:{width:"60",height:"97",viewBox:"0 0 60 97",fill:"none",xmlns:"http://www.w3.org/2000/svg"},children:[{type:"path",attrs:{d:"M0.152344 0.638672H46.5998V66.737L22.4828 52.1438L0.152344 66.737V0.638672Z",fill:"#2D6A4F"},children:[]}]},{type:"span",attrs:{class:"absolute left-2 top-1 font-medium text-white"},children:[{type:"text",value:"15% OFF"}]}]},{type:"div",attrs:{class:"flex flex-col justify-between rounded-t-lg bg-white p-5"},children:[{type:"div",attrs:{class:"flex flex-col"},children:[{type:"span",attrs:{class:"text-lg text-gray-500"},children:[{type:"text",value:"".concat(this.cohort.profile.name," starts on")}]},{type:"span",attrs:{class:"text-xl font-medium"},children:[{type:"text",value:new Date(this.cohort.profile.start_date).toLocaleDateString("en-US",{month:"short",day:"numeric"})}]}]},{type:"div",attrs:{class:"flex flex-col"},children:[{type:"span",attrs:{class:"text-lg text-gray-500"},children:[{type:"text",value:"Available Seats"}]},{type:"div",attrs:{class:"flex items-center space-x-2"},children:[{type:"span",attrs:{class:"text-xl font-medium"},children:[{type:"text",value:null!==(i=((null===(o=null===(r=this.cohort)||void 0===r?void 0:r.profile)||void 0===o?void 0:o.max_students)-this.cohort.enrollments).toString())&&void 0!==i?i:"0"}]},{type:"span",attrs:{class:"w-max rounded-md bg-red-600 px-2 py-0.5 text-sm text-white"},children:[{type:"text",value:"Filling Fast"}]}]}]},{type:"div",attrs:{class:"flex flex-col"},children:[{type:"span",attrs:{class:"text-xl font-medium"},children:[{type:"text",value:"Cost"}]},{type:"div",attrs:{class:"flex items-end space-x-1"},children:[{type:"span",attrs:{class:"text-3xl font-medium"},children:[{type:"text",value:(0,s.formatAmount)(this.cohort.profile.price,this.cohort.profile.currency)}]},{type:"span",attrs:{class:"text-lg font-medium text-gray-500 line-through"},children:[{type:"text",value:(0,s.formatAmount)(1.15*this.cohort.profile.price,this.cohort.profile.currency)}]}]},{type:"span",attrs:{class:"mt-2 text-gray-600"},children:[{type:"text",value:"Last date to enroll 15th Mar, 2024"}]}]}]},{type:"div",attrs:{class:"bottom-0 right-0 w-full rounded-b-lg bg-[#F1FBF3] p-4"},children:[{type:"a",attrs:{href:"https://demo.airley.io/onboarding/cohort/".concat(this.cohort.profile.url_slug),target:"_blank"},children:[{type:"button",attrs:{class:"my-auto h-max w-full rounded-lg bg-[#2D6A4F] py-3 text-white"},children:[{type:"text",value:"Enroll Now"}]}]}]}]}]}]}},n}(a.default);n.default=l},411:function(t,n,e){var r,o=this&&this.__extends||(r=function(t,n){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},r(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});var a=e(393),s=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return o(n,t),n.prototype.schema=function(){var t,n,e;return{type:"div",attrs:{id:"medium",class:"grid w-full rounded-lg bg-[#F1FBF3] shadow-sm"},children:[{type:"div",attrs:{class:"grid bg-white p-4 py-6"},children:[{type:"div",attrs:{class:"relative flex flex-col justify-between rounded-lg border"},children:[{type:"div",attrs:{class:"absolute right-4 top-0"},children:[{type:"svg",attrs:{width:"60",height:"97",viewBox:"0 0 60 97",fill:"none",xmlns:"http://www.w3.org/2000/svg"},children:[{type:"path",attrs:{d:"M0.152344 0.638672H46.5998V66.737L22.4828 52.1438L0.152344 66.737V0.638672Z",fill:"#2D6A4F"},children:[]}]},{type:"span",attrs:{class:"absolute left-2 top-1 font-medium text-white"},children:[{type:"text",value:"15% OFF"}]}]},{type:"div",attrs:{class:"flex flex-col justify-between rounded-t-lg bg-white p-5"},children:[{type:"div",attrs:{class:"flex flex-col"},children:[{type:"span",attrs:{class:"text-lg text-gray-500"},children:[{type:"text",value:"".concat(this.cohort.profile.name," starts on")}]},{type:"span",attrs:{class:"text-xl font-medium"},children:[{type:"text",value:new Date(this.cohort.profile.start_date).toLocaleDateString("en-US",{month:"short",day:"numeric"})}]}]},{type:"div",attrs:{class:"flex flex-col"},children:[{type:"span",attrs:{class:"text-lg text-gray-500"},children:[{type:"text",value:"Available Seats"}]},{type:"div",attrs:{class:"flex items-center space-x-2"},children:[{type:"span",attrs:{class:"text-xl font-medium"},children:[{type:"text",value:null!==(e=((null===(n=null===(t=this.cohort)||void 0===t?void 0:t.profile)||void 0===n?void 0:n.max_students)-this.cohort.enrollments).toString())&&void 0!==e?e:"0"}]},{type:"span",attrs:{class:"w-max rounded-md bg-red-600 px-2 py-0.5 text-sm text-white"},children:[{type:"text",value:"Filling Fast"}]}]}]},{type:"div",attrs:{class:"flex flex-col"},children:[{type:"span",attrs:{class:"text-xl font-medium"},children:[{type:"text",value:"Cost"}]},{type:"div",attrs:{class:"flex items-end space-x-1"},children:[{type:"span",attrs:{class:"text-3xl font-medium"},children:[{type:"text",value:(0,a.formatAmount)(this.cohort.profile.price,this.cohort.profile.currency)}]},{type:"span",attrs:{class:"text-lg font-medium text-gray-500 line-through"},children:[{type:"text",value:(0,a.formatAmount)(1.15*this.cohort.profile.price,this.cohort.profile.currency)}]}]},{type:"span",attrs:{class:"mt-2 text-gray-600"},children:[{type:"text",value:"Last date to enroll 15th Mar, 2024"}]}]}]},{type:"div",attrs:{class:"bottom-0 right-0 w-full rounded-b-lg bg-[#F1FBF3] p-4"},children:[{type:"a",attrs:{href:"https://demo.airley.io/onboarding/cohort/".concat(this.cohort.profile.url_slug),target:"_blank"},children:[{type:"button",attrs:{class:"my-auto h-max w-full rounded-lg bg-[#2D6A4F] py-3 text-white"},children:[{type:"text",value:"Enroll Now"}]}]}]}]}]}]}},n}(i(e(559)).default);n.default=s},559:(t,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0});var r=e(552),o=function(){function t(t,n){if(this.containerSelector=t,this.cohort=n,this.cohort=n,this.container=document.querySelector(t),!this.container)throw new Error("Container element not found for selector: ".concat(t))}return t.prototype.render=function(){var t=this.createDivElement(this.schema());this.container.appendChild(t)},t.prototype.createDivElement=function(t){return(0,r.createDivElement)(t)},t}();n.default=o},322:(t,n)=>{var e;Object.defineProperty(n,"__esModule",{value:!0}),n.CohortSize=void 0,function(t){t.BANNER="banner",t.MEDIUM="medium",t.LARGE="large"}(e||(n.CohortSize=e={}))},825:function(t,n,e){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},r.apply(this,arguments)},o=this&&this.__awaiter||function(t,n,e,r){return new(e||(e=Promise))((function(o,i){function a(t){try{l(r.next(t))}catch(t){i(t)}}function s(t){try{l(r.throw(t))}catch(t){i(t)}}function l(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,s)}l((r=r.apply(t,n||[])).next())}))},i=this&&this.__generator||function(t,n){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(l){return function(s){if(e)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(e=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=n.call(t,a)}catch(t){s=[6,t],r=0}finally{e=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});var s=e(322),l=a(e(259)),c=a(e(411)),d=a(e(959));e(28);var p=e(393),u=function(){function t(t){void 0===t&&(t=void 0),this.cohort=t,this.cohort=t}return t.prototype.get=function(){return this.cohort},t}(),h=function(){function t(t){var n;this.options=Object.assign({},{container:".cohort-card",size:s.CohortSize.LARGE},t),this.baseUrl=null!==(n=(0,p.isDevMode)())&&void 0!==n?n:"https://pre-api.airley.io/api",this.cohort=new u}return t.prototype.fetch=function(){return o(this,void 0,void 0,(function(){var t,n,e,o,a,s;return i(this,(function(i){switch(i.label){case 0:return t=this,[4,Promise.all([fetch("".concat(this.baseUrl,"/enrollments/count/").concat(this.options.cohort)),fetch("".concat(this.baseUrl,"/cohort/is-slug-unique/").concat(this.options.cohort))])];case 1:if(n=i.sent(),e=n[0],o=n[1],200!==e.status||200!==o.status)throw new Error("Failed to fetch cohort data");return[4,o.json()];case 2:return a=i.sent().results,[4,e.json()];case 3:return s=i.sent().count,t.cohort=new u(r(r({},a&&a[0]),{enrollments:s})),[2]}}))}))},t.prototype.render=function(){var t=this.cohort.get();if(t){var n;switch(this.options.size){case s.CohortSize.LARGE:n=new l.default(this.options.container,t);break;case s.CohortSize.MEDIUM:n=new c.default(this.options.container,t);break;case s.CohortSize.BANNER:n=new d.default(this.options.container,t);break;default:throw new Error("Invalid widget type")}n.render()}},t}();n.default=h},552:(t,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.createDivElement=void 0,n.createDivElement=function t(n){for(var e=n.type,r=n.attrs,o=n.children,i=n.value,a=document.createElement(e),s=0,l=Object.entries(r||{});s<l.length;s++){var c=l[s],d=c[0],p=c[1];a.setAttribute(d,p)}return i&&(a.textContent=i),o&&o.forEach((function(n){var e=t(n);a.appendChild(e)})),a}},393:(t,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.isDevMode=n.isEmpty=n.formatAmount=n.currencyFormat=n.getCurrencySymbol=void 0,n.getCurrencySymbol=function(t){switch(t){case"USD":return"$";case"EUR":return"€";case"GBP":return"£";case"JPY":case"CNY":return"¥";case"INR":return"₹";default:return""}},n.currencyFormat=function(t){switch(t){case"USD":return"USD";case"EUR":return"EUR";case"GBP":return"GBP";case"INR":return"INR";default:return t}},n.formatAmount=function(t,n){return new Intl.NumberFormat("en-US",{style:"currency",currency:n,maximumFractionDigits:2,maximumSignificantDigits:3}).format(t)};n.isEmpty=function(t){return null==t||""===t},n.isDevMode=function(){var t=localStorage.getItem("localAPI");return(0,n.isEmpty)(t)?null:t}},883:(t,n,e)=>{e.d(n,{Z:()=>s});var r=e(81),o=e.n(r),i=e(645),a=e.n(i)()(o());a.push([t.id,"/*\n! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com\n*/\n\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  /* 1 */\n  border-width: 0;\n  /* 2 */\n  border-style: solid;\n  /* 2 */\n  border-color: #e5e7eb;\n  /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -moz-tab-size: 4;\n  /* 3 */\n  tab-size: 4;\n  /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji',\n    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n  /* 4 */\n  font-feature-settings: normal;\n  /* 5 */\n  font-variation-settings: normal;\n  /* 6 */\n  -webkit-tap-highlight-color: transparent;\n  /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0;\n  /* 1 */\n  line-height: inherit;\n  /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  border-top-width: 1px;\n  /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n    'Liberation Mono', 'Courier New', monospace;\n  /* 1 */\n  font-feature-settings: normal;\n  /* 2 */\n  font-variation-settings: normal;\n  /* 3 */\n  font-size: 1em;\n  /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0;\n  /* 1 */\n  border-color: inherit;\n  /* 2 */\n  border-collapse: collapse;\n  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-feature-settings: inherit;\n  /* 1 */\n  font-variation-settings: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  font-weight: inherit;\n  /* 1 */\n  line-height: inherit;\n  /* 1 */\n  letter-spacing: inherit;\n  /* 1 */\n  color: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  padding: 0;\n  /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button;\n  /* 1 */\n  background-color: transparent;\n  /* 2 */\n  background-image: none;\n  /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\n\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role='button'] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  /* 1 */\n  vertical-align: middle;\n  /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n\n[hidden] {\n  display: none;\n}\n\n*,\n::before,\n::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style: \n;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style: \n;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.relative {\n  position: relative;\n}\n\n.bottom-0 {\n  bottom: 0px;\n}\n\n.left-2 {\n  left: 0.5rem;\n}\n\n.right-0 {\n  right: 0px;\n}\n\n.right-4 {\n  right: 1rem;\n}\n\n.top-0 {\n  top: 0px;\n}\n\n.top-1 {\n  top: 0.25rem;\n}\n\n.my-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.mt-2 {\n  margin-top: 0.5rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.grid {\n  display: grid;\n}\n\n.hidden {\n  display: none;\n}\n\n.h-full {\n  height: 100%;\n}\n\n.h-max {\n  height: max-content;\n}\n\n.w-full {\n  width: 100%;\n}\n\n.w-max {\n  width: max-content;\n}\n\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.items-start {\n  align-items: flex-start;\n}\n\n.items-end {\n  align-items: flex-end;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.gap-8 {\n  gap: 2rem;\n}\n\n.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n\n.rounded-md {\n  border-radius: 0.375rem;\n}\n\n.rounded-b-lg {\n  border-bottom-right-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n\n.rounded-t-lg {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n\n.border {\n  border-width: 1px;\n}\n\n.bg-\\[\\#2D6A4F\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(45 106 79 / var(--tw-bg-opacity));\n}\n\n.bg-\\[\\#F1FBF3\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(241 251 243 / var(--tw-bg-opacity));\n}\n\n.bg-red-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(220 38 38 / var(--tw-bg-opacity));\n}\n\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n.object-cover {\n  object-fit: cover;\n}\n\n.p-2 {\n  padding: 0.5rem;\n}\n\n.p-4 {\n  padding: 1rem;\n}\n\n.p-5 {\n  padding: 1.25rem;\n}\n\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n\n.py-0 {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.py-0\\.5 {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n}\n\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n\n.font-medium {\n  font-weight: 500;\n}\n\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\n\n.text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\n\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.line-through {\n  text-decoration-line: line-through;\n}\n\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.max-h-full {\n  max-height: 100% !important;\n}\n\n@media (min-width: 640px) {\n  .sm\\:flex {\n    display: flex;\n  }\n\n  .sm\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .sm\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n\n  .sm\\:flex-row {\n    flex-direction: row;\n  }\n\n  .sm\\:items-end {\n    align-items: flex-end;\n  }\n\n  .sm\\:p-4 {\n    padding: 1rem;\n  }\n\n  .sm\\:p-5 {\n    padding: 1.25rem;\n  }\n\n  .sm\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n\n  .sm\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n\n  .sm\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n}\n",""]);const s=a},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:t=>{t.exports=function(t){return t[1]}},28:(t,n,e)=>{e.r(n),e.d(n,{default:()=>y});var r=e(379),o=e.n(r),i=e(795),a=e.n(i),s=e(569),l=e.n(s),c=e(565),d=e.n(c),p=e(216),u=e.n(p),h=e(589),f=e.n(h),m=e(883),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=l().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=u();o()(m.Z,g);const y=m.Z&&m.Z.locals?m.Z.locals:void 0},379:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var i={},a=[],s=0;s<t.length;s++){var l=t[s],c=r.base?l[0]+r.base:l[0],d=i[c]||0,p="".concat(c," ").concat(d);i[c]=d+1;var u=e(p),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var f=o(h,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(t,n){var e=n.domAPI(n);e.update(t);return function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var s=e(i[a]);n[s].references--}for(var l=r(t,o),c=0;c<i.length;c++){var d=e(i[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=l}}},569:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.exports}return e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.nc=void 0,e(825)})()));

(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[205],{3398:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var i=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=i},6393:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(i.default.useContext(o.AmpStateContext))};var n,i=(n=r(7294))&&n.__esModule?n:{default:n},o=r(3398);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,i=void 0!==n&&n,o=e.hasQuery,a=void 0!==o&&o;return r||i&&a}},2775:function(e,t,r){"use strict";var n=r(1682);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=l,t.default=void 0;var o,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(7294)),s=(o=r(3244))&&o.__esModule?o:{default:o},u=r(3398),f=r(1165),c=r(6393);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function h(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function g(e,t){return e.reduce((function(e,t){var r=a.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(h,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(i){var o=!0,a=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){a=!0;var s=i.key.slice(i.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var u=0,f=p.length;u<f;u++){var c=p[u];if(i.props.hasOwnProperty(c))if("charSet"===c)r.has(c)?o=!1:r.add(c);else{var d=i.props[c],l=n[c]||new Set;"name"===c&&a||!l.has(d)?(l.add(d),n[c]=l):o=!1}}}return o}}()).reverse().map((function(e,r){var o=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,a.default.cloneElement(e,s)}return a.default.cloneElement(e,{key:o})}))}var v=function(e){var t=e.children,r=(0,a.useContext)(u.AmpStateContext),n=(0,a.useContext)(f.HeadManagerContext);return a.default.createElement(s.default,{reduceComponentsToState:g,headManager:n,inAmpMode:(0,c.isInAmpMode)(r)},t)};t.default=v},3244:function(e,t,r){"use strict";var n=r(3115),i=r(2553),o=r(2012),a=(r(450),r(9807)),s=r(7690),u=r(9828);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var i=u(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return s(this,r)}}t.__esModule=!0,t.default=void 0;var c=r(7294),d=function(e){a(r,e);var t=f(r);function r(e){var o;return i(this,r),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(c.Component);t.default=d},9008:function(e,t,r){e.exports=r(2775)},8164:function(e,t,r){var n=r(4360);e.exports=function(e){if(Array.isArray(e))return n(e)}},1682:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},1385:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return i}})},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,r){var n=r(8164),i=r(7381),o=r(3585),a=r(5725);e.exports=function(e){return n(e)||i(e)||o(e)||a()}},7460:function(e,t){var r,n,i;n=[],void 0===(i="function"===typeof(r=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},r=!t.document&&!!t.postMessage,n=r&&/blob:/i.test((t.location||{}).protocol),i={},o=0,a={parse:function(r,n){var s=(n=n||{}).dynamicTyping||!1;if(w(s)&&(n.dynamicTypingFunction=s,s={}),n.dynamicTyping=s,n.transform=!!w(n.transform)&&n.transform,n.worker&&a.WORKERS_SUPPORTED){var u=function(){if(!a.WORKERS_SUPPORTED)return!1;var r,n,s=(r=t.URL||t.webkitURL||null,n=e.toString(),a.BLOB_URL||(a.BLOB_URL=r.createObjectURL(new Blob(["(",n,")();"],{type:"text/javascript"})))),u=new t.Worker(s);return u.onmessage=v,u.id=o++,i[u.id]=u}();return u.userStep=n.step,u.userChunk=n.chunk,u.userComplete=n.complete,u.userError=n.error,n.step=w(n.step),n.chunk=w(n.chunk),n.complete=w(n.complete),n.error=w(n.error),delete n.worker,void u.postMessage({input:r,config:n,workerId:u.id})}var h=null;return a.NODE_STREAM_INPUT,"string"==typeof r?h=n.download?new f(n):new d(n):!0===r.readable&&w(r.read)&&w(r.on)?h=new l(n):(t.File&&r instanceof File||r instanceof Object)&&(h=new c(n)),h.stream(r)},unparse:function(e,t){var r=!1,n=!0,i=",",o="\r\n",s='"',u=s+s,f=!1,c=null,d=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||a.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(i=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(f=t.skipEmptyLines),"string"==typeof t.newline&&(o=t.newline),"string"==typeof t.quoteChar&&(s=t.quoteChar),"boolean"==typeof t.header&&(n=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");c=t.columns}void 0!==t.escapeChar&&(u=t.escapeChar+s),"boolean"==typeof t.escapeFormulae&&(d=t.escapeFormulae)}}();var l=new RegExp(p(s),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return h(null,e,f);if("object"==typeof e[0])return h(c||Object.keys(e[0]),e,f)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),h(e.fields||[],e.data||[],f);throw new Error("Unable to serialize unrecognized input");function h(e,t,r){var a="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var s=Array.isArray(e)&&0<e.length,u=!Array.isArray(t[0]);if(s&&n){for(var f=0;f<e.length;f++)0<f&&(a+=i),a+=g(e[f],f);0<t.length&&(a+=o)}for(var c=0;c<t.length;c++){var d=s?e.length:t[c].length,l=!1,h=s?0===Object.keys(t[c]).length:0===t[c].length;if(r&&!s&&(l="greedy"===r?""===t[c].join("").trim():1===t[c].length&&0===t[c][0].length),"greedy"===r&&s){for(var p=[],v=0;v<d;v++){var y=u?e[v]:v;p.push(t[c][y])}l=""===p.join("").trim()}if(!l){for(var m=0;m<d;m++){0<m&&!h&&(a+=i);var _=s&&u?e[m]:m;a+=g(t[c][_],m)}c<t.length-1&&(!r||0<d&&!h)&&(a+=o)}}return a}function g(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);!0===d&&"string"==typeof e&&null!==e.match(/^[=+\-@].*$/)&&(e="'"+e);var n=e.toString().replace(l,u);return"boolean"==typeof r&&r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(n,a.BAD_DELIMITERS)||-1<n.indexOf(i)||" "===n.charAt(0)||" "===n.charAt(n.length-1)?s+n+s:n}}};if(a.RECORD_SEP=String.fromCharCode(30),a.UNIT_SEP=String.fromCharCode(31),a.BYTE_ORDER_MARK="\ufeff",a.BAD_DELIMITERS=["\r","\n",'"',a.BYTE_ORDER_MARK],a.WORKERS_SUPPORTED=!r&&!!t.Worker,a.NODE_STREAM_INPUT=1,a.LocalChunkSize=10485760,a.RemoteChunkSize=5242880,a.DefaultDelimiter=",",a.Parser=g,a.ParserHandle=h,a.NetworkStreamer=f,a.FileStreamer=c,a.StringStreamer=d,a.ReadableStreamStreamer=l,t.jQuery){var s=t.jQuery;s.fn.parse=function(e){var r=e.config||{},n=[];return this.each((function(e){if("INPUT"!==s(this).prop("tagName").toUpperCase()||"file"!==s(this).attr("type").toLowerCase()||!t.FileReader||!this.files||0===this.files.length)return!0;for(var i=0;i<this.files.length;i++)n.push({file:this.files[i],inputElem:this,instanceConfig:s.extend({},r)})})),i(),this;function i(){if(0!==n.length){var t,r,i,u,f=n[0];if(w(e.before)){var c=e.before(f.file,f.inputElem);if("object"==typeof c){if("abort"===c.action)return t="AbortError",r=f.file,i=f.inputElem,u=c.reason,void(w(e.error)&&e.error({name:t},r,i,u));if("skip"===c.action)return void o();"object"==typeof c.config&&(f.instanceConfig=s.extend(f.instanceConfig,c.config))}else if("skip"===c)return void o()}var d=f.instanceConfig.complete;f.instanceConfig.complete=function(e){w(d)&&d(e,f.file,f.inputElem),o()},a.parse(f.file,f.instanceConfig)}else w(e.complete)&&e.complete()}function o(){n.splice(0,1),i()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=_(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new h(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,r){if(this.isFirstChunk&&w(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);void 0!==i&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var o=this._partialLine+e;this._partialLine="";var s=this._handle.parse(o,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var u=s.meta.cursor;this._finished||(this._partialLine=o.substring(u-this._baseIndex),this._baseIndex=u),s&&s.data&&(this._rowCount+=s.data.length);var f=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(n)t.postMessage({results:s,workerId:a.WORKER_ID,finished:f});else if(w(this._config.chunk)&&!r){if(this._config.chunk(s,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);s=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(s.data),this._completeResults.errors=this._completeResults.errors.concat(s.errors),this._completeResults.meta=s.meta),this._completed||!f||!w(this._config.complete)||s&&s.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),f||s&&s.meta.paused||this._nextChunk(),s}this._halted=!0},this._sendError=function(e){w(this._config.error)?this._config.error(e):n&&this._config.error&&t.postMessage({workerId:a.WORKER_ID,error:e,finished:!1})}}function f(e){var t;(e=e||{}).chunkSize||(e.chunkSize=a.RemoteChunkSize),u.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var n in e)t.setRequestHeader(n,e[n])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){var r=t.statusText||e;this._sendError(new Error(r))}}function c(e){var t,r;(e=e||{}).chunkSize||(e.chunkSize=a.LocalChunkSize),u.call(this,e);var n="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,n?((t=new FileReader).onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var i=Math.min(this._start+this._config.chunkSize,this._input.size);e=r.call(e,this._start,i)}var o=t.readAsText(e,this._config.encoding);n||this._chunkLoaded({target:{result:o}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function d(e){var t;u.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,r=this._config.chunkSize;return r?(e=t.substring(0,r),t=t.substring(r)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function l(e){u.call(this,e=e||{});var t=[],r=!0,n=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){n&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=b((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=b((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=b((function(){this._streamCleanUp(),n=!0,this._streamData("")}),this),this._streamCleanUp=b((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function h(e){var t,r,n,i=Math.pow(2,53),o=-i,s=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,u=/^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/,f=this,c=0,d=0,l=!1,h=!1,v=[],y={data:[],errors:[],meta:{}};if(w(e.step)){var m=e.step;e.step=function(t){if(y=t,O())k();else{if(k(),0===y.data.length)return;c+=t.data.length,e.preview&&c>e.preview?r.abort():(y.data=y.data[0],m(y,f))}}}function b(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function k(){if(y&&n&&(C("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+a.DefaultDelimiter+"'"),n=!1),e.skipEmptyLines)for(var t=0;t<y.data.length;t++)b(y.data[t])&&y.data.splice(t--,1);return O()&&function(){if(y)if(Array.isArray(y.data[0])){for(var t=0;O()&&t<y.data.length;t++)y.data[t].forEach(r);y.data.splice(0,1)}else y.data.forEach(r);function r(t,r){w(e.transformHeader)&&(t=e.transformHeader(t,r)),v.push(t)}}(),function(){if(!y||!e.header&&!e.dynamicTyping&&!e.transform)return y;function t(t,r){var n,i=e.header?{}:[];for(n=0;n<t.length;n++){var o=n,a=t[n];e.header&&(o=n>=v.length?"__parsed_extra":v[n]),e.transform&&(a=e.transform(a,o)),a=E(o,a),"__parsed_extra"===o?(i[o]=i[o]||[],i[o].push(a)):i[o]=a}return e.header&&(n>v.length?C("FieldMismatch","TooManyFields","Too many fields: expected "+v.length+" fields but parsed "+n,d+r):n<v.length&&C("FieldMismatch","TooFewFields","Too few fields: expected "+v.length+" fields but parsed "+n,d+r)),i}var r=1;return!y.data.length||Array.isArray(y.data[0])?(y.data=y.data.map(t),r=y.data.length):y.data=t(y.data,0),e.header&&y.meta&&(y.meta.fields=v),d+=r,y}()}function O(){return e.header&&0===v.length}function E(t,r){return n=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[n]&&(e.dynamicTyping[n]=e.dynamicTypingFunction(n)),!0===(e.dynamicTyping[n]||e.dynamicTyping)?"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&(function(e){if(s.test(e)){var t=parseFloat(e);if(o<t&&t<i)return!0}return!1}(r)?parseFloat(r):u.test(r)?new Date(r):""===r?null:r):r;var n}function C(e,t,r,n){var i={type:e,code:t,message:r};void 0!==n&&(i.row=n),y.errors.push(i)}this.parse=function(i,o,s){var u=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var r=new RegExp(p(t)+"([^]*?)"+p(t),"gm"),n=(e=e.replace(r,"")).split("\r"),i=e.split("\n"),o=1<i.length&&i[0].length<n[0].length;if(1===n.length||o)return"\n";for(var a=0,s=0;s<n.length;s++)"\n"===n[s][0]&&a++;return a>=n.length/2?"\r\n":"\r"}(i,u)),n=!1,e.delimiter)w(e.delimiter)&&(e.delimiter=e.delimiter(i),y.meta.delimiter=e.delimiter);else{var f=function(t,r,n,i,o){var s,u,f,c;o=o||[",","\t","|",";",a.RECORD_SEP,a.UNIT_SEP];for(var d=0;d<o.length;d++){var l=o[d],h=0,p=0,v=0;f=void 0;for(var y=new g({comments:i,delimiter:l,newline:r,preview:10}).parse(t),m=0;m<y.data.length;m++)if(n&&b(y.data[m]))v++;else{var _=y.data[m].length;p+=_,void 0!==f?0<_&&(h+=Math.abs(_-f),f=_):f=_}0<y.data.length&&(p/=y.data.length-v),(void 0===u||h<=u)&&(void 0===c||c<p)&&1.99<p&&(u=h,s=l,c=p)}return{successful:!!(e.delimiter=s),bestDelimiter:s}}(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);f.successful?e.delimiter=f.bestDelimiter:(n=!0,e.delimiter=a.DefaultDelimiter),y.meta.delimiter=e.delimiter}var c=_(e);return e.preview&&e.header&&c.preview++,t=i,r=new g(c),y=r.parse(t,o,s),k(),l?{meta:{paused:!0}}:y||{meta:{paused:!1}}},this.paused=function(){return l},this.pause=function(){l=!0,r.abort(),t=w(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){f.streamer._halted?(l=!1,f.streamer.parseChunk(t,!0)):setTimeout(f.resume,3)},this.aborted=function(){return h},this.abort=function(){h=!0,r.abort(),y.meta.aborted=!0,w(e.complete)&&e.complete(y),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(e){var t,r=(e=e||{}).delimiter,n=e.newline,i=e.comments,o=e.step,s=e.preview,u=e.fastMode,f=t=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(f=e.escapeChar),("string"!=typeof r||-1<a.BAD_DELIMITERS.indexOf(r))&&(r=","),i===r)throw new Error("Comment character same as delimiter");!0===i?i="#":("string"!=typeof i||-1<a.BAD_DELIMITERS.indexOf(i))&&(i=!1),"\n"!==n&&"\r"!==n&&"\r\n"!==n&&(n="\n");var c=0,d=!1;this.parse=function(e,a,l){if("string"!=typeof e)throw new Error("Input must be a string");var h=e.length,g=r.length,v=n.length,y=i.length,m=w(o),_=[],b=[],k=[],O=c=0;if(!e)return L();if(u||!1!==u&&-1===e.indexOf(t)){for(var E=e.split(n),C=0;C<E.length;C++){if(k=E[C],c+=k.length,C!==E.length-1)c+=n.length;else if(l)return L();if(!i||k.substring(0,y)!==i){if(m){if(_=[],D(k.split(r)),F(),d)return L()}else D(k.split(r));if(s&&s<=C)return _=_.slice(0,s),L(!0)}}return L()}for(var S=e.indexOf(r,c),R=e.indexOf(n,c),x=new RegExp(p(f)+p(t),"g"),A=e.indexOf(t,c);;)if(e[c]!==t)if(i&&0===k.length&&e.substring(c,c+y)===i){if(-1===R)return L();c=R+v,R=e.indexOf(n,c),S=e.indexOf(r,c)}else if(-1!==S&&(S<R||-1===R))k.push(e.substring(c,S)),c=S+g,S=e.indexOf(r,c);else{if(-1===R)break;if(k.push(e.substring(c,R)),P(R+v),m&&(F(),d))return L();if(s&&_.length>=s)return L(!0)}else for(A=c,c++;;){if(-1===(A=e.indexOf(t,A+1)))return l||b.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:_.length,index:c}),j();if(A===h-1)return j(e.substring(c,A).replace(x,t));if(t!==f||e[A+1]!==f){if(t===f||0===A||e[A-1]!==f){-1!==S&&S<A+1&&(S=e.indexOf(r,A+1)),-1!==R&&R<A+1&&(R=e.indexOf(n,A+1));var I=M(-1===R?S:Math.min(S,R));if(e[A+1+I]===r){k.push(e.substring(c,A).replace(x,t)),e[c=A+1+I+g]!==t&&(A=e.indexOf(t,c)),S=e.indexOf(r,c),R=e.indexOf(n,c);break}var T=M(R);if(e.substring(A+1+T,A+1+T+v)===n){if(k.push(e.substring(c,A).replace(x,t)),P(A+1+T+v),S=e.indexOf(r,c),A=e.indexOf(t,c),m&&(F(),d))return L();if(s&&_.length>=s)return L(!0);break}b.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:_.length,index:c}),A++}}else A++}return j();function D(e){_.push(e),O=c}function M(t){var r=0;if(-1!==t){var n=e.substring(A+1,t);n&&""===n.trim()&&(r=n.length)}return r}function j(t){return l||(void 0===t&&(t=e.substring(c)),k.push(t),c=h,D(k),m&&F()),L()}function P(t){c=t,D(k),k=[],R=e.indexOf(n,c)}function L(e){return{data:_,errors:b,meta:{delimiter:r,linebreak:n,aborted:d,truncated:!!e,cursor:O+(a||0)}}}function F(){o(L()),_=[],b=[]}},this.abort=function(){d=!0},this.getCharIndex=function(){return c}}function v(e){var t=e.data,r=i[t.workerId],n=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var o={abort:function(){n=!0,y(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:m,resume:m};if(w(r.userStep)){for(var a=0;a<t.results.data.length&&(r.userStep({data:t.results.data[a],errors:t.results.errors,meta:t.results.meta},o),!n);a++);delete t.results}else w(r.userChunk)&&(r.userChunk(t.results,o,t.file),delete t.results)}t.finished&&!n&&y(t.workerId,t.results)}function y(e,t){var r=i[e];w(r.userComplete)&&r.userComplete(t),r.terminate(),delete i[e]}function m(){throw new Error("Not implemented.")}function _(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=_(e[r]);return t}function b(e,t){return function(){e.apply(t,arguments)}}function w(e){return"function"==typeof e}return n&&(t.onmessage=function(e){var r=e.data;if(void 0===a.WORKER_ID&&r&&(a.WORKER_ID=r.workerId),"string"==typeof r.input)t.postMessage({workerId:a.WORKER_ID,results:a.parse(r.input,r.config),finished:!0});else if(t.File&&r.input instanceof File||r.input instanceof Object){var n=a.parse(r.input,r.config);n&&t.postMessage({workerId:a.WORKER_ID,results:n,finished:!0})}}),(f.prototype=Object.create(u.prototype)).constructor=f,(c.prototype=Object.create(u.prototype)).constructor=c,(d.prototype=Object.create(d.prototype)).constructor=d,(l.prototype=Object.create(u.prototype)).constructor=l,a})?r.apply(t,n):r)||(e.exports=i)},5723:function(e,t,r){"use strict";r.d(t,{ZP:function(){return M}});var n=r(7294),i=Object.prototype.hasOwnProperty;var o=new WeakMap,a=0;var s=function(){function e(e){void 0===e&&(e={}),this.cache=new Map(Object.entries(e)),this.subs=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.cache.get(t)},e.prototype.set=function(e,t){var r=this.serializeKey(e)[0];this.cache.set(r,t),this.notify()},e.prototype.keys=function(){return Array.from(this.cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.cache.has(t)},e.prototype.clear=function(){this.cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(r){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",r=0;r<e.length;++r)if(null!==e[r]){var n=void 0;"object"!==typeof e[r]&&"function"!==typeof e[r]?n="string"===typeof e[r]?'"'+e[r]+'"':String(e[r]):o.has(e[r])?n=o.get(e[r]):(n=a,o.set(e[r],a++)),t+="@"+n}else t+="@null";return t}(e)):e=String(e||""),[e,t,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var r=!0;return this.subs.push(e),function(){if(r){r=!1;var n=t.subs.indexOf(e);n>-1&&(t.subs[n]=t.subs[t.subs.length-1],t.subs.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.subs;e<t.length;e++){(0,t[e])()}},e}(),u=!0,f={isOnline:function(){return u},isDocumentVisible:function(){return"undefined"===typeof document||void 0===document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))},registerOnFocus:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&"undefined"!==typeof document&&void 0!==document.addEventListener&&(document.addEventListener("visibilitychange",(function(){return e()}),!1),window.addEventListener("focus",(function(){return e()}),!1))},registerOnReconnect:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&(window.addEventListener("online",(function(){u=!0,e()}),!1),window.addEventListener("offline",(function(){return u=!1}),!1))}},c=function(){return(c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},d=new s;var l="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),h=c({onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,r,n,i){if(r.isDocumentVisible()&&!("number"===typeof r.errorRetryCount&&i.retryCount>r.errorRetryCount)){var o=Math.min(i.retryCount,8),a=~~((Math.random()+.5)*(1<<o))*r.errorRetryInterval;setTimeout(n,a,i)}},errorRetryInterval:1e3*(l?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(l?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(t,r){var n,o;if(t===r)return!0;if(t&&r&&(n=t.constructor)===r.constructor){if(n===Date)return t.getTime()===r.getTime();if(n===RegExp)return t.toString()===r.toString();if(n===Array){if((o=t.length)===r.length)for(;o--&&e(t[o],r[o]););return-1===o}if(!n||"object"===typeof t){for(n in o=0,t){if(i.call(t,n)&&++o&&!i.call(r,n))return!1;if(!(n in r)||!e(t[n],r[n]))return!1}return Object.keys(r).length===o}}return t!==t&&r!==r},isPaused:function(){return!1}},f),p="undefined"===typeof window||!!("undefined"!==typeof Deno&&Deno&&Deno.version&&Deno.version.deno),g=p?null:window.requestAnimationFrame?function(e){return window.requestAnimationFrame(e)}:function(e){return setTimeout(e,1)},v=p?n.useEffect:n.useLayoutEffect,y=(0,n.createContext)({});y.displayName="SWRConfigContext";var m=y,_=function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{u(n.next(e))}catch(t){o(t)}}function s(e){try{u(n.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))},b=function(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(s){o=[6,s],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},w={},k={},O={},E={},C={},S={},R={},x=function(){var e=0;return function(){return++e}}();if(!p){var A=function(e){if(h.isDocumentVisible()&&h.isOnline())for(var t in e)e[t][0]&&e[t][0]()};"function"===typeof h.registerOnFocus&&h.registerOnFocus((function(){return A(O)})),"function"===typeof h.registerOnReconnect&&h.registerOnReconnect((function(){return A(E)}))}var I=function(e,t){void 0===t&&(t=!0);var r=d.serializeKey(e),n=r[0],i=r[2],o=r[3];if(!n)return Promise.resolve();var a=C[n];if(n&&a){for(var s=d.get(n),u=d.get(i),f=d.get(o),c=[],l=0;l<a.length;++l)c.push(a[l](t,s,u,f,l>0));return Promise.all(c).then((function(){return d.get(n)}))}return Promise.resolve(d.get(n))},T=function(e,t,r,n){var i=C[e];if(e&&i)for(var o=0;o<i.length;++o)i[o](!1,t,r,n)},D=function(e,t,r){return void 0===r&&(r=!0),_(void 0,void 0,void 0,(function(){var n,i,o,a,s,u,f,c,l,h,p,g,v;return b(this,(function(y){switch(y.label){case 0:if(n=d.serializeKey(e),i=n[0],o=n[2],!i)return[2];if("undefined"===typeof t)return[2,I(e,r)];if(S[i]=x()-1,R[i]=0,a=S[i],s=k[i],c=!1,t&&"function"===typeof t)try{t=t(d.get(i))}catch(m){t=void 0,f=m}if(!t||"function"!==typeof t.then)return[3,5];c=!0,y.label=1;case 1:return y.trys.push([1,3,,4]),[4,t];case 2:return u=y.sent(),[3,4];case 3:return l=y.sent(),f=l,[3,4];case 4:return[3,6];case 5:u=t,y.label=6;case 6:if((h=function(){if(a!==S[i]||s!==k[i]){if(f)throw f;return!0}})())return[2,u];if("undefined"!==typeof u&&d.set(i,u),d.set(o,f),R[i]=x()-1,!c&&h())return[2,u];if(p=C[i]){for(g=[],v=0;v<p.length;++v)g.push(p[v](!!r,u,f,void 0,v>0));return[2,Promise.all(g).then((function(){if(f)throw f;return d.get(i)}))]}if(f)throw f;return[2,u]}}))}))};Object.defineProperty(m.Provider,"default",{value:h});m.Provider;var M=function(){for(var e=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=t[0],o=Object.assign({},h,(0,n.useContext)(m),t.length>2?t[2]:2===t.length&&"object"===typeof t[1]?t[1]:{}),a=t.length>2||2===t.length&&"function"===typeof t[1]||null===t[1]?t[1]:o.fetcher,s=d.serializeKey(i),u=s[0],f=s[1],c=s[2],l=s[3],y=(0,n.useRef)(o);v((function(){y.current=o}));var A=function(){return o.revalidateOnMount||!o.initialData&&void 0===o.revalidateOnMount},I=function(){var e=d.get(u);return"undefined"===typeof e?o.initialData:e},M=function(){return!!d.get(l)||u&&A()},j=I(),P=d.get(c),L=M(),F=(0,n.useRef)({data:!1,error:!1,isValidating:!1}),z=(0,n.useRef)({data:j,error:P,isValidating:L});(0,n.useDebugValue)(z.current.data);var U,W,q=(0,n.useState)({})[1],H=(0,n.useCallback)((function(e){var t=!1;for(var r in e)z.current[r]!==e[r]&&(z.current[r]=e[r],F.current[r]&&(t=!0));if(t){if(K.current||!V.current)return;q({})}}),[]),K=(0,n.useRef)(!1),N=(0,n.useRef)(u),V=(0,n.useRef)(!1),B=(0,n.useCallback)((function(e){for(var t,r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];K.current||V.current&&u===N.current&&(t=y.current)[e].apply(t,r)}),[u]),Q=(0,n.useCallback)((function(e,t){return D(N.current,e,t)}),[]),$=function(e,t){return e[u]?e[u].push(t):e[u]=[t],function(){var r=e[u],n=r.indexOf(t);n>=0&&(r[n]=r[r.length-1],r.pop())}},J=(0,n.useCallback)((function(t){return void 0===t&&(t={}),_(e,void 0,void 0,(function(){var e,r,n,i,s,h,p,g,v,m;return b(this,(function(_){switch(_.label){case 0:if(!u||!a)return[2,!1];if(K.current)return[2,!1];if(y.current.isPaused())return[2,!1];e=t.retryCount,r=void 0===e?0:e,n=t.dedupe,i=void 0!==n&&n,s=!0,h="undefined"!==typeof w[u]&&i,_.label=1;case 1:return _.trys.push([1,6,,7]),H({isValidating:!0}),d.set(l,!0),h||T(u,z.current.data,z.current.error,!0),p=void 0,g=void 0,h?(g=k[u],[4,w[u]]):[3,3];case 2:return p=_.sent(),[3,5];case 3:return o.loadingTimeout&&!d.get(u)&&setTimeout((function(){s&&B("onLoadingSlow",u,o)}),o.loadingTimeout),w[u]=null!==f?a.apply(void 0,f):a(u),k[u]=g=x(),[4,w[u]];case 4:p=_.sent(),setTimeout((function(){delete w[u],delete k[u]}),o.dedupingInterval),B("onSuccess",p,u,o),_.label=5;case 5:return k[u]>g?[2,!1]:S[u]&&(g<=S[u]||g<=R[u]||0===R[u])?(H({isValidating:!1}),[2,!1]):(d.set(c,void 0),d.set(l,!1),v={isValidating:!1},"undefined"!==typeof z.current.error&&(v.error=void 0),o.compare(z.current.data,p)||(v.data=p),o.compare(d.get(u),p)||d.set(u,p),H(v),h||T(u,p,v.error,!1),[3,7]);case 6:return m=_.sent(),delete w[u],delete k[u],y.current.isPaused()?(H({isValidating:!1}),[2,!1]):(d.set(c,m),z.current.error!==m&&(H({isValidating:!1,error:m}),h||T(u,void 0,m,!1)),B("onError",m,u,o),o.shouldRetryOnError&&B("onErrorRetry",m,u,o,J,{retryCount:r+1,dedupe:!0}),[3,7]);case 7:return s=!1,[2,!0]}}))}))}),[u]);if(v((function(){if(u){K.current=!1;var e=V.current;V.current=!0;var t=z.current.data,r=I();N.current=u,o.compare(t,r)||H({data:r});var n=function(){return J({dedupe:!0})};(e||A())&&("undefined"===typeof r||p?n():g(n));var i=!1,a=$(O,(function(){!i&&y.current.revalidateOnFocus&&(i=!0,n(),setTimeout((function(){return i=!1}),y.current.focusThrottleInterval))})),s=$(E,(function(){y.current.revalidateOnReconnect&&n()})),f=$(C,(function(e,t,r,i,a){void 0===e&&(e=!0),void 0===a&&(a=!0);var s={},u=!1;return"undefined"===typeof t||o.compare(z.current.data,t)||(s.data=t,u=!0),z.current.error!==r&&(s.error=r,u=!0),"undefined"!==typeof i&&z.current.isValidating!==i&&(s.isValidating=i,u=!0),u&&H(s),!!e&&(a?n():J())}));return function(){H=function(){return null},K.current=!0,a(),s(),f()}}}),[u,J]),v((function(){var t=null,r=function(){return _(e,void 0,void 0,(function(){return b(this,(function(e){switch(e.label){case 0:return z.current.error||!y.current.refreshWhenHidden&&!y.current.isDocumentVisible()||!y.current.refreshWhenOffline&&!y.current.isOnline()?[3,2]:[4,J({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return y.current.refreshInterval&&t&&(t=setTimeout(r,y.current.refreshInterval)),[2]}}))}))};return y.current.refreshInterval&&(t=setTimeout(r,y.current.refreshInterval)),function(){t&&(clearTimeout(t),t=null)}}),[o.refreshInterval,o.refreshWhenHidden,o.refreshWhenOffline,J]),o.suspense){if(U=d.get(u),W=d.get(c),"undefined"===typeof U&&(U=j),"undefined"===typeof W&&(W=P),"undefined"===typeof U&&"undefined"===typeof W){if(w[u]||J(),w[u]&&"function"===typeof w[u].then)throw w[u];U=w[u]}if("undefined"===typeof U&&W)throw W}var Z=(0,n.useMemo)((function(){var e={revalidate:J,mutate:Q};return Object.defineProperties(e,{error:{get:function(){return F.current.error=!0,o.suspense?W:N.current===u?z.current.error:P},enumerable:!0},data:{get:function(){return F.current.data=!0,o.suspense?U:N.current===u?z.current.data:j},enumerable:!0},isValidating:{get:function(){return F.current.isValidating=!0,!!u&&z.current.isValidating},enumerable:!0}}),e}),[J,j,P,Q,u,o.suspense,W,U]);return Z}}}]);
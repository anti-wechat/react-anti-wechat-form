!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o(require("react")):"function"==typeof define&&define.amd?define(["react"],o):"object"==typeof exports?exports["react-robust-form-controls"]=o(require("react")):t["react-robust-form-controls"]=o(t.react)}(window,function(t){return function(t){var o={};function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)e.d(n,r,function(o){return t[o]}.bind(null,r));return n},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=8)}([function(t,o){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,o){t.exports=function(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}},function(o,e){o.exports=t},function(t,o){t.exports=function(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}},function(t,o){function e(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}},function(t,o,e){var n=e(9),r=e(0);t.exports=function(t,o){return!o||"object"!==n(o)&&"function"!=typeof o?r(t):o}},function(t,o){function e(o){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(o)}t.exports=e},function(t,o,e){var n=e(10);t.exports=function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(o&&o.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),o&&n(t,o)}},function(t,o,e){"use strict";e.r(o);var n=e(3),r=e.n(n),u=e(4),c=e.n(u),i=e(5),f=e.n(i),l=e(6),p=e.n(l),s=e(7),a=e.n(s),y=e(0),b=e.n(y),d=e(1),m=e.n(d),x=e(2),h=e.n(x),v=function(t){function o(t){var e;return r()(this,o),e=f()(this,p()(o).call(this,t)),m()(b()(b()(e)),"robust",function(t){return h.a.cloneElement(t,{onFocus:function(){var o,n;(o=e)._focus.apply(o,arguments),t.props.onFocus&&(n=t.props).onFocus.apply(n,arguments)},onBlur:function(){var o,n;(o=e)._blur.apply(o,arguments),t.props.onBlur&&(n=t.props).onBlur.apply(n,arguments)}})}),m()(b()(b()(e)),"_focus",function(){e.scrollPos={top:document.documentElement.scrollTop,left:document.documentElement.scrollLeft},e.hasFocus=!0}),m()(b()(b()(e)),"_blur",function(){e.hasFocus=!1,setTimeout(function(){e.hasFocus||window.scrollTo(0,0)},100)}),e.hasFocus=!1,e.scrollPos={top:0,left:0},e}return a()(o,t),c()(o,[{key:"render",value:function(){return this.props.children&&this.props.children(this.robust)}}]),o}(h.a.Component);o.default=v},function(t,o){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(o){return"function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?t.exports=n=function(t){return e(t)}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)},n(o)}t.exports=n},function(t,o){function e(o,n){return t.exports=e=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t},e(o,n)}t.exports=e}]).default});
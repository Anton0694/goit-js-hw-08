function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function g(e,t,n){var o,i,r,a,f,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function S(e){return c=e,f=setTimeout(j,t),l?b(e):a}function O(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=r}function j(){var e=p();if(O(e))return h(e);f=setTimeout(j,function(e){var n=t-(e-u);return s?m(n,r-(e-c)):n}(e))}function h(e){return f=void 0,g&&o?b(e):(o=i=void 0,a)}function w(){var e=p(),n=O(e);if(o=arguments,i=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(j,t),b(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=y(t)||0,v(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=i=f=void 0},w.flush=function(){return void 0===f?a:h(p())},w}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};const b={},S={form:document.querySelector(".feedback-form"),inputEmail:document.querySelector('input[type="email"]'),inputMessage:document.querySelector('textarea[name="message"]')};!function(e){const t=S.inputMessage.value,n=S.inputEmail.name;b[n]=t,localStorage.setItem("feedback-form-state",JSON.stringify(b))}(),S.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),e.target.reset()})),S.form.addEventListener("input",e(t)((function(e){JSON.parse(localStorage.getItem("feedback-form-state")),b[e.target.name]=e.target.value,console.log(b),localStorage.setItem("feedback-form-state",JSON.stringify(b))}),500));
//# sourceMappingURL=03-feedback.59638eab.js.map
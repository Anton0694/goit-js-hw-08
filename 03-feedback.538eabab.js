function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var r,i,o,a,f,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function j(e){return c=e,f=setTimeout(T,t),l?b(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=o}function T(){var e=p();if(S(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-u);return s?d(n,o-(e-c)):n}(e))}function h(e){return f=void 0,v&&r?b(e):(r=i=void 0,a)}function w(){var e=p(),n=S(e);if(r=arguments,i=this,u=e,n){if(void 0===f)return j(u);if(s)return f=setTimeout(T,t),b(u)}return void 0===f&&(f=setTimeout(T,t)),a}return t=y(t)||0,g(n)&&(l=!!n.leading,o=(s="maxWait"in n)?m(y(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=i=f=void 0},w.flush=function(){return void 0===f?a:h(p())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:r,maxWait:t,trailing:i})};let b={};const j={form:document.querySelector(".feedback-form"),inputEmail:document.querySelector('input[name="email"]'),inputMessage:document.querySelector('textarea[name="message"]')};j.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),b={}})),j.form.addEventListener("input",e(t)((function(e){b={email:j.form.email.value,message:j.form.message.value},localStorage.setItem("feedback-form-state",JSON.stringify(b))}),500));const S=JSON.parse(localStorage.getItem("feedback-form-state"));S&&(j.form.email.value=S.email,j.form.message.value=S.message);
//# sourceMappingURL=03-feedback.538eabab.js.map
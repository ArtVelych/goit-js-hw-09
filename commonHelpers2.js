import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const n="feedback-form-state",s=document.querySelector(".feedback-form");s.addEventListener("input",m);s.addEventListener("submit",i);function m(t){const e=t.currentTarget.elements.email.value.trim(),o=t.currentTarget.elements.message.value.trim();c(n,{email:e,message:o})}function i(t){t.preventDefault();const e=l(n)||{};e.email&&e.message?(console.log(e),localStorage.removeItem(n),s.reset()):alert("Please, fill in both email and message fields before submitting")}function c(t,e){const o=JSON.stringify(e);localStorage.setItem(t,o)}function l(t){const e=localStorage.getItem(t);try{return JSON.parse(e)}catch{return e}}function u(){const{email:t,message:e}=l(n)||{};s.elements.email.value=t||"",s.elements.message.value=e||""}u();const a=document.querySelector('input[name="email"]'),r=document.querySelector('textarea[name="message"]');a.addEventListener("focus",()=>{a.value.trim()||a.setAttribute("placeholder","Type area")});a.addEventListener("blur",()=>{a.removeAttribute("placeholder")});r.addEventListener("focus",()=>{r.value.trim()||r.setAttribute("placeholder","Type area")});r.addEventListener("blur",()=>{r.removeAttribute("placeholder")});
//# sourceMappingURL=commonHelpers2.js.map

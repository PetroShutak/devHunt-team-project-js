import{c as v,b as J,f as K,a as Q,d as V,e as Z,g as ee,r as te,h as x,i as j,j as ne}from"./light-dark-theme-71465ed0.js";var D="Expected a function",C=0/0,oe="[object Symbol]",re=/^\s+|\s+$/g,ie=/^[-+]0x[0-9a-f]+$/i,le=/^0b[01]+$/i,ae=/^0o[0-7]+$/i,se=parseInt,ce=typeof v=="object"&&v&&v.Object===Object&&v,de=typeof self=="object"&&self&&self.Object===Object&&self,ge=ce||de||Function("return this")(),ue=Object.prototype,me=ue.toString,fe=Math.max,ye=Math.min,A=function(){return ge.Date.now()};function he(e,t,n){var o,r,l,d,s,a,g=0,R=!1,m=!1,S=!0;if(typeof e!="function")throw new TypeError(D);t=O(t)||0,k(n)&&(R=!!n.leading,m="maxWait"in n,l=m?fe(O(n.maxWait)||0,t):l,S="trailing"in n?!!n.trailing:S);function M(i){var u=o,f=r;return o=r=void 0,g=i,d=e.apply(f,u),d}function G(i){return g=i,s=setTimeout(p,t),R?M(i):d}function F(i){var u=i-a,f=i-g,_=t-u;return m?ye(_,l-f):_}function I(i){var u=i-a,f=i-g;return a===void 0||u>=t||u<0||m&&f>=l}function p(){var i=A();if(I(i))return w(i);s=setTimeout(p,F(i))}function w(i){return s=void 0,S&&o?M(i):(o=r=void 0,d)}function U(){s!==void 0&&clearTimeout(s),g=0,o=a=r=s=void 0}function X(){return s===void 0?d:w(A())}function H(){var i=A(),u=I(i);if(o=arguments,r=this,a=i,u){if(s===void 0)return G(a);if(m)return s=setTimeout(p,t),M(a)}return s===void 0&&(s=setTimeout(p,t)),d}return H.cancel=U,H.flush=X,H}function be(e,t,n){var o=!0,r=!0;if(typeof e!="function")throw new TypeError(D);return k(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),he(e,t,{leading:o,maxWait:t,trailing:r})}function k(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function pe(e){return!!e&&typeof e=="object"}function ve(e){return typeof e=="symbol"||pe(e)&&me.call(e)==oe}function O(e){if(typeof e=="number")return e;if(ve(e))return C;if(k(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=k(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(re,"");var n=le.test(e);return n||ae.test(e)?se(e.slice(2),n?2:8):ie.test(e)?C:+e}var Le=be;function W(){return{seeMoreBtnRef:document.querySelectorAll(".gallery-see-more-btn"),galleryRef:document.querySelector(".gallery"),activeCategory:document.querySelectorAll(".active"),ulRef:document.querySelector(".nav-categories"),categoriesRef:document.querySelectorAll(".nav-category-item")}}function P(e){return`  <div class="gallery-book-link" data-id="${e._id}">
              <div class="gallery-book-card">
                <div class="gallery-book-cover" style="background-image: url('${e.book_image}')">
                </div>
                <p class="gallery-book-name">${e.title}</p>
                <p class="gallery-author">${e.author}</p>
              </div>
            </div>`}function E(e){return`  <div class="gallery-book-home-link" data-id="${e._id}">
              <div class="gallery-book-card">
                <div class="gallery-book-cover" style="background-image: url('${e.book_image}')">
                </div>
                <p class="gallery-book-name">${e.title}</p>
                <p class="gallery-author">${e.author}</p>
              </div>
            </div>`}function z(e){let t="";const n=e.currentTarget.dataset.id;J.findIndex(r=>r._id===n)!==-1?t="Remove from shopping list":t="ADD TO SHOPPING LIST",K(e.currentTarget.dataset.id).then(r=>{const l=document.querySelector(".container-modal-fav");l.innerHTML="";const d=`<div class="img-book" style="background-image: url('${r.book_image}');   background-size: cover;">
                    </div>
                    <div class="description-info">
                        <h2 class="title-name">${r.title}</h2>
                        <h3 class="title-author">${r.author}</h3>
                        <p class="description-book">${r.description}</p>
                        <ul class="shop-book">
                        <li class="name-shop-book">
                            <img
                            src="${Q}"
                            alt="logo Amazon"
                            width="62"
                            height="19"
                            />
                        </li>
                        <li class="name-shop-book">
                            <img
                            src="${V}"
                            alt="logo Yellow shop"
                            width="33"
                            height="32"
                            />
                        </li>
                        <li class="name-shop-book">
                            <img
                            src="${Z}"
                            alt="logo Dark shop"
                            width="38"
                            height="36"
                            />
                        </li>
                        </ul>
                    </div>
                    <button type="submit" class="choice-btn" data-id="${r._id}">${t}</button>
                    <p class="congrats"></p>`;l.insertAdjacentHTML("beforeend",d),document.querySelector("[data-modal]").classList.remove("is-hidden"),document.body.style.overflow="hidden";const a=document.querySelector(".choice-btn");a.innerHTML==="Remove from shopping list"?a.nextElementSibling.innerHTML="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.":a.nextElementSibling.innerHTML="",a.addEventListener("click",g=>{a.innerHTML==="ADD TO SHOPPING LIST"?(ee(g),a.innerHTML="Remove from shopping list",a.nextElementSibling.innerHTML="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”."):(a.innerHTML="ADD TO SHOPPING LIST",a.nextElementSibling.innerHTML="",te(g))})})}function b(){const e=document.querySelectorAll(".gallery-book-home-link"),t=document.querySelectorAll(".gallery-book-link");for(let n=0;n<e.length;n++)e[n].addEventListener("click",z);for(let n=0;n<t.length;n++)t[n].addEventListener("click",z)}const{galleryRef:y}=W();function L(e){if(console.log("Rendering by category"),y.innerHTML="",e.target.innerHTML==="See more"){y.insertAdjacentHTML("beforeend",`<h2 class="gallery-title">${e.target.dataset.category.split(" ").slice(0,length-1).join(" ")} <span>${e.target.dataset.category.split(" ").pop()}</span></h2>`),y.insertAdjacentHTML("beforeend",'<div class="gallery-list2"></div>');var t=document.querySelector(".gallery-list2");const r=e.target.dataset.category.split(" ").join("%20");x(r).then(l=>{l.map(d=>{t.insertAdjacentHTML("beforeend",P(d))}),b()});return}if(e.target.innerHTML.trim()==="All categories"){q();return}y.insertAdjacentHTML("beforeend",`<h2 class="gallery-title">${e.target.innerHTML.trim().split(" ").slice(0,length-1).join(" ")} <span>${e.target.innerHTML.trim().split(" ").pop()}</span></h2>`),y.insertAdjacentHTML("beforeend",'<div class="gallery-list2"></div>');var t=document.querySelector(".gallery-list2");const n=e.target.innerHTML.trim().split(" ").join("%20");x(n).then(o=>{o.map(r=>t.insertAdjacentHTML("beforeend",P(r))),b()})}const{galleryRef:c}=W();function q(){console.log("Rendering home page"),c.innerHTML="",document.documentElement.clientWidth<768?(c.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),j().then(e=>{for(let n of e)c.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${n.books[0].list_name}</h3>`),c.insertAdjacentHTML("beforeend",E(n.books[0])),c.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${n.books[0].list_name}">See more</button>`);const t=document.querySelectorAll(".gallery-see-more-btn");for(let n=0;n<t.length;n++)t[n].addEventListener("click",L);b()})):document.documentElement.clientWidth<1440?(c.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),j().then(e=>{for(let o of e){c.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${o.books[0].list_name}</h3>
          <div class="gallery-list"></div>`);var t=document.querySelectorAll(".gallery-list");const r=t[t.length-1];for(let l=0;l<3;l++)r.insertAdjacentHTML("beforeend",E(o.books[l]));c.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${o.books[0].list_name}">See more</button>`)}const n=document.querySelectorAll(".gallery-see-more-btn");for(let o=0;o<n.length;o++)n[o].addEventListener("click",L);b()})):(c.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),j().then(e=>{for(let o of e){c.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${o.books[0].list_name}</h3>
          <div class="gallery-list"></div>`);var t=document.querySelectorAll(".gallery-list");const r=t[t.length-1];for(let l=0;l<5;l++)r.insertAdjacentHTML("beforeend",E(o.books[l]));c.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${o.books[0].list_name}">See more</button>`)}const n=document.querySelectorAll(".gallery-see-more-btn");for(let o=0;o<n.length;o++)n[o].addEventListener("click",L);b()}))}q();let h=document.documentElement.clientWidth;onresize=Le(e=>{e.preventDefault();let t=document.documentElement.clientWidth;h<768?t>767&&($(),h=t):h<1440?t>1439&&($(),h=t):t<1440&&($(),h=t)},100);function $(){document.querySelector(".active").innerHTML.trim()==="All categories"&&q()}const N=document.querySelector(".nav-categories-list");async function ke(){const{data:e}=await ne.get("https://books-backend.p.goit.global/books/category-list");return e}const Te=async()=>{try{const e=await ke();N.innerHTML=await Me(e),document.querySelectorAll(".nav-category-item").forEach(n=>{n.addEventListener("click",o=>{const r=document.querySelector(".nav-category-item.active");r&&r.classList.remove("active"),o.target.classList.add("active")})})}catch{console.log("Oops! Something went wrong")}};Te();N.addEventListener("click",Se);function Se(e){e.target.dataset.id&&L(e)}function Me(e){return`<li class="nav-category-item active" data-id="all-categories">
        All categories</li>
        ${e.map(t=>`<li class="nav-category-item" data-id="${t.list_name}">
        ${t.list_name}
        </li>`).join("")}`}(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.closeModalBtn.addEventListener("click",o),document.addEventListener("keydown",t);function t(r){r.code==="Escape"&&(e.modal.classList.add("is-hidden"),document.removeEventListener("keydown",t))}e.modal.addEventListener("click",n);function n(r){r.target===r.currentTarget&&o()}function o(){e.modal.classList.toggle("is-hidden"),document.body.style.overflow=""}})();window.onload=function(){const e=document.documentElement.scrollHeight;({el:document.querySelector(".btn-up"),show(){this.el.classList.remove("btn-up_hide")},hide(){this.el.classList.add("btn-up_hide")},addEventListener(){window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>.8*e&&innerWidth>=768?this.show():this.hide()}),this.el.onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener()};const Y=document.querySelector(".js-modal-autoriz-open"),T=document.querySelector(".heder-backdrop"),B=document.querySelector(".js-modal-autoriz");Y.addEventListener("click",()=>{T.classList.remove("is-hidden"),B.classList.remove("is-hidden")});const He=document.querySelector(".js-modal-autoriz-close");He.addEventListener("click",()=>{T.classList.add("is-hidden"),B.classList.add("is-hidden")});T.addEventListener("click",()=>{T.classList.add("is-hidden"),B.classList.add("is-hidden")});console.log(Y);
import{c as v,b as X,f as J,a as Q,d as V,e as ee,g as te,r as ne,h as O,i as M,j as oe}from"./light-dark-theme-224913fb.js";var D="Expected a function",N=0/0,ie="[object Symbol]",se=/^\s+|\s+$/g,ae=/^[-+]0x[0-9a-f]+$/i,re=/^0b[01]+$/i,le=/^0o[0-7]+$/i,ce=parseInt,de=typeof v=="object"&&v&&v.Object===Object&&v,me=typeof self=="object"&&self&&self.Object===Object&&self,ue=de||me||Function("return this")(),he=Object.prototype,ge=he.toString,fe=Math.max,pe=Math.min,E=function(){return ue.Date.now()};function ye(e,t,n){var o,i,s,l,a,d,h=0,x=!1,g=!1,j=!0;if(typeof e!="function")throw new TypeError(D);t=P(t)||0,T(n)&&(x=!!n.leading,g="maxWait"in n,s=g?fe(P(n.maxWait)||0,t):s,j="trailing"in n?!!n.trailing:j);function w(r){var m=o,f=i;return o=i=void 0,h=r,l=e.apply(f,m),l}function G(r){return h=r,a=setTimeout(k,t),x?w(r):l}function F(r){var m=r-d,f=r-h,C=t-m;return g?pe(C,s-f):C}function _(r){var m=r-d,f=r-h;return d===void 0||m>=t||m<0||g&&f>=s}function k(){var r=E();if(_(r))return R(r);a=setTimeout(k,F(r))}function R(r){return a=void 0,j&&o?w(r):(o=i=void 0,l)}function U(){a!==void 0&&clearTimeout(a),h=0,o=d=i=a=void 0}function Z(){return a===void 0?l:R(E())}function H(){var r=E(),m=_(r);if(o=arguments,i=this,d=r,m){if(a===void 0)return G(d);if(g)return a=setTimeout(k,t),w(d)}return a===void 0&&(a=setTimeout(k,t)),l}return H.cancel=U,H.flush=Z,H}function be(e,t,n){var o=!0,i=!0;if(typeof e!="function")throw new TypeError(D);return T(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),ye(e,t,{leading:o,maxWait:t,trailing:i})}function T(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ke(e){return!!e&&typeof e=="object"}function ve(e){return typeof e=="symbol"||ke(e)&&ge.call(e)==ie}function P(e){if(typeof e=="number")return e;if(ve(e))return N;if(T(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=T(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(se,"");var n=re.test(e);return n||le.test(e)?ce(e.slice(2),n?2:8):ae.test(e)?N:+e}var Le=be;function q(){return{seeMoreBtnRef:document.querySelectorAll(".gallery-see-more-btn"),galleryRef:document.querySelector(".gallery"),activeCategory:document.querySelectorAll(".active"),categoriesRef:document.querySelector(".nav-categories-list"),bookInfo:document.querySelector(".container-modal-fav"),modal:document.querySelector("[data-modal]")}}function W(e){return`  <div class="gallery-book-link" data-id="${e._id}">
              <div class="gallery-book-card">
                <div class="gallery-book-cover" style="background-image: url('${e.book_image}')">
                </div>
                <p class="gallery-book-name">${e.title}</p>
                <p class="gallery-author">${e.author}</p>
              </div>
            </div>`}function A(e){return`  <div class="gallery-book-home-link" data-id="${e._id}">
              <div class="gallery-book-card">
                <div class="gallery-book-cover" style="background-image: url('${e.book_image}')">
                </div>
                <p class="gallery-book-name">${e.title}</p>
                <p class="gallery-author">${e.author}</p>
              </div>
            </div>`}const{bookInfo:u,modal:Te}=q();function z(e){let t="",n=0;const o=e.currentTarget.dataset.id;X.findIndex(s=>s._id===o)!==-1?(t="Remove from shopping list",n=501):(t="ADD TO SHOPPING LIST",n=465),J(e.currentTarget.dataset.id).then(s=>{u.style.height=`${n}px`,u.innerHTML="";const l=`<div class="img-book" style="background-image: url('${s.book_image}');   background-size: cover;">
                    </div>
                    <div class="description-info">
                        <h2 class="title-name">${s.title}</h2>
                        <h3 class="title-author">${s.author}</h3>
                        <p class="description-book">${s.description}</p>
                        <ul class="shop-book">
                        <li class="name-shop-book">
                         <a href="${s.buy_links[0].url}" target="_blank" class="brightness">
                            <img
                            src="${Q}"
                            alt="logo Amazon"
                            width="62"
                            height="19"
                            />
                          </a>
                        </li>
                        <li class="name-shop-book">
                          <a href="${s.buy_links[1].url}" target="_blank">
                            <img
                            src="${V}"
                            alt="logo Yellow shop"
                            width="33"
                            height="32"
                            />
                          </a>
                        </li>
                        <li class="name-shop-book">
                          <a href="${s.buy_links[4].url}" target="_blank">
                            <img
                            src="${ee}"
                            alt="logo Dark shop"
                            width="38"
                            height="36"
                            />
                          </a>
                        </li>
                        </ul>
                    </div>
                    <button type="submit" class="choice-btn" data-id="${s._id}">${t}</button>
                    <p class="congrats"></p>`;u.insertAdjacentHTML("beforeend",l),Te.classList.remove("is-hidden"),document.body.style.overflow="hidden",Y();const a=document.querySelector(".choice-btn");a.addEventListener("click",d=>{a.innerHTML==="ADD TO SHOPPING LIST"?(te(d),document.documentElement.clientWidth<768?u.style.height="806px":u.style.height="501px",a.innerHTML="Remove from shopping list",a.nextElementSibling.innerHTML="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”."):(document.documentElement.clientWidth<768?u.style.height="762px":u.style.height="465px",a.innerHTML="ADD TO SHOPPING LIST",a.nextElementSibling.innerHTML="",ne(d))})})}function Y(){const e=document.querySelector(".container-modal-fav"),t=document.querySelector(".choice-btn");t.innerHTML==="Remove from shopping list"?(t.nextElementSibling.innerHTML="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",document.documentElement.clientWidth<768?e.style.height="806px":e.style.height="501px"):(t.nextElementSibling.innerHTML="",document.documentElement.clientWidth<768?e.style.height="762px":e.style.height="465px")}function b(){const e=document.querySelectorAll(".gallery-book-home-link"),t=document.querySelectorAll(".gallery-book-link");for(let n=0;n<e.length;n++)e[n].addEventListener("click",z);for(let n=0;n<t.length;n++)t[n].addEventListener("click",z)}const{galleryRef:p,categoriesRef:Se}=q();function L(e){if(console.log("Rendering by category"),p.innerHTML="",e.target.innerHTML==="See more"){p.insertAdjacentHTML("beforeend",`<h2 class="gallery-title">${e.target.dataset.category.split(" ").slice(0,length-1).join(" ")} <span>${e.target.dataset.category.split(" ").pop()}</span></h2>`),p.insertAdjacentHTML("beforeend",'<div class="gallery-list2"></div>');const o=document.querySelector(".gallery-list2"),i=e.target.dataset.category.split(" ").join("%20");O(i).then(s=>{s.map(l=>{o.insertAdjacentHTML("beforeend",W(l))}),b()}),Se.querySelector(".active").classList.remove("active"),document.querySelector(`[data-id="${e.target.dataset.category}"]`).classList.add("active"),window.scrollTo(0,0);return}if(e.target.innerHTML.trim()==="All categories"){I(),window.scrollTo(0,0);return}p.insertAdjacentHTML("beforeend",`<h2 class="gallery-title">${e.target.innerHTML.trim().split(" ").slice(0,length-1).join(" ")} <span>${e.target.innerHTML.trim().split(" ").pop()}</span></h2>`),p.insertAdjacentHTML("beforeend",'<div class="gallery-list2"></div>');const t=document.querySelector(".gallery-list2"),n=e.target.innerHTML.trim().split(" ").join("%20");O(n).then(o=>{o.map(i=>t.insertAdjacentHTML("beforeend",W(i))),b()}),window.scrollTo(0,0)}const{galleryRef:c}=q();function I(){c.innerHTML="",document.documentElement.clientWidth<768?(c.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),M().then(e=>{for(let n of e)c.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${n.books[0].list_name}</h3>`),c.insertAdjacentHTML("beforeend",A(n.books[0])),c.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${n.books[0].list_name}">See more</button>`);const t=document.querySelectorAll(".gallery-see-more-btn");for(let n=0;n<t.length;n++)t[n].addEventListener("click",L);b()})):document.documentElement.clientWidth<1440?(c.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),M().then(e=>{for(let o of e){c.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${o.books[0].list_name}</h3>
          <div class="gallery-list"></div>`);var t=document.querySelectorAll(".gallery-list");const i=t[t.length-1];for(let s=0;s<3;s++)i.insertAdjacentHTML("beforeend",A(o.books[s]));c.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${o.books[0].list_name}">See more</button>`)}const n=document.querySelectorAll(".gallery-see-more-btn");for(let o=0;o<n.length;o++)n[o].addEventListener("click",L);b()})):(c.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),M().then(e=>{for(let o of e){c.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${o.books[0].list_name}</h3>
          <div class="gallery-list"></div>`);var t=document.querySelectorAll(".gallery-list");const i=t[t.length-1];for(let s=0;s<5;s++)i.insertAdjacentHTML("beforeend",A(o.books[s]));c.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${o.books[0].list_name}">See more</button>`)}const n=document.querySelectorAll(".gallery-see-more-btn");for(let o=0;o<n.length;o++)n[o].addEventListener("click",L);b()})),window.scrollTo(0,0)}I();let y=document.documentElement.clientWidth;onresize=Le(e=>{e.preventDefault();let t=document.documentElement.clientWidth;y<768?t>767&&($(),y=t):y<1440?(t>1439||t<768)&&($(),y=t):t<1440&&($(),y=t),document.querySelector("[data-modal]").classList.contains("is-hidden")||Y()},100);function $(){document.querySelector(".active").innerHTML.trim()==="All categories"&&I()}const K=document.querySelector(".nav-categories-list");async function je(){const{data:e}=await oe.get("https://books-backend.p.goit.global/books/category-list");return e}const we=async()=>{try{const e=await je();K.innerHTML=await Me(e),document.querySelectorAll(".nav-category-item").forEach(n=>{n.addEventListener("click",o=>{const i=document.querySelector(".nav-category-item.active");i&&i.classList.remove("active"),o.target.classList.add("active")})})}catch{console.log("Oops! Something went wrong")}};we();K.addEventListener("click",He);function He(e){e.target.dataset.id&&L(e)}function Me(e){return`<li class="nav-category-item active" data-id="all-categories">
        All categories</li>
        ${e.map(t=>`<li class="nav-category-item" data-id="${t.list_name}">
        ${t.list_name}
        </li>`).join("")}`}(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.closeModalBtn.addEventListener("click",o),document.addEventListener("keydown",t);function t(i){i.code==="Escape"&&(e.modal.classList.add("is-hidden"),document.removeEventListener("keydown",t),console.log("esc"))}e.modal.addEventListener("click",n);function n(i){i.target===i.currentTarget&&o()}function o(){e.modal.classList.toggle("is-hidden"),document.body.style.overflow=""}})();window.onload=function(){const e=document.documentElement.scrollHeight;({el:document.querySelector(".btn-up"),show(){this.el.classList.remove("btn-up_hide")},hide(){this.el.classList.add("btn-up_hide")},addEventListener(){window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>.8*e&&innerWidth>=768?this.show():this.hide()}),this.el.onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener()};const Ee=document.querySelector(".js-modal-autoriz-open"),S=document.querySelector(".heder-backdrop"),B=document.querySelector(".js-modal-autoriz");Ee.addEventListener("click",()=>{S.classList.remove("is-hidden"),B.classList.remove("is-hidden")});const Ae=document.querySelector(".js-modal-autoriz-close");Ae.addEventListener("click",()=>{S.classList.add("is-hidden"),B.classList.add("is-hidden")});S.addEventListener("click",()=>{S.classList.add("is-hidden"),B.classList.add("is-hidden")});const $e="/devHunt-team-project-js/assets/petro-shutak-d723eaf7.jpg",qe="/devHunt-team-project-js/assets/tatiana-tereshchenko-50080e28.jpg",Ie="/devHunt-team-project-js/assets/andrii-zlotnikov-2c9323af.jpg",Be="/devHunt-team-project-js/assets/yuliia-karas-027ddc77.jpg",xe="/devHunt-team-project-js/assets/kostiantyn-krysenko-f6965b47.jpg",_e="/devHunt-team-project-js/assets/anatolii-shkurpela-7cd475ea.jpg",Re="/devHunt-team-project-js/assets/yuliia-usova-4c95717e.jpg",Ce="/devHunt-team-project-js/assets/petro-kostrytsia-754f28b4.jpg",Oe="/devHunt-team-project-js/assets/serhii-kotkov-8c386b2f.jpg",Ne=[{memberName:"Petro <br> Shutak",photo:$e,github:"https://github.com/PetroShutak",linkedIn:"https://www.linkedin.com/in/petroshutak/",width:40,height:60},{memberName:"Tatiana Tereshchenko",photo:qe,github:"https://github.com/Tatiana-Tereshchenko",linkedIn:"https://www.linkedin.com/in/tetianatereshchenkoko-41a478262/",width:40,height:60},{memberName:"Sergii <br> Kotkov",photo:Oe,github:"https://github.com/Serhii-K5",linkedIn:"http://www.linkedin.com/in/serhii-kotkov",width:40,height:60},{memberName:"Andrii Zlotnikov",photo:Ie,github:"https://github.com/AndriiZlt",linkedIn:"https://www.linkedin.com/in/andrii-zlotnikov-9bab42153",width:40,height:60},{memberName:"Yuliia <br> Karas",photo:Be,github:"https://github.com/Yuliia-Karas",linkedIn:"https://www.linkedin.com/in/yuliia-karas-38991b274/",width:40,height:60},{memberName:"Kostiantyn Krysenko",photo:xe,github:"https://github.com/barkode",linkedIn:"https://www.linkedin.com/in/kostiantyn-krysenko-b721aa3a/",width:40,height:60},{memberName:"Anatolii Shkurpela",photo:_e,github:"https://github.com/AnatoliiShkurpela",linkedIn:"https://www.linkedin.com/in/anatolii-shkurpela-a8949b273/",width:40,height:60},{memberName:"Yuliia <br> Usova",photo:Re,github:"https://github.com/Iuliia23",linkedIn:"https://www.linkedin.com/in/julia-usova-a8802b276/",width:40,height:60},{memberName:"Petro Kostrytsia",photo:Ce,github:"https://github.com/petekostrytsya",linkedIn:"https://www.linkedin.com/in/petro-kostrytsia-64838a265/",width:40,height:60}],Pe=Ne.reduce((e,t)=>{const{memberName:n,photo:o,github:i,linkedIn:s,width:l,height:a}=t;return e+=` <li class="employees-card">
  <img class="employees-img"
    src="${o}"
    alt="${n}"
    width="${l}"
    height="${a}"
  />
  <h3 class="employees-name">${n}</h3>
  <ul class="social-list">
    <li class="social-list-itam">
      <a href="${i}" class="social-list-link" target="_blank">
        <svg class="social-list-icon">
          <use href="../images/sprite.svg#icon-github"></use>
        </svg>
      </a>
    </li>
    <li class="social-list-itam">
      <a href="${s}" class="social-list-link" target="_blank">
        <svg class="social-list-icon">
          <use href="../images/sprite.svg#icon-linkedin"></use>
        </svg>
      </a>
    </li>
  </ul>
</li>`},""),We=document.querySelector(".employees-item");We.insertAdjacentHTML("afterbegin",Pe);(()=>{const e={openModalBtn:document.querySelector("[data-modal-open-command]"),closeModalBtn:document.querySelector("[data-modal-close-command]"),modal:document.querySelector("[data-modal-command]")};document.addEventListener("keydown",t);function t(i){i.code==="Escape"&&(e.modal.classList.add("is-hidden"),document.removeEventListener("keydown",t))}e.openModalBtn.addEventListener("click",o),e.modal.addEventListener("click",n);function n(i){e.modal.classList.add("is-hidden"),i.target===i.currentTarget&&o()}function o(i){i.preventDefault(),e.modal.classList.toggle("is-hidden"),document.body.style.overflow=document.body.style.overflow==="hidden"?"":"hidden"}})();

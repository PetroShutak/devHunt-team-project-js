import{c as v,b as R,f as X,a as J,d as Q,e as V,g as ee,r as te,h as C,i as H,j as ne}from"./light-dark-theme-d55a85f5.js";var G="Expected a function",O=0/0,ie="[object Symbol]",oe=/^\s+|\s+$/g,se=/^[-+]0x[0-9a-f]+$/i,ae=/^0b[01]+$/i,re=/^0o[0-7]+$/i,le=parseInt,ce=typeof v=="object"&&v&&v.Object===Object&&v,de=typeof self=="object"&&self&&self.Object===Object&&self,ge=ce||de||Function("return this")(),me=Object.prototype,ue=me.toString,he=Math.max,pe=Math.min,M=function(){return ge.Date.now()};function fe(e,t,n){var i,o,s,l,a,d,u=0,q=!1,h=!1,S=!0;if(typeof e!="function")throw new TypeError(G);t=N(t)||0,T(n)&&(q=!!n.leading,h="maxWait"in n,s=h?he(N(n.maxWait)||0,t):s,S="trailing"in n?!!n.trailing:S);function j(r){var g=i,p=o;return i=o=void 0,u=r,l=e.apply(p,g),l}function K(r){return u=r,a=setTimeout(k,t),q?j(r):l}function F(r){var g=r-d,p=r-u,_=t-g;return h?pe(_,s-p):_}function B(r){var g=r-d,p=r-u;return d===void 0||g>=t||g<0||h&&p>=s}function k(){var r=M();if(B(r))return x(r);a=setTimeout(k,F(r))}function x(r){return a=void 0,S&&i?j(r):(i=o=void 0,l)}function U(){a!==void 0&&clearTimeout(a),u=0,i=d=o=a=void 0}function Z(){return a===void 0?l:x(M())}function w(){var r=M(),g=B(r);if(i=arguments,o=this,d=r,g){if(a===void 0)return K(d);if(h)return a=setTimeout(k,t),j(d)}return a===void 0&&(a=setTimeout(k,t)),l}return w.cancel=U,w.flush=Z,w}function be(e,t,n){var i=!0,o=!0;if(typeof e!="function")throw new TypeError(G);return T(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),fe(e,t,{leading:i,maxWait:t,trailing:o})}function T(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ye(e){return!!e&&typeof e=="object"}function ke(e){return typeof e=="symbol"||ye(e)&&ue.call(e)==ie}function N(e){if(typeof e=="number")return e;if(ke(e))return O;if(T(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=T(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(oe,"");var n=ae.test(e);return n||re.test(e)?le(e.slice(2),n?2:8):se.test(e)?O:+e}var ve=be;function E(){return{seeMoreBtnRef:document.querySelectorAll(".gallery-see-more-btn"),galleryRef:document.querySelector(".gallery"),activeCategory:document.querySelectorAll(".active"),categoriesRef:document.querySelector(".nav-categories-list"),bookInfo:document.querySelector(".container-modal-fav"),modal:document.querySelector("[data-modal]")}}function P(e){return`  <div class="gallery-book-link" data-id="${e._id}">
              <div class="gallery-book-card">
                <div class="gallery-book-cover" style="background-image: url('${e.book_image}')">
                </div>
                <p class="gallery-book-name">${e.title}</p>
                <p class="gallery-author">${e.author}</p>
              </div>
            </div>`}function $(e){return`  <div class="gallery-book-home-link" data-id="${e._id}">
              <div class="gallery-book-card">
                <div class="gallery-book-cover" style="background-image: url('${e.book_image}')">
                </div>
                <p class="gallery-book-name">${e.title}</p>
                <p class="gallery-author">${e.author}</p>
              </div>
            </div>`}const{bookInfo:m,modal:Le}=E();function W(e){let t="",n=0;const i=e.currentTarget.dataset.id;(R===null?-1:R.findIndex(s=>s._id===i))!==-1?(t="Remove from shopping list",n=501):(t="ADD TO SHOPPING LIST",n=465),X(e.currentTarget.dataset.id).then(s=>{m.style.height=`${n}px`,m.innerHTML="";const l=`<div class="img-book" style="background-image: url('${s.book_image}');   background-size: cover;">
                    </div>
                    <div class="description-info">
                        <h2 class="title-name">${s.title}</h2>
                        <h3 class="title-author">${s.author}</h3>
                        <p class="description-book">${s.description}</p>
                        <ul class="shop-book">
                        <li class="name-shop-book">
                          <a href="${s.buy_links[0].url}" target="_blank" class="brightness">
                            <img
                            src="${J}"
                            alt="logo Amazon"
                            width="62"
                            height="19"
                            />
                          </a>
                        </li>
                        <li class="name-shop-book">
                          <a href="${s.buy_links[1].url}" target="_blank">
                            <img
                            src="${Q}"
                            alt="logo Yellow shop"
                            width="33"
                            height="32"
                            />
                          </a>
                        </li>
                        <li class="name-shop-book">
                          <a href="${s.buy_links[4].url}" target="_blank">
                            <img
                            src="${V}"
                            alt="logo Dark shop"
                            width="38"
                            height="36"
                            />
                          </a>
                        </li>
                        </ul>
                    </div>
                    <button type="submit" class="choice-btn" data-id="${s._id}">${t}</button>
                    <p class="congrats"></p>`;m.insertAdjacentHTML("beforeend",l),Le.classList.remove("is-hidden"),document.body.style.overflow="hidden",D();const a=document.querySelector(".choice-btn");a.addEventListener("click",d=>{a.innerHTML==="ADD TO SHOPPING LIST"?(ee(d),document.documentElement.clientWidth<768?m.style.height="806px":m.style.height="501px",a.innerHTML="Remove from shopping list",a.nextElementSibling.innerHTML="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”."):(document.documentElement.clientWidth<768?m.style.height="762px":m.style.height="465px",a.innerHTML="ADD TO SHOPPING LIST",a.nextElementSibling.innerHTML="",te(d))})})}function D(){const e=document.querySelector(".container-modal-fav"),t=document.querySelector(".choice-btn");t.innerHTML==="Remove from shopping list"?(t.nextElementSibling.innerHTML="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",document.documentElement.clientWidth<768?e.style.height="806px":e.style.height="501px"):(t.nextElementSibling.innerHTML="",document.documentElement.clientWidth<768?e.style.height="762px":e.style.height="465px")}function y(){const e=document.querySelectorAll(".gallery-book-home-link"),t=document.querySelectorAll(".gallery-book-link");for(let n=0;n<e.length;n++)e[n].addEventListener("click",W);for(let n=0;n<t.length;n++)t[n].addEventListener("click",W)}const{galleryRef:f,categoriesRef:Te}=E();function L(e){if(f.innerHTML="",e.target.innerHTML==="See more"){f.insertAdjacentHTML("beforeend",`<h2 class="gallery-title">${e.target.dataset.category.split(" ").slice(0,length-1).join(" ")} <span>${e.target.dataset.category.split(" ").pop()}</span></h2>`),f.insertAdjacentHTML("beforeend",'<div class="gallery-list2"></div>');const i=document.querySelector(".gallery-list2"),o=e.target.dataset.category.split(" ").join("%20");C(o).then(s=>{s.map(l=>{i.insertAdjacentHTML("beforeend",P(l))}),y()}),Te.querySelector(".active").classList.remove("active"),document.querySelector(`[data-id="${e.target.dataset.category}"]`).classList.add("active"),window.scrollTo(0,0);return}if(e.target.innerHTML.trim()==="All categories"){I(),window.scrollTo(0,0);return}f.insertAdjacentHTML("beforeend",`<h2 class="gallery-title">${e.target.innerHTML.trim().split(" ").slice(0,length-1).join(" ")} <span>${e.target.innerHTML.trim().split(" ").pop()}</span></h2>`),f.insertAdjacentHTML("beforeend",'<div class="gallery-list2"></div>');const t=document.querySelector(".gallery-list2"),n=e.target.innerHTML.trim().split(" ").join("%20");C(n).then(i=>{i.map(o=>t.insertAdjacentHTML("beforeend",P(o))),y()}),window.scrollTo(0,0)}const{galleryRef:c}=E();function I(){c.innerHTML="",document.documentElement.clientWidth<768?(c.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),H().then(e=>{for(let n of e)c.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${n.books[0].list_name}</h3>`),c.insertAdjacentHTML("beforeend",$(n.books[0])),c.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${n.books[0].list_name}">See more</button>`);const t=document.querySelectorAll(".gallery-see-more-btn");for(let n=0;n<t.length;n++)t[n].addEventListener("click",L);y()})):document.documentElement.clientWidth<1440?(c.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),H().then(e=>{for(let n of e){c.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${n.books[0].list_name}</h3>
          <div class="gallery-list"></div>`);const i=document.querySelectorAll(".gallery-list"),o=i[i.length-1];for(let s=0;s<3;s++)o.insertAdjacentHTML("beforeend",$(n.books[s]));c.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${n.books[0].list_name}">See more</button>`)}const t=document.querySelectorAll(".gallery-see-more-btn");for(let n=0;n<t.length;n++)t[n].addEventListener("click",L);y()})):(c.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),H().then(e=>{for(let i of e){c.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${i.books[0].list_name}</h3>
          <div class="gallery-list"></div>`);var t=document.querySelectorAll(".gallery-list");const o=t[t.length-1];for(let s=0;s<5;s++)o.insertAdjacentHTML("beforeend",$(i.books[s]));c.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${i.books[0].list_name}">See more</button>`)}const n=document.querySelectorAll(".gallery-see-more-btn");for(let i=0;i<n.length;i++)n[i].addEventListener("click",L);y()})),window.scrollTo(0,0)}I();let b=document.documentElement.clientWidth;onresize=ve(e=>{e.preventDefault();let t=document.documentElement.clientWidth;b<768?t>767&&(A(),b=t):b<1440?(t>1439||t<768)&&(A(),b=t):t<1440&&(A(),b=t),document.querySelector("[data-modal]").classList.contains("is-hidden")||D()},100);function A(){document.querySelector(".active").innerHTML.trim()==="All categories"&&I()}const Y=document.querySelector(".nav-categories-list");async function Se(){const{data:e}=await ne.get("https://books-backend.p.goit.global/books/category-list");return e}const je=async()=>{try{const e=await Se();Y.innerHTML=await He(e),document.querySelectorAll(".nav-category-item").forEach(n=>{n.addEventListener("click",i=>{const o=document.querySelector(".nav-category-item.active");o&&o.classList.remove("active"),i.target.classList.add("active")})})}catch{console.log("Oops! Something went wrong")}};je();Y.addEventListener("click",we);function we(e){e.target.dataset.id&&L(e)}function He(e){return`<li class="nav-category-item active" data-id="all-categories">
        All categories</li>
        ${e.map(t=>`<li class="nav-category-item" data-id="${t.list_name}">
        ${t.list_name}
        </li>`).join("")}`}(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.closeModalBtn.addEventListener("click",i),document.addEventListener("keydown",t);function t(o){o.code==="Escape"&&(e.modal.classList.add("is-hidden"),document.removeEventListener("keydown",t),console.log("esc"))}e.modal.addEventListener("click",n);function n(o){o.target===o.currentTarget&&i()}function i(){e.modal.classList.toggle("is-hidden"),document.body.style.overflow=""}})();window.onload=function(){const e=document.documentElement.scrollHeight;({el:document.querySelector(".btn-up"),show(){this.el.classList.remove("btn-up_hide")},hide(){this.el.classList.add("btn-up_hide")},addEventListener(){window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>.8*e&&innerWidth>=768?this.show():this.hide()}),this.el.onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener()};const Me="/devHunt-team-project-js/assets/petro-shutak-d723eaf7.jpg",$e="/devHunt-team-project-js/assets/tatiana-tereshchenko-50080e28.jpg",Ae="/devHunt-team-project-js/assets/andrii-zlotnikov-2c9323af.jpg",Ee="/devHunt-team-project-js/assets/yuliia-karas-027ddc77.jpg",Ie="/devHunt-team-project-js/assets/kostiantyn-krysenko-f6965b47.jpg",qe="/devHunt-team-project-js/assets/anatolii-shkurpela-7cd475ea.jpg",Be="/devHunt-team-project-js/assets/yuliia-usova-4c95717e.jpg",xe="/devHunt-team-project-js/assets/petro-kostrytsia-754f28b4.jpg",_e="/devHunt-team-project-js/assets/serhii-kotkov-8c386b2f.jpg",Re=[{memberName:"Petro <br> Shutak",photo:Me,github:"https://github.com/PetroShutak",linkedIn:"https://www.linkedin.com/in/petroshutak/",width:40,height:60},{memberName:"Tatiana Tereshchenko",photo:$e,github:"https://github.com/Tatiana-Tereshchenko",linkedIn:"https://www.linkedin.com/in/tetianatereshchenkoko-41a478262/",width:40,height:60},{memberName:"Sergii <br> Kotkov",photo:_e,github:"https://github.com/Serhii-K5",iconGit:"../images/sprite.svg#icon-github",linkedIn:"http://www.linkedin.com/in/serhii-kotkov",iconLink:"../images/sprite.svg#icon-linkedin",width:40,height:60},{memberName:"Andrii Zlotnikov",photo:Ae,github:"https://github.com/AndriiZlt",iconGit:"../images/sprite.svg#icon-github",linkedIn:"https://www.linkedin.com/in/andrii-zlotnikov-9bab42153",iconLink:"../images/sprite.svg#icon-linkedin",width:40,height:60},{memberName:"Yuliia <br> Karas",photo:Ee,github:"https://github.com/Yuliia-Karas",iconGit:"../images/sprite.svg#icon-github",linkedIn:"https://www.linkedin.com/in/yuliia-karas-38991b274/",iconLink:"../images/sprite.svg#icon-linkedin",width:40,height:60},{memberName:"Kostiantyn Krysenko",photo:Ie,github:"https://github.com/barkode",iconGit:"../images/sprite.svg#icon-github",linkedIn:"https://www.linkedin.com/in/kostiantyn-krysenko-b721aa3a/",iconLink:"../images/sprite.svg#icon-linkedin",width:40,height:60},{memberName:"Anatolii Shkurpela",photo:qe,github:"https://github.com/AnatoliiShkurpela",iconGit:"../images/sprite.svg#icon-github",linkedIn:"https://www.linkedin.com/in/anatolii-shkurpela-a8949b273/",iconLink:"../images/sprite.svg#icon-linkedin",width:40,height:60},{memberName:"Yuliia <br> Usova",photo:Be,github:"https://github.com/Iuliia23",iconGit:"../images/sprite.svg#icon-github",linkedIn:"https://www.linkedin.com/in/julia-usova-a8802b276/",iconLink:"../images/sprite.svg#icon-linkedin",width:40,height:60},{memberName:"Petro Kostrytsia",photo:xe,github:"https://github.com/petekostrytsya",iconGit:"../images/sprite.svg#icon-github",linkedIn:"https://www.linkedin.com/in/petro-kostrytsia-64838a265/",iconLink:"../images/sprite.svg#icon-linkedin",width:40,height:60}],z="/devHunt-team-project-js/assets/sprite-84dba2d7.svg",Ce=`${z}#icon-github`,Oe=`${z}#icon-linkedin`,Ne=Re.reduce((e,t)=>{const{memberName:n,photo:i,github:o,linkedIn:s,width:l,height:a}=t;return e+=` <li class="employees-card">
  <img class="employees-img"
    src="${i}"
    alt="${n}"
    width="${l}"
    height="${a}"
  />
  <h3 class="employees-name">${n}</h3>
  <ul class="social-list">
    <li class="social-list-itam">
      <a href="${o}" class="social-list-link" target="_blank">
        <svg class="social-list-icon">
          <use href="${Ce}"></use>
        </svg>
      </a>
    </li>
    <li class="social-list-itam">
      <a href="${s}" class="social-list-link" target="_blank">
        <svg class="social-list-icon">
          <use href="${Oe}"></use>
        </svg>
      </a>
    </li>
  </ul>
</li>`},""),Pe=document.querySelector(".employees-item");Pe.insertAdjacentHTML("afterbegin",Ne);(()=>{const e={openModalBtn:document.querySelector("[data-modal-open-command]"),closeModalBtn:document.querySelector("[data-modal-close-command]"),modal:document.querySelector("[data-modal-command]")};document.addEventListener("keydown",t);function t(o){o.code==="Escape"&&(e.modal.classList.add("is-hidden"),document.removeEventListener("keydown",t))}e.openModalBtn.addEventListener("click",i),e.modal.addEventListener("click",n);function n(o){e.modal.classList.add("is-hidden"),o.target,o.currentTarget}function i(o){o.preventDefault(),e.modal.classList.toggle("is-hidden"),document.body.style.overflow=document.body.style.overflow==="hidden"?"":"hidden"}})();

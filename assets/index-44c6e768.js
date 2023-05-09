import{c as p,f as x,a as G,b as K,d as C,e as z}from"./light-dark-theme-aa8ba320.js";var Z="Expected a function",U=0/0,$="[object Symbol]",_=/^\s+|\s+$/g,ee=/^[-+]0x[0-9a-f]+$/i,te=/^0b[01]+$/i,ne=/^0o[0-7]+$/i,oe=parseInt,re=typeof p=="object"&&p&&p.Object===Object&&p,ie=typeof self=="object"&&self&&self.Object===Object&&self,le=re||ie||Function("return this")(),ae=Object.prototype,se=ae.toString,ce=Math.max,de=Math.min,B=function(){return le.Date.now()};function ge(e,t,n){var o,r,l,c,a,g,u=0,j=!1,m=!1,k=!0;if(typeof e!="function")throw new TypeError(Z);t=X(t)||0,v(n)&&(j=!!n.leading,m="maxWait"in n,l=m?ce(X(n.maxWait)||0,t):l,k="trailing"in n?!!n.trailing:k);function E(i){var d=o,A=r;return o=r=void 0,u=i,c=e.apply(A,d),c}function D(i){return u=i,a=setTimeout(b,t),j?E(i):c}function P(i){var d=i-g,A=i-u,Q=t-d;return m?de(Q,l-A):Q}function R(i){var d=i-g,A=i-u;return g===void 0||d>=t||d<0||m&&A>=l}function b(){var i=B();if(R(i))return q(i);a=setTimeout(b,P(i))}function q(i){return a=void 0,k&&o?E(i):(o=r=void 0,c)}function N(){a!==void 0&&clearTimeout(a),u=0,o=g=r=a=void 0}function W(){return a===void 0?c:q(B())}function T(){var i=B(),d=R(i);if(o=arguments,r=this,g=i,d){if(a===void 0)return D(g);if(m)return a=setTimeout(b,t),E(g)}return a===void 0&&(a=setTimeout(b,t)),c}return T.cancel=N,T.flush=W,T}function ue(e,t,n){var o=!0,r=!0;if(typeof e!="function")throw new TypeError(Z);return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),ge(e,t,{leading:o,maxWait:t,trailing:r})}function v(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function me(e){return!!e&&typeof e=="object"}function Ae(e){return typeof e=="symbol"||me(e)&&se.call(e)==$}function X(e){if(typeof e=="number")return e;if(Ae(e))return U;if(v(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=v(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(_,"");var n=te.test(e);return n||ne.test(e)?oe(e.slice(2),n?2:8):ee.test(e)?U:+e}var fe=ue;function J(){return{seeMoreBtnRef:document.querySelectorAll(".gallery-see-more-btn"),galleryRef:document.querySelector(".gallery"),activeCategory:document.querySelectorAll(".active"),ulRef:document.querySelector(".nav-categories"),categoriesRef:document.querySelectorAll(".nav-category-item")}}function Y(e){return`  <div class="gallery-book-link" data-id="${e._id}">
              <div class="gallery-book-card">
                <div class="gallery-book-cover" style="background-image: url('${e.book_image}')">
                </div>
                <p class="gallery-book-name">${e.title}</p>
                <p class="gallery-author">${e.author}</p>
              </div>
            </div>`}function S(e){return`  <div class="gallery-book-home-link" data-id="${e._id}">
              <div class="gallery-book-card">
                <div class="gallery-book-cover" style="background-image: url('${e.book_image}')">
                </div>
                <p class="gallery-book-name">${e.title}</p>
                <p class="gallery-author">${e.author}</p>
              </div>
            </div>`}const ye="data:image/png;base64,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",he="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOASURBVHgB7VdLaBRBEH3Vm91V/KwK/mIOcQ/GXPwgQQ8qSLz4QUWEXMSLIHjLxd/FY0CCSrxoQJEc1VMgIDkYEURCVEyCEA8aI35WQ0STYEyyO132zOzOdk9mZicQbykYZrrnddXrV101u8CiuUZRL7kjvcWShb0EWiuAlORovG6CwFIiz+BviaT1ks5gCPMhwfdQx0g+UI/bsXA2TLP5RjqPEVQiwe3YyiLZC6JMcQbBXMPmI3F5Im6gs/kBHVE1ZwmlHqt1GWdtMM8K85G4pMroQ2ZsJSpHEDqicCd1kiXVqguQdlLNe+mZfe/C5kLwW6z29CE9rkGCmA4oKWw5wAH30rMfEzYXjhdH9LhGOhTLLAXJXLUCyB4FVS1TAws8PgJ8eaJYCxO3aT9oRRZIpMBTOWD0FfAnh4AMVYeSEExpZh++4TJoRzOQXqn5UPbjNWT3aWDiE7C8BnTwLqhmv4mZGQf3XQMPtqkd6o5puRFXH0hLjbX8U+1x0O6rBgHP1u9Sge8rnHJyrNMg4Fk6A9rXAsqegu5XMItQJcA+eZfVIMqoeg84Uw+sqY/EYcl69yyUTJopN0lYtmcqVzbHKMPV2ypj2Dlvjk92Q4ST8E5vEWxLXZEGVVVCuH5luTFIcDgJVyYydhArQEUQzBREKQFL2M2iiOJ46YhBdA6JSCXsd17gmG05Nglt7OsvPiXILdqS41hKxMSUlCAfIQQowZpsJFHZ4mBYOzts84goURtIPL+DGY8EGWfC7zbgYPoWl2z6N3hs2Cly2rQzGFPIg39+UNhx0Lo6YOmqIlGa06BCSSgV2KBpy/h1ALLrCjj3RjkquJNLVkHsPgfReNHbluy5Ae69Df77y+tGNllx4tb8qoMltL6m1r3tBPo6ysFd18DUOOTTVvWYcKZldwvk85tFCHl3/twPq22vUiRjpI2jzoRSYtILZDuaHNPfwm+yRxGp3Qfuf6Q+3wkEm0rx9GTZJzmbnQklYUnKGRVc8WAqwPtnTuu2K0nTylhq9z+vBTrVgY8+mmVLsOjSP7mxLvvLG/ATEAFj7w7u0eOSb1+Uv7BhSD3U4X8ZYSTV+n0zwpRwsmbJJiVZwW3hC3xJTDDR4bm8AowvbajNz8L+EZnFghkPsqCm9PXcO8Qh4S1r3lhvCdHALKvViUrO52+gXaEq/3kSNMoJfhEUfNH89g83+MD9ZjdiQAAAAABJRU5ErkJggg==",be="data:image/png;base64,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";function O(e){x(e.currentTarget.dataset.id).then(t=>{const n=document.querySelector(".container-modal-fav");n.innerHTML="";const o=`<div class="img-book" style="background-image: url('${t.book_image}');   background-size: cover;">
                    </div>
                    <div class="description-info">
                        <h2 class="title-name">${t.title}</h2>
                        <h3 class="title-author">${t.author}</h3>
                        <p class="description-book">${t.description}</p>
                        <ul class="shop-book">
                        <li class="name-shop-book">
                            <img
                            src="${ye}"
                            alt="logo Amazon"
                            width="62"
                            height="19"
                            />
                        </li>
                        <li class="name-shop-book">
                            <img
                            src="${he}"
                            alt="logo Yellow shop"
                            width="33"
                            height="32"
                            />
                        </li>
                        <li class="name-shop-book">
                            <img
                            src="${be}"
                            alt="logo Dark shop"
                            width="38"
                            height="36"
                            />
                        </li>
                        </ul>
                    </div>
                    <button type="submit" class="choice-btn" data-id="${t._id}">ADD TO SHOPPING LIST</button>`;n.insertAdjacentHTML("beforeend",o),document.querySelector("[data-modal]").classList.remove("is-hidden"),document.body.style.overflow="hidden",document.querySelector(".choice-btn").addEventListener("click",G)})}function h(){const e=document.querySelectorAll(".gallery-book-home-link"),t=document.querySelectorAll(".gallery-book-link");for(let n=0;n<e.length;n++)e[n].addEventListener("click",O);for(let n=0;n<t.length;n++)t[n].addEventListener("click",O)}const{galleryRef:f}=J();function L(e){if(console.log("Rendering by category"),f.innerHTML="",e.target.innerHTML==="See more"){f.insertAdjacentHTML("beforeend",`<h2 class="gallery-title">${e.target.dataset.category.split(" ").slice(0,length-1).join(" ")} <span>${e.target.dataset.category.split(" ").pop()}</span></h2>`),f.insertAdjacentHTML("beforeend",'<div class="gallery-list2"></div>');var t=document.querySelector(".gallery-list2");const r=e.target.dataset.category.split(" ").join("%20");K(r).then(l=>l.map(c=>t.insertAdjacentHTML("beforeend",Y(c)))),h();return}if(e.target.innerHTML.trim()==="All categories"){w();return}f.insertAdjacentHTML("beforeend",`<h2 class="gallery-title">${e.target.innerHTML.trim().split(" ").slice(0,length-1).join(" ")} <span>${e.target.innerHTML.trim().split(" ").pop()}</span></h2>`),f.insertAdjacentHTML("beforeend",'<div class="gallery-list2"></div>');var t=document.querySelector(".gallery-list2");const n=e.target.innerHTML.trim().split(" ").join("%20");K(n).then(o=>{o.map(r=>t.insertAdjacentHTML("beforeend",Y(r))),h()})}const{galleryRef:s}=J();function w(){console.log("Rendering home page"),s.innerHTML="",document.documentElement.clientWidth<768?(s.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),C().then(e=>{for(let n of e)s.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${n.books[0].list_name}</h3>`),s.insertAdjacentHTML("beforeend",S(n.books[0])),s.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${n.books[0].list_name}">See more</button>`);const t=document.querySelectorAll(".gallery-see-more-btn");for(let n=0;n<t.length;n++)t[n].addEventListener("click",L);h()})):document.documentElement.clientWidth<1440?(s.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),C().then(e=>{for(let o of e){s.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${o.books[0].list_name}</h3>
          <div class="gallery-list"></div>`);var t=document.querySelectorAll(".gallery-list");const r=t[t.length-1];for(let l=0;l<3;l++)r.insertAdjacentHTML("beforeend",S(o.books[l]));s.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${o.books[0].list_name}">See more</button>`)}const n=document.querySelectorAll(".gallery-see-more-btn");for(let o=0;o<n.length;o++)n[o].addEventListener("click",L);h()})):(s.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),C().then(e=>{for(let o of e){s.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${o.books[0].list_name}</h3>
          <div class="gallery-list"></div>`);var t=document.querySelectorAll(".gallery-list");const r=t[t.length-1];for(let l=0;l<5;l++)r.insertAdjacentHTML("beforeend",S(o.books[l]));s.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${o.books[0].list_name}">See more</button>`)}const n=document.querySelectorAll(".gallery-see-more-btn");for(let o=0;o<n.length;o++)n[o].addEventListener("click",L);h()}))}w();let y=document.documentElement.clientWidth;onresize=fe(e=>{e.preventDefault();let t=document.documentElement.clientWidth;y<768?t>767&&(H(),y=t):y<1440?t>1439&&(H(),y=t):t<1440&&(H(),y=t)},100);function H(){document.querySelector(".active").innerHTML.trim()==="All categories"&&w()}const F=document.querySelector(".nav-categories-list");async function pe(){const{data:e}=await z.get("https://books-backend.p.goit.global/books/category-list");return e}const Le=async()=>{try{const e=await pe();F.innerHTML=await Me(e),document.querySelectorAll(".nav-category-item").forEach(n=>{n.addEventListener("click",o=>{const r=document.querySelector(".nav-category-item.active");r&&r.classList.remove("active"),o.target.classList.add("active")})})}catch{console.log("Oops! Something went wrong")}};Le();F.addEventListener("click",ve);function ve(e){e.target.dataset.id&&L(e)}function Me(e){return`<li class="nav-category-item active" data-id="all-categories">
        All categories</li>
        ${e.map(t=>`<li class="nav-category-item" data-id="${t.list_name}">
        ${t.list_name}
        </li>`).join("")}`}(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.closeModalBtn.addEventListener("click",n),document.addEventListener("keydown",t);function t(o){o.code==="Escape"&&(e.modal.classList.add("is-hidden"),document.removeEventListener("keydown",t))}function n(){e.modal.classList.toggle("is-hidden"),document.body.style.overflow=""}})();window.onload=function(){const e=document.documentElement.scrollHeight;({el:document.querySelector(".btn-up"),show(){this.el.classList.remove("btn-up_hide")},hide(){this.el.classList.add("btn-up_hide")},addEventListener(){window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>.8*e&&innerWidth>=768?this.show():this.hide()}),this.el.onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener()};const V=document.querySelector(".js-modal-autoriz-open"),M=document.querySelector(".heder-backdrop"),I=document.querySelector(".js-modal-autoriz");V.addEventListener("click",()=>{M.classList.remove("is-hidden"),I.classList.remove("is-hidden")});const ke=document.querySelector(".js-modal-autoriz-close");ke.addEventListener("click",()=>{M.classList.add("is-hidden"),I.classList.add("is-hidden")});M.addEventListener("click",()=>{M.classList.add("is-hidden"),I.classList.add("is-hidden")});console.log(V);
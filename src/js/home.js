import { renderingHomePage } from './homeRenderHomePage';
import renderingCategories from './homeRenderCategories';
import throttle from 'lodash.throttle';

const { ulRef } = getRefs();

fetchingCategories().then(response => {
  for (let elem of response) {
    ulRef.insertAdjacentHTML(
      'beforeend',
      `<li class="menu-category">${elem.list_name}</li>`
    );
  }
  ulRef.addEventListener('click', renderingByCategory);
});

renderingHomePage();
onresize = throttle(() => {
  const activeCategory = document.querySelector('.is-active');
  if (activeCategory.innerHTML === 'All categories') {
    renderingHomePage();
  }
}, 100);

import { getRefs } from './homeRefs';
import { fetchingCategories } from './homeFetchingFun';
import { renderingHomePage } from './homeRenderingHomePage';
import renderingByCategory from './homeRenderingByCategory';

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

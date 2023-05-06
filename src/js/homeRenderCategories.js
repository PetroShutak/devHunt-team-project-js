import { getRefs } from './homeRefs';
import renderingByCategory from './homeRenderByCategory';
import { fetchingCategories } from './homeFetchFunctions';

const { ulRef } = getRefs();

export default function renderingCategories() {
  fetchingCategories().then(response => {
    ulRef.insertAdjacentHTML(
      'beforeend',
      `<li class="menu-category is-active">All categories</li>`
    );
    for (let elem of response) {
      ulRef.insertAdjacentHTML(
        'beforeend',
        `<li class="menu-category">${elem.list_name}</li>`
      );
    }
    const categoriesRef = document.querySelectorAll('.nav-category-item');
    for (let i = 0; i < categoriesRef.length; i++) {
      categoriesRef[i].addEventListener('click', renderingByCategory);
    }
  });
}

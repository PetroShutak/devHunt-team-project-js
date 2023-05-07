import throttle from 'lodash.throttle';
import { getRefs } from './homeRefs';
import { renderingHomePage } from './renderingHomePage';
import renderingByCategory from './renderingByCategory';

renderingHomePage();

const { categoriesRef } = getRefs();
for (let i = 0; i < categoriesRef.length; i++) {
  categoriesRef[i].addEventListener('click', renderingByCategory);
}

onresize = throttle(() => {
  if (activeCategory.innerHTML.trim() === 'All categories') {
    renderingHomePage();
  }
}, 100);

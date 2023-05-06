import { renderingHomePage } from './homeRenderHomePage';
import renderingCategories from './homeRenderCategories';
import throttle from 'lodash.throttle';

renderingCategories();
renderingHomePage();
onresize = throttle(() => {
  const activeCategory = document.querySelector('.is-active');
  if (activeCategory.innerHTML === 'All categories') {
    renderingHomePage();
  }
}, 100);

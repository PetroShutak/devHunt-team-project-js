import throttle from 'lodash.throttle';
import { renderingHomePage } from './renderingHomePage';

renderingHomePage();

onresize = throttle(e => {
  e.preventDefault();
  const activeCategory = document.querySelector('.active');
  if (activeCategory.innerHTML.trim() === 'All categories') {
    renderingHomePage();
  }
}, 100);

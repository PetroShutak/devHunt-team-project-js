import getRefs from './homeRefs';
import { createBookCard } from './createBookCard';
import { fetchingByCategory } from './apiService';
import { renderingHomePage } from './renderingHomePage';
import addBooksListeners from './addBooksListeners';
const { galleryRef, categoriesRef } = getRefs();

export default function renderingByCategory(e) {
  console.log('Rendering by category');
  galleryRef.innerHTML = '';
  if (e.target.innerHTML === 'See more') {
    galleryRef.insertAdjacentHTML(
      'beforeend',
      `<h2 class="gallery-title">${e.target.dataset.category
        .split(' ')
        .slice(0, length - 1)
        .join(' ')} <span>${e.target.dataset.category
        .split(' ')
        .pop()}</span></h2>`
    );
    galleryRef.insertAdjacentHTML(
      'beforeend',
      `<div class="gallery-list2"></div>`
    );
    var galleryListRef = document.querySelector('.gallery-list2');

    const query = e.target.dataset.category.split(' ').join('%20');
    fetchingByCategory(query).then(response => {
      response.map(book => {
        galleryListRef.insertAdjacentHTML('beforeend', createBookCard(book));
      });
      addBooksListeners();
    });

    // Switching class active to new category
    categoriesRef.querySelector('.active').classList.remove('active');
    document
      .querySelector(`[data-id="${e.target.dataset.category}"]`)
      .classList.add('active');

    return;
  }
  if (e.target.innerHTML.trim() === 'All categories') {
    renderingHomePage();
    return;
  }
  galleryRef.insertAdjacentHTML(
    'beforeend',
    `<h2 class="gallery-title">${e.target.innerHTML
      .trim()
      .split(' ')
      .slice(0, length - 1)
      .join(' ')} <span>${e.target.innerHTML
      .trim()
      .split(' ')
      .pop()}</span></h2>`
  );
  galleryRef.insertAdjacentHTML(
    'beforeend',
    `<div class="gallery-list2"></div>`
  );
  var galleryListRef = document.querySelector('.gallery-list2');

  const query = e.target.innerHTML.trim().split(' ').join('%20');
  fetchingByCategory(query).then(response => {
    response.map(book =>
      galleryListRef.insertAdjacentHTML('beforeend', createBookCard(book))
    );
    addBooksListeners();
  });
}

export function getRefs() {
  return {
    seeMoreBtnRef: document.querySelectorAll('.gallery-see-more-btn'),
    galleryRef: document.querySelector('.gallery'),
    activeCategory: document.querySelectorAll('.active'),
    ulRef: document.querySelector('.nav-categories'),
    categoriesRef: document.querySelectorAll('.nav-category-item'),
  };
}

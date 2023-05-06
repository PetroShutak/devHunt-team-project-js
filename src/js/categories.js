import axios from 'axios';
import renderingByCategory from './homeRenderingByCategory';
const category_list = document.querySelector('.nav-categories');

async function getCategoryList() {
  const { data } = await axios.get(
    'https://books-backend.p.goit.global/books/category-list'
  );
  return data;
}

const renderCategories = async () => {
  try {
    const category = await getCategoryList();
    category_list.innerHTML = await markupCategoriesList(category);
    const listCategory = document.querySelectorAll('.category-item');
    listCategory.forEach(itemCategory => {
      itemCategory.addEventListener('click', event => {
        const ActiveCategory = document.querySelector('.category-item.active');
        if (ActiveCategory) {
          ActiveCategory.classList.remove('active');
        }
        event.target.classList.add('active');
      });
    });
  } catch (error) {
    console.log('Oops! Something went wrong');
  }
};

renderCategories();
category_list.addEventListener('click', renderingByCategory);

function returnCategoryName(event) {
  console.log(event);
  const categoryName = event.target.dataset.id;
  return categoryName;
}

function markupCategoriesList(categories) {
  return `<li class="category-item active" data-id="all-categories">
        All categories</li>
        ${categories
          .map(
            category => `<li class="category-item" data-id="${category.list_name}">
        ${category.list_name}
        </li>`
          )
          .join('')}`;
}

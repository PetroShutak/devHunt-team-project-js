import { fetchingByBook } from './apiService';
console.log('shopping list Service');

const emptyRef = document.querySelector('.empty-shopping-list');
const booksList = document.querySelector('.shopping-list');

renderingShoppingList();

function renderingShoppingList() {
  console.log('Rendering shopping list');

  if (!booksList) {
    return;
  }
  booksList.innerHTML = '';
  // Clearing the empty-shopping-list-image and text
  if (localStorage.key(0)) {
    emptyRef.classList.add('visuallyhidden');
  } else {
    emptyRef.classList.remove('visuallyhidden');
  }
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    const book = loadFromLocalStorage(key);
    booksList.insertAdjacentHTML(
      'beforeend',
      `<div class="shopping-list-thumb">
      <button class="delete-shopping-list-btn" type="button" data-id="${book._id}">
      <svg class="delete-shopping-list-icon">
        <use href="./images/icon.svg#icon-trash"></use>
      </svg>
    </button>
    <div class="cover-shopping-list">
      <img
        class="cover-shopping-list-img"
        src="${book.book_image}"
        alt="${book.title}"
      />
    </div>
    <div class="book-interface">
      <h2 class="shopping-list-book-title">${book.title}</h2>
      <p class="shopping-list-book-category">${book.list_name}</p>
      <p class="shopping-list-book-about">${book.description}</p>
      <p class="shopping-list-book-author">${book.author}</p>
      <ul class="shopping-list-trading">
        <li class="shopping-list-trading-item">
          <a class="shopping-list-trading-link">
            <img
              src="./images/amazon.png"
              class="shopping-list-trading-icon-amazon"
            />
          </a>
        </li>
        <li class="shopping-list-trading-item">
          <a class="shopping-list-trading-link">
            <img
              src="./images/apple-books.png"
              class="shopping-list-trading-icon-apple-books"
            />
          </a>
        </li>
        <li class="shopping-list-trading-item">
          <a class="shopping-list-trading-link">
            <img
              src="./images/book-shop.png"
              class="shopping-list-trading-icon-book-shop"
            />
          </a>
        </li>
      </ul>
    </div>
        </div>
    `
    );
  }

  const deleteBtnRefs = document.querySelectorAll('.delete-shopping-list-btn');
  for (let i = 0; i < deleteBtnRefs.length; i++) {
    deleteBtnRefs[i].addEventListener('click', removingBookFromShoppingList);
  }
}

export default async function addingToShopList(e) {
  console.log(`Adding book ${e.target.dataset.id} to shopping list`);
  const book = await fetchingByBook(e.target.dataset.id);
  // localStorage.setItem(book._id, JSON.stringify(book));
  saveToLocalStorage(book._id, book);
}

function removingBookFromShoppingList(e) {
  console.log(`Removing book ${e.currentTarget.dataset.id} from shoppig list`);
  localStorage.removeItem(e.currentTarget.dataset.id);
  renderingShoppingList();
}

function saveToLocalStorage(key, value) {
  try {
    const dataJSON = JSON.stringify(value);
    localStorage.setItem(key, dataJSON);
  } catch (error) {
    console.log(error);
  }
}

function loadFromLocalStorage(key) {
  // завантажує (віддає) значення в форматі з JSON
  try {
    const dataJSON = localStorage.getItem(key);
    return dataJSON === null ? { shoppinglist } : JSON.parse(dataJSON);
  } catch (error) {
    console.log(error);
  }
}

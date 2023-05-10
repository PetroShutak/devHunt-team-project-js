import { fetchingByBook } from './apiService';
import Notiflix from 'notiflix';

const emptyRef = document.querySelector('.empty-shopping-list');
const booksList = document.querySelector('.shopping-list');

let booksArray = [];

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

  const dataJSON = localStorage.getItem('books');
  if (dataJSON) {
    booksArray = JSON.parse(dataJSON);
  }

  for (let i = 0; i < booksArray.length; i++) {
    const book = loadFromLocalStorage(booksArray[i]._id);
    booksList.insertAdjacentHTML(
      'beforeend',
      `<div class="shopping-list-thumb">
      <button class="delete-shopping-list-btn" type="button" data-id="${book._id}">
      <svg class="delete-shopping-list-icon">
        <use href="./images/icon.svg#icon-trash"></use>
      </svg>
    </button>
    <div class="cover-shopping-list" style="background-image: url('${book.book_image}'); background-size: cover;">
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

export async function addingToShopList(e) {
  const book = await fetchingByBook(e.target.dataset.id);
  saveToLocalStorage(book);
  Notiflix.Notify.success('Book added to shopping list');
}

export function removingBookFromShoppingList(e) {
  const id = e.currentTarget.dataset.id;
  const index = booksArray.findIndex(book => book._id === id);
  if (index !== -1) {
    booksArray.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(booksArray));
    renderingShoppingList();
    Notiflix.Notify.info('Book removed from shopping list');
  }
}

function saveToLocalStorage(book) {
  try {
    booksArray.push(book);
    const dataJSON = JSON.stringify(booksArray);
    localStorage.setItem('books', dataJSON);
  } catch (error) {
    console.log(error);
  }
}

function loadFromLocalStorage(id) {
  try {
    const dataJSON = localStorage.getItem('books');
    if (dataJSON) {
      const booksArray = JSON.parse(dataJSON);
      return booksArray.find(book => book._id === id);
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}

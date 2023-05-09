import { fetchingByBook } from './apiService';

renderingShoppingList();

export default async function addingToShopList(e) {
  console.log('Adding to shopping list');
  const book = await fetchingByBook(e.target.dataset.id);
  localStorage.setItem(book._id, JSON.stringify(book));
  saveToLocalStorage(book._id, book);
}

function renderingShoppingList() {
  console.log('Rendering shopping list');
  const emptyRef = document.querySelector('.empty-shopping-list');
  const booksList = document.querySelector('.shopping-list');
  if (!booksList) {
    return;
  }
  // Clearing the empty-shopping-list-image and text
  if (localStorage.key(0)) {
    emptyRef.classList.add('visuallyhidden');
  } else {
    // emptyRef.classList.remove('visuallyhidden');
  }
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    const book = loadFromLocalStorage(key);
    booksList.insertAdjacentHTML(
      'beforeend',
      `<div class="shopping-list-thumb">
      <button class="delete-shopping-list-btn" type="button">
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

/* <div class="shopping-list-books">
<ul class="list-shopping-list">
  <li class="item-shopping-list">
    <div class="shopping-list-thumb">
      <button class="delete-shopping-list-btn" type="button">
        <img src = "images/trash-03.svg"/>
      </button>
      <div class="cover-shopping-list">
        <img
          class="cover-shopping-list-img"
          src=" "
          alt="Book cover"
        />
      </div>
      <div class="book-interface">
        <h2 class="shopping-list-book-title">Book title</h2>
        <p class="shopping-list-book-category">Book category</p>
        <p class="shopping-list-book-about">About</p>
        <p class="shopping-list-book-author">Book author</p>
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
  </li>
</ul>
</div>
</div> */

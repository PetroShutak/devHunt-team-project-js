import { fetchingByBook } from './apiService';
import amazon from '../images/amazon.png';
import appleBooks from '../images/apple-books.png';
import bookShop from '../images/book-shop.png';
import {
  addingToShopList,
  removingBookFromShoppingList,
} from './shoppingListService';

export default function onBookClick(e) {
  let btnText = '';
  let containerHeight = 0;
  if (localStorage.getItem(e.currentTarget.dataset.id)) {
    btnText = 'Remove from shopping list';
    containerHeight = 501;
  } else {
    btnText = 'ADD TO SHOPPING LIST';
    containerHeight = 465;
  }
  fetchingByBook(e.currentTarget.dataset.id).then(book => {
    const bookInfo = document.querySelector('.container-modal-fav');
    bookInfo.style.height = `${containerHeight}px`;
    console.log(bookInfo.style.height);
    bookInfo.innerHTML = '';
    const markup = `<div class="img-book" style="background-image: url('${book.book_image}');   background-size: cover;">
                    </div>
                    <div class="description-info">
                        <h2 class="title-name">${book.title}</h2>
                        <h3 class="title-author">${book.author}</h3>
                        <p class="description-book">${book.description}</p>
                        <ul class="shop-book">
                        <li class="name-shop-book">
                            <img
                            src="${amazon}"
                            alt="logo Amazon"
                            width="62"
                            height="19"
                            />
                        </li>
                        <li class="name-shop-book">
                            <img
                            src="${appleBooks}"
                            alt="logo Yellow shop"
                            width="33"
                            height="32"
                            />
                        </li>
                        <li class="name-shop-book">
                            <img
                            src="${bookShop}"
                            alt="logo Dark shop"
                            width="38"
                            height="36"
                            />
                        </li>
                        </ul>
                    </div>
                    <button type="submit" class="choice-btn" data-id="${book._id}">${btnText}</button>
                    <p class="congrats"></p>`;

    bookInfo.insertAdjacentHTML('beforeend', markup);
    // modal is shown
    const modal = document.querySelector('[data-modal]');
    modal.classList.remove('is-hidden');

    // remove scrolling
    document.body.style.overflow = 'hidden';

    // adding to shopping list
    const addToShoppingListBtn = document.querySelector('.choice-btn');
    if (addToShoppingListBtn.innerHTML === 'Remove from shopping list') {
      addToShoppingListBtn.nextElementSibling.innerHTML =
        'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
    } else {
      addToShoppingListBtn.nextElementSibling.innerHTML = '';
    }

    addToShoppingListBtn.addEventListener('click', e => {
      if (addToShoppingListBtn.innerHTML === 'ADD TO SHOPPING LIST') {
        addingToShopList(e);
        bookInfo.style.height = '501px';
        addToShoppingListBtn.innerHTML = 'Remove from shopping list';
        addToShoppingListBtn.nextElementSibling.innerHTML =
          'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
      } else {
        bookInfo.style.height = '465px';
        addToShoppingListBtn.innerHTML = 'ADD TO SHOPPING LIST';
        addToShoppingListBtn.nextElementSibling.innerHTML = '';
        removingBookFromShoppingList(e);
      }
    });
  });
}

import { fetchingByBook } from './apiService';
import amazon from '../images/amazon.png';
import appleBooks from '../images/apple-books.png';
import bookShop from '../images/book-shop.png';
import addingToShopList from './shoppingListService';

export default function onBookClick(e) {
  console.log('onBookClick=>', e.currentTarget);
  fetchingByBook(e.currentTarget.dataset.id).then(book => {
    const bookInfo = document.querySelector('.container-modal-fav');
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
                    <button type="submit" class="choice-btn" data-id="${book._id}">ADD TO SHOPPING LIST</button>`;
    bookInfo.insertAdjacentHTML('beforeend', markup);
    const modal = document.querySelector('[data-modal]');
    modal.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
    const addToShoppingListBtn = document.querySelector('.choice-btn');
    addToShoppingListBtn.addEventListener('click', addingToShopList);
  });
}

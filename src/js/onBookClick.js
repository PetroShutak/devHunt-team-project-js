import { fetchingByBook } from './apiService';

export default function onBookClick(e) {
  console.log('onBookClick=>', e.currentTarget);
  fetchingByBook(e.currentTarget.dataset.id).then(book => {
    const bookInfo = document.querySelector('.container-modal-fav');
    bookInfo.innerHTML = '';
    const markup = `<img
                        srcset="/images/Rectangle3x@320 3x"
                        src="${book.book_image}"
                        alt="${book.title}"
                    />
                    <div class="description-info">
                        <h2 class="title-name">${book.title}</h2>
                        <h3 class="title-author">${book.author}</h3>
                        <p class="description-book">${book.description}</p>
                        <ul class="shop-book">
                        <li class="name-shop-book">
                            <img
                            src="/images/amazon.png"
                            alt="logo Amazon"
                            width="62"
                            height="19"
                            />
                        </li>
                        <li class="name-shop-book">
                            <img
                            src="/images/apple-books.png"
                            alt="logo Yellow shop"
                            width="33"
                            height="32"
                            />
                        </li>
                        <li class="name-shop-book">
                            <img
                            src="/images/book-shop.png"
                            alt="logo Dark shop"
                            width="38"
                            height="36"
                            />
                        </li>
                        </ul>
                    </div>
                    <button type="submit" class="choice-btn">ADD TO SHOPPING LIST</button>`;
    bookInfo.insertAdjacentHTML('beforeend', markup);
    const modal = document.querySelector('[data-modal]');
    modal.classList.remove('is-hidden');
  });
}

export function createBookCard(book) {
  return `  <a class="gallery-book-link" href="">
              <div class="gallery-book-card">
                <img class="gallery-book-cover" src="${book.book_image}"></img>
                <p class="gallery-book-name">${book.title}</p>
                <p class="gallery-author">${book.author}</p>
              </div>
            </a>`;
}

export function createHomeBookCard(book) {
  return `  <a class="gallery-book-home-link" href="">
              <div class="gallery-book-card">
                <img class="gallery-book-cover" src="${book.book_image}"></img>
                <p class="gallery-book-name">${book.title}</p>
                <p class="gallery-author">${book.author}</p>
              </div>
            </a>`;
}

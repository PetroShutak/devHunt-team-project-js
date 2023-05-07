// Different markup for home page and for category filtered Page due to CSS issues.
export function createBookCard(book) {
  return `  <a class="gallery-book-link" href="">
              <div class="gallery-book-card">
              <div class="gallery-book-cover" style="background-image: url('${book.book_image}')"></div>
                <p class="gallery-book-name">${book.title}</p>
                <p class="gallery-author">${book.author}</p>
              </div>
            </a>`;
}

// Different markup for Home Page and for Category-filtered Page due to CSS issues.
export function createHomeBookCard(book) {
  return `  <a class="gallery-book-home-link" href="">
              <div class="gallery-book-card">
                <div class="gallery-book-cover" style="background-image: url('${book.book_image}')"></div>
                <p class="gallery-book-name">${book.title}</p>
                <p class="gallery-author">${book.author}</p>
              </div>
            </a>`;
}

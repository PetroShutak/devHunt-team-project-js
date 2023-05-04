function creatingMainMarkup(data) {
  return data
    .map(card => {
      return `<a class="gallery-link" href="">
                    <h2>Best Sellers <span>Books</span></h2>
                    <ul class="results">
                        <li class="result">
                        <h3 class="category">Category</h3>
                        <img src="" alt="" />
                        <p class="name">Name</p>
                        <p class="author">Author</p>
                        </li>
                    </ul>
                </a>`;
    })
    .join(' ');
}

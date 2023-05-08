import axios from 'axios';

export async function fetchingByCategory(query) {
  console.log('Fetching by category');
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${query}`
    );
    return response.data;
  } catch (error) {
    console.log('catch error', error);
  }
}

export async function fetchingTopBooks() {
  console.log('Fetching top books');
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/top-books`
    );
    return response.data;
  } catch (error) {
    console.log('catch error', error);
  }
}

export async function fetchingCategories() {
  console.log('Fetching categories');
  try {
    const response = await axios.get(
      'https://books-backend.p.goit.global/books/category-list'
    );
    return response.data;
  } catch (error) {
    console.log('catch error', error);
  }
}

export async function fetchingByBook(id) {
  console.log('Fetching book by ID');
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/${id}`
    );
    return response.data;
  } catch (error) {
    console.log('catch error', error);
  }
}

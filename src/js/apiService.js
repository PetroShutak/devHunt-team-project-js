import axios from 'axios';

export async function fetchingByCategory(query) {
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
  console.log('fetching Top Books =>');
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/top-books`
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('catch error', error);
  }
}

export async function fetchingCategories() {
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
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/${id}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('catch error', error);
  }
}

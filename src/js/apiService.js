import axios from 'axios';
import {spinnerStart, spinnerStop, spinnerStartForCategories, spinerStopForCategories} from './spin';

export async function fetchingByCategory(query) {
  // console.log('Fetching by category');
  try {
    spinnerStartForCategories();
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${query}`
    );
    spinerStopForCategories();
    return response.data;
  } catch (error) {
    console.log('catch error', error);
  }
}

export async function fetchingTopBooks() {
  // console.log('Fetching top books');
  try {
    spinnerStart();
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/top-books`
    );
    spinnerStop();
    return response.data;
  } catch (error) {
    console.log('catch error', error);
  }
}

export async function fetchingCategories() {
  // console.log('Fetching categories');
  try {
    spinnerStartForCategories();
    const response = await axios.get(
      'https://books-backend.p.goit.global/books/category-list'
    );
    spinerStopForCategories();
    return response.data;
  } catch (error) {
    console.log('catch error', error);
  }
}

export async function fetchingByBook(id) {
  // console.log('Fetching book by ID');
  try {
    spinnerStart();
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/${id}`
    );
    spinnerStop();
    return response.data;
  } catch (error) {
    console.log('catch error', error);
  }
}

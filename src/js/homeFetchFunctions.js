import axios from 'axios';
import Notiflix from 'notiflix';

export async function fetchingByCategory(query) {
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${query}`
    );
    if (!response) {
      Notiflix.Notify("Sorry, we didn't find anything. Try another category.");
      return;
    }
    return response.data;
  } catch (error) {
    console.log('catch error', error);
  }
}

export async function fetchingTopBooks() {
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/top-books`
    );
    if (!response) {
      Notiflix.Notify("Some categories weren't found.");
      return;
    }
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
    if (!response) {
      Notiflix.Notify("Some categories weren't found.");
      return;
    }
    return response.data;
  } catch (error) {
    console.log('catch error', error);
  }
}

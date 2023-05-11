import { register, login } from './authApi';
const openModalButton = document.querySelector('.js-modal-autoriz-open');
const modalBackdrop = document.querySelector('.heder-backdrop');
const closeModalButton = document.querySelector('.js-modal-autoriz-close');
const signIn = document.querySelector('.header-form-btn');

openModalButton.addEventListener('click', () => {
  modalBackdrop.classList.remove('is-hidden');
});

closeModalButton.addEventListener('click', () => {
  modalBackdrop.classList.add('is-hidden');
});

signIn.addEventListener('click', register);

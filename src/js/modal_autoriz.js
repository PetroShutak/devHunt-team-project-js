import { createUserWithEmailAndPassword } from './authApi';
const openModalButton = document.querySelector('.js-modal-autoriz-open');
const modalBackdrop = document.querySelector('.heder-backdrop');
const closeModalButton = document.querySelector('.js-modal-autoriz-close');
const signIn = document.querySelector('.header-form-btn');
const formAuth = document.getElementById('header-form-auth');

openModalButton.addEventListener('click', () => {
  modalBackdrop.classList.remove('is-hidden');
});

closeModalButton.addEventListener('click', () => {
  modalBackdrop.classList.add('is-hidden');
});

formAuth.addEventListener('submit', authUser);

function authUser(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const name = document.getElementById('full_name').value;
  console.log(email, password);
  register(email, password);
}

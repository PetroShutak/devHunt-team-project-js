const openModalButton = document.querySelector('.js-modal-autoriz-open');
const modalBackdrop = document.querySelector('.heder-backdrop');
const modalAutoriz = document.querySelector('.js-modal-autoriz');

openModalButton.addEventListener('click', () => {
  modalBackdrop.classList.remove('is-hidden');
  modalAutoriz.classList.remove('is-hidden');
});
const closeModalButton = document.querySelector('.js-modal-autoriz-close');

closeModalButton.addEventListener('click', () => {
  modalBackdrop.classList.add('is-hidden');
  modalAutoriz.classList.add('is-hidden');
});

modalBackdrop.addEventListener('click', () => {
  modalBackdrop.classList.add('is-hidden');
  modalAutoriz.classList.add('is-hidden');
});
console.log(openModalButton);



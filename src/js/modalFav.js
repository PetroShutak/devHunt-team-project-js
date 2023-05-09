(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  // refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  // escape on esc click
  document.addEventListener('keydown', onEscPress);

  function onEscPress(e) {
    if (e.code === 'Escape') {
      //keycode is an Integer, not a String
      refs.modal.classList.add('is-hidden');
      document.removeEventListener('keydown', onEscPress);
    }
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.style.overflow = '';
  }
})();

// document.addEventListener('DOMContentLoaded', function() {
//    var modalButtons = document.querySelectorAll('.js-open-modal'),
//        overlay      = document.querySelector('#overlay-modal'),
//        closeButtons = document.querySelector('.js-modal-close');
   
   
//    modalButtons.forEach(function(item){
      
//       item.addEventListener('click', function(e) {
         
//          e.preventDefault();
//          var modalId = this.getAttribute('data-modal'),
//              modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
         
//          modalElem.classList.add('active');
//          overlay.classList.add('active');
//       }); // end click
//    }); // end foreach
// }); // end ready

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
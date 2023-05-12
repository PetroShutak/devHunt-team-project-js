// JS for rendered list command
import { teamMembers } from './team_info';

const markupTeamInfo = teamMembers.reduce((acc, item) => {
  const { memberName, photo, github, iconGit, linkedIn, iconLink, width, height } = item;

  return (acc += ` <li class="employees-card">
  <img class="employees-img"
    src="${photo}"
    alt="${memberName}"
    width="${width}"
    height="${height}"
  />
  <h3 class="employees-name">${memberName}</h3>
  <ul class="social-list">
    <li class="social-list-itam">
      <a href="${github}" class="social-list-link" target="_blank">
        <svg class="social-list-icon">
          <use href="${iconGit}"></use>
        </svg>
      </a>
    </li>
    <li class="social-list-itam">
      <a href="${linkedIn}" class="social-list-link" target="_blank">
        <svg class="social-list-icon">
          <use href="${iconLink}"></use>
        </svg>
      </a>
    </li>
  </ul>
</li>`);
}, '');

const team = document.querySelector('.employees-item');
team.insertAdjacentHTML('afterbegin', markupTeamInfo);



// JS for open & close modal window
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-command]"),
    closeModalBtn: document.querySelector("[data-modal-close-command]"),
    modal: document.querySelector("[data-modal-command]"),
  };

  document.addEventListener('keydown', onEscPress);

  function onEscPress(e) {
    if (e.code === 'Escape') {
      refs.modal.classList.add('is-hidden');
      document.removeEventListener('keydown', onEscPress);
    }
  }

  refs.openModalBtn.addEventListener("click", toggleModal);
  // refs.closeModalBtn.addEventListener("click", toggleModal);


  refs.modal.addEventListener('click', closeModalOnBackdropClick);
  
  function closeModalOnBackdropClick(e) {
    refs.modal.classList.add('is-hidden');
    if (e.target !== e.currentTarget) {
      return;
    }
    // toggleModal();
  }

  function toggleModal(e) {
    e.preventDefault();
    refs.modal.classList.toggle('is-hidden');
    document.body.style.overflow = document.body.style.overflow === 'hidden' ? '' : 'hidden';
  }
  
})();
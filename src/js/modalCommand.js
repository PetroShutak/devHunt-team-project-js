import { teamMembers } from './team_info';
import no_photo from '../img_command_photo/no_photo.jpg';
console.log(teamMembers);

const markupTeamInfo = teamMembers.reduce((acc, item) => {
  const { memberName, photo, github, linkedIn } = item;

  return (acc += ` <li class="employees-card">
  <img
    src="${photo}"
    alt="${memberName}"
    width="40"
    height="60"
  />
  <h3 class="employees-name">${memberName}</h3>
  <ul class="social-list">
    <li class="social-list-itam">
      <a href="${github}" class="social-list-link">
        <svg class="social-list-icon" width="16" height="16">
          <use href="../images/sprite.svg#icon-github"></use>
        </svg>
      </a>
    </li>
    <li class="social-list-itam">
      <a href="${linkedIn}" class="social-list-link">
        <svg class="social-list-icon" width="16" height="16">
          <use href="../images/sprite.svg#icon-linkedin"></use>
        </svg>
      </a>
    </li>
  </ul>
</li>`);
}, '');

const team = document.querySelector('.employees-item');
team.insertAdjacentHTML('beforebegin', markupTeamInfo);

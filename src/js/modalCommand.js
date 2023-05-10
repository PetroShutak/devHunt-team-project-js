import { teamMembers } from './team_info';

const markupTeamInfo = teamMembers.reduce((acc, item) => {
  const { memberName, photo, github, linkedIn, width, height } = item;

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
      <a href="${github}" class="social-list-link">
        <svg class="social-list-icon" width="24" height="24">
          <use href="../images/sprite.svg#icon-github"></use>
        </svg>
      </a>
    </li>
    <li class="social-list-itam">
      <a href="${linkedIn}" class="social-list-link">
        <svg class="social-list-icon" width="24" height="24">
          <use href="../images/sprite.svg#icon-linkedin"></use>
        </svg>
      </a>
    </li>
  </ul>
</li>`);
}, '');

const team = document.querySelector('.employees-item');
team.insertAdjacentHTML('beforebegin', markupTeamInfo);

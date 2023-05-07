import found1 from '../img/01-found-1.png';
import found1x from '../img/01-found-2.png';
import found2 from '../img/02-found-1.png';
import found2x from '../img/02-found-2.png';
import found3 from '../img/03-found-1.png';
import found3x from '../img/03-found-2.png';
import found4 from '../img/04-found-1.png';
import found4x from '../img/04-found-2.png';
import found5 from '../img/05-found-1.png';
import found5x from '../img/05-found-2.png';
import found6 from '../img/06-found-1.png';
import found6x from '../img/06-found-2.png';
import found7 from '../img/07-found-1.png';
import found7x from '../img/07-found-2.png';
import found8 from '../img/08-found-1.png';
import found8x from '../img/08-found-2.png';
import found9 from '../img/09-found-1.png';
import found9x from '../img/09-found-2.png';

function generateDonateFundsMarkup(donateFunds) {
  const isRetina = window.devicePixelRatio > 1.1; // Check if user has a retina display

  const markup = donateFunds
    .map((fund, index) => {
      const foundIndex = String(index + 1).padStart(2, '0');
      // const foundImage = isRetina ? fund.retinaImg : fund.img;
      return `
        <li class="donate-fund">
          <span class="donate-index">${foundIndex}</span>
          <a href="${fund.url}" target="_blank" class='donate-item-link' crossorigin="anonymous" rel="noopener noreferrer nofollow" aria-label="${fund.title}">
          <picture>
          <source srcset="${fund.img} 1x, ${fund.retinaImg} 2x" type="image/png" />
          <img class="donate-img" src="${fund.img}" alt="${fund.title}" loading="lazy">
          </picture>

          </a>
        </li>
      `;
    })
    .join('');

  return markup;
}

const donateFunds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: found1,
    retinaImg: found1x,
  },

  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: found2,
    retinaImg: found2x,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: found3,
    retinaImg: found3x,
  },
  {
    title: 'International Medical   Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: found4,
    retinaImg: found4x,
  },
  {
    title: 'Medicins Sans   Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: found5,
    retinaImg: found5x,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: found6,
    retinaImg: found6x,
  },
  {
    title: 'Action against   hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: found7,
    retinaImg: found7x,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: found8,
    retinaImg: found8x,
  },
  {
    title: 'Serhiy Prytula Charity   Foundation',
    url: 'https://prytulafoundation.org/en',
    img: found9,
    retinaImg: found9x,
  },
];

const container = document.querySelector('.donate-funds-list');
// container.innerHTML = generateDonateFundsMarkup(donateFunds);
container.insertAdjacentHTML(
  'beforeend',
  generateDonateFundsMarkup(donateFunds)
);

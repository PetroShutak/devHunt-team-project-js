function generateDonateFundsMarkup(donateFunds) {
  const isRetina = window.devicePixelRatio > 1; // Check if user has a retina display

  const markup = donateFunds
    .map((fund, index) => {
      const foundIndex = String(index + 1).padStart(2, '0');
      const foundImage = isRetina ? fund.retinaImg : fund.img;
      return `
        <li class="donate-fund">
          <span class="donate-index">${foundIndex}</span>
          <a href="${fund.url}" target="_blank" class='donate-item-link'>
            <img class="donate-img" src="${foundImage}" alt="${fund.title}">
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
    img: './img/01-found-1.png',
    retinaImg: './img/01-found-2.png',
  },

  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: './img/02-found-1.png',
    retinaImg: './img/02-found-2.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: './img/03-found-1.png',
    retinaImg: './img/03-found-2.png',
  },
  {
    title: 'International Medical   Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: './img/04-found-1.png',
    retinaImg: './img/04-found-2.png',
  },
  {
    title: 'Medicins Sans   Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: './img/05-found-1.png',
    retinaImg: './img/05-found-2.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: './img/06-found-1.png',
    retinaImg: './img/06-found-2.png',
  },
  {
    title: 'Action against   hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: './img/07-found-1.png',
    retinaImg: './img/07-found-2.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: './img/08-found-1.png',
    retinaImg: './img/08-found-2.png',
  },
  {
    title: 'Serhiy Prytula Charity   Foundation',
    url: 'https://prytulafoundation.org/en',
    img: './img/09-found-1.png',
    retinaImg: './img/09-found-2.png',
  },
];

const container = document.querySelector('.donate-funds-list');
container.innerHTML = generateDonateFundsMarkup(donateFunds);

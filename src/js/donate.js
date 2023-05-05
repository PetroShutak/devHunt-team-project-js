function generateDonateFundsMarkup(donateFunds) {
  const markup = donateFunds
    .map(fund => {
      return `
      <li class="donate-fund">
        <a href="${fund.url}" target="_blank">
          <img class="grayscale" src="${fund.img}" alt="${fund.title}">
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
    img: '../donate-images/image 3.png',
    // ../donate-images/image 3.png
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: null,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: '../donate-images/unaited24_1x.png',
  },
  {
    title: 'International Medical   Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: null,
  },
  {
    title: 'Medicins Sans   Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: null,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: null,
  },
  {
    title: 'Action against   hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: null,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: null,
  },
  {
    title: 'Serhiy Prytula Charity   Foundation',
    url: 'https://prytulafoundation.org/en',
    img: null,
  },
];

const container = document.querySelector('.donate-funds-list');
container.innerHTML = generateDonateFundsMarkup(donateFunds);

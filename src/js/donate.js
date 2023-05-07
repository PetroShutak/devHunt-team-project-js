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
            <img class="donate-img" src="${foundImage}" alt="${fund.title}" type="image/png">
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
    img: '/images/donate/sc.png',
    retinaImg: '/images/donate/sc@2x.png',
  },

  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: '/images/donate/ph.png',
    retinaImg: '/images/donate/ph@2x.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: '/images/donate/u24.png',
    retinaImg: '/images/donate/u24@2x.png',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: '/images/donate/imc.png',
    retinaImg: '/images/donate/imc@2x.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: '/images/donate/msf.png',
    retinaImg: '/images/donate/msf@2x.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: '/images/donate/rzm.png',
    retinaImg: '/images/donate/rzm@2x.png',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: '/images/donate/aah.png',
    retinaImg: '/images/donate/aah@2x.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: '/images/donate/wv.png',
    retinaImg: '/images/donate/wv@2x.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: '/images/donate/spcf.png',
    retinaImg: '/images/donate/spcf@2x.png',
  },
];

const container = document.querySelector('.donate-funds-list');
container.innerHTML = generateDonateFundsMarkup(donateFunds);

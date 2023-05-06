function generateDonateFundsMarkup(donateFunds) {
  const markup = donateFunds
    .map((fund, index) => {
      const foundIndex = String(index + 1).padStart(2, '0');
      return `
        <li class="donate-fund">
          <span class="donate-index">${foundIndex}</span>
          <a href="${fund.url}" target="_blank" class = 'donate-item-link'>
            <img  class="donate-img" src="${fund.img}" alt="${fund.title}">
          </a>
        </li>
      `;
    })
    .join('');

  return markup;
}

/* <img src="${fund.img}"

          alt="${fund.title}"></img> */

const donateFunds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: '../images/donate/1.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: '../images/donate/2.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: '../images/donate/3.png',
    //     <picture>
    //   <source srcset="../donate-images/united24_1x.webp 1x, ../donate-images/united24_2x.webp 2x" type="image/webp" />
    //   <source srcset="../donate-images/united24_1x.png 1x, ../donate-images/united24_2x.png 2x" type="image/jpeg" />
    //   <img src="../donate-images/united24_1x.png" alt="Кіт" />
    // </picture>
  },
  {
    title: 'International Medical   Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: '../images/donate/4.png',
  },
  {
    title: 'Medicins Sans   Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: '../images/donate/5.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: '../images/donate/6.png',
  },
  {
    title: 'Action against   hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: '../images/donate/7.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: '../images/donate/8.png',
  },
  {
    title: 'Serhiy Prytula Charity   Foundation',
    url: 'https://prytulafoundation.org/en',
    img: '../images/donate/9.png',
  },
];

const container = document.querySelector('.donate-funds-list');
container.innerHTML = generateDonateFundsMarkup(donateFunds);

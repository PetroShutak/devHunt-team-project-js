function generateDonateFundsMarkup(donateFunds) {
  const markup = donateFunds
    .map((fund, index) => {
      const foundIndex = String(index+1).padStart(2, '0');
      return `
        <li class="donate-fund">
          <span class="donate-index">${foundIndex}</span>
          <a href="${fund.url}" target="_blank">
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
    img: '../donate-images/save_the_children_1x.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: '../donate-images/project_hope_1x.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: '../donate-images/united24_1x.png',
    //     <picture>
    //   <source srcset="../donate-images/united24_1x.webp 1x, ../donate-images/united24_2x.webp 2x" type="image/webp" />
    //   <source srcset="../donate-images/united24_1x.png 1x, ../donate-images/united24_2x.png 2x" type="image/jpeg" />
    //   <img src="../donate-images/united24_1x.png" alt="Кіт" />
    // </picture>
  },
  {
    title: 'International Medical   Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: '../donate-images/int_med_corps_1x.png',
  },
  {
    title: 'Medicins Sans   Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: '../donate-images/med_sans_front_1x.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: '../donate-images/razom_1x.png',
  },
  {
    title: 'Action against   hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: '../donate-images/hunger_1x.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: '../donate-images/world_vision_1x.png',
  },
  {
    title: 'Serhiy Prytula Charity   Foundation',
    url: 'https://prytulafoundation.org/en',
    img: '../donate-images/prytula_1x.png',
  },
];

const container = document.querySelector('.donate-funds-list');
container.innerHTML = generateDonateFundsMarkup(donateFunds);

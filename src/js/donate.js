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
    img: '../images/donate/1.png',
    retinaImg: '../images/donate/1@2x.png',
  },

  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: '../images/donate/2.png',
    retinaImg: '../images/donate/2@2x.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: '../images/donate/3.png',
    retinaImg: '../images/donate/3@2x.png',
  },
  {
    title: 'International Medical   Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: '../images/donate/4.png',
    retinaImg: '../images/donate/4@2x.png',
  },
  {
    title: 'Medicins Sans   Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: '../images/donate/5.png',
    retinaImg: '../images/donate/5@2x.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: '../images/donate/6.png',
    retinaImg: '../images/donate/6@2x.png',
  },
  {
    title: 'Action against   hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: '../images/donate/7.png',
    retinaImg: '../images/donate/7@2x.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: '../images/donate/8.png',
    retinaImg: '../images/donate/8@2x.png',
  },
  {
    title: 'Serhiy Prytula Charity   Foundation',
    url: 'https://prytulafoundation.org/en',
    img: '../images/donate/9.png',
    retinaImg: '../images/donate/9@2x.png',
  },
];

const container = document.querySelector('.donate-funds-list');
container.innerHTML = generateDonateFundsMarkup(donateFunds);


// Button function
const donateButton = document.querySelector('.donate-button');
const donateButtonUp = document.querySelector('.donate-button-up');

 donateButton.addEventListener('click', function () {
   donateButton.style.display = 'none';
   donateButtonUp.style.display = 'block';
 });

 donateButtonUp.addEventListener('click', function () {
   donateButtonUp.style.display = 'none';
   donateButton.style.display = 'block';
 });
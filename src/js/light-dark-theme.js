// import logos from '../images/sprite.svg#icon-logo';
// import logos1 from '../images/sprite.svg#icon-logo-1';
const inputTheme = document.querySelector('.div-theme');
// const spanTheme = document.querySelector('.span-theme');
const switchTheme = document.querySelector('.label-them');

// v1
const body = document.querySelector('body');
let indexTheme = false;

inputTheme.addEventListener('change', () => {
  if (indexTheme) {
    indexTheme = false;
    localStorage.setItem('userTheme', 'light'); // запис теми в localStorage
    switchTheme.classList.remove('dark-theme-switch');
  } else {
    indexTheme = true;
    localStorage.setItem('userTheme', 'dark'); // запис теми в localStorage
    switchTheme.classList.add('dark-theme-switch');
  }

  currentTheme();
});

function currentTheme() {
  // зчитування зі сховища теми
  try {
    indexTheme = localStorage.getItem('userTheme') === 'dark' ? true : false;
  } catch (error) {
    indexTheme = false;
  }

  const logo = document.querySelector('.header-logo-icon');
  const logo1 = document.querySelector('.header-logo-icon1');
  const shopListTitle = document.querySelectorAll('.shopping-list-book-title');
  const shopListAbout = document.querySelectorAll('.shopping-list-book-about');
  const shopListHeader = document.querySelector('.shoping-list-header');
  const shoppingListText = document.querySelector('.shopping-list-text');

  // const burger = document.querySelector('.header-burger-icon');
  // const burger1 = document.querySelector('.header-burger-icon1');
  if (indexTheme) {
    body.classList.add('dark-theme');
    switchTheme.classList.add('dark-theme-switch');
    if (shopListHeader) {
      shopListHeader.classList.add('dark-theme');
      shoppingListText.classList.add('dark-theme');
    }
    for (let i = 0; i < shopListTitle.length; i++) {
      shopListTitle[i].classList.add('dark-theme');
      shopListAbout[i].classList.add('dark-theme');
    }

    // spanTheme.style.left = '20px';
    // logo.style.backgroundImage = `url(${logos})`;
    // logo.innerHTML = `<svg><use href="${logos1}"></use></svg>`;
    logo.style.width = '0px';
    logo1.style.width = '109px';
  } else {
    body.classList.remove('dark-theme');
    switchTheme.classList.remove('dark-theme-switch');
    if (shopListHeader) {
      shopListHeader.classList.remove('dark-theme');
      shoppingListText.classList.remove('dark-theme');
    }
    for (let i = 0; i < shopListTitle.length; i++) {
      shopListTitle[i].classList.remove('dark-theme');
      shopListAbout[i].classList.remove('dark-theme');
    }
    // spanTheme.style.left = '2px';
    // logo.style.backgroundImage = `url(${logos1})`
    // logo.innerHTML = `<svg><use href="${logos}"></use></svg>`;
    logo1.style.width = '0px';
    logo.style.width = '109px';
  }
}

currentTheme();

// виділення сторінок при перемиканні
const headerNavLinks = document
  .querySelector('.header-nav-item')
  .querySelectorAll('a');
if (document.querySelector('.home-page') === null) {
  for (let index = 0; index < headerNavLinks.length; index++) {
    headerNavLinks[index].classList.toggle('heder-active');
  }
}

// const nameShopBookLinks = document.querySelector('.shop-book').querySelectorAll('.name-shop-book');
// if (nameShopBookLinks.length > 0) {
//   for (let index = 0; index < nameShopBookLinks.length; index++) {
//     if (nameShopBookLinks[index].getAttribute('alt') === "logo Amazon") {
//       // зміна картинки ../images/amazon-light-2x.png і ../images/amazon-light.png
//     }

//     break;
//   }
// }

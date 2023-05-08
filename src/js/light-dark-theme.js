
const inputTheme = document.querySelector('.div-theme');
const spanTheme = document.querySelector('.span-theme');
const logo = document.querySelector('.header-logo-icon');

// v1
const body = document.querySelector('body');
let indexTheme = false;

inputTheme.addEventListener('change', () => {
  if (indexTheme) {
    indexTheme = false;
    localStorage.setItem('userTheme', 'light'); // запис теми в localStorage
  } else {
    indexTheme = true;
    localStorage.setItem('userTheme', 'dark'); // запис теми в localStorage
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

  if (indexTheme) {
    body.classList.add('dark-theme');
    spanTheme.style.left = '20px';
    logo.innerHTML = '<use href="/images/sprite.svg#icon-logo1"></use>';
  } else {
    body.classList.remove('dark-theme');
    spanTheme.style.left = '2px';
    logo.innerHTML = '<use href="/images/sprite.svg#icon-logo"></use>';
  }
}

currentTheme();

// виділення сторінок при перемиканні
const headerNavLinks = document.querySelector('.header-nav-item').querySelectorAll('a');
if (document.querySelector('.home-page') === null) {
  for (let index = 0; index < headerNavLinks.length; index++) {
    headerNavLinks[index].classList.toggle("heder-active");    
  }
}

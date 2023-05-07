
// const nav = document.querySelector('.header-nav');
// nav.insertAdjacentHTML('afterend',
//   `<div class="div-theme">
//     <input type="checkbox" name="theme-switcher" id="input-theme" hidden>
//     <label for="input-theme" class="label-them">
//       <span class="span-theme"></span>
//     </label>
//   </div>`
// )
const inputTheme = document.querySelector('.div-theme');
const spanTheme = document.querySelector('.span-theme');

// v1
const body = document.querySelector('body');
let indexTheme = false;

inputTheme.addEventListener('change', () => {
  if (indexTheme) {
    // spanTheme.style.left = '2px';
    indexTheme = false;
    localStorage.setItem('userTheme', 'light'); // запис теми в localStorage
  } else {
    // spanTheme.style.left = '20px';
    indexTheme = true;
    localStorage.setItem('userTheme', 'dark'); // запис теми в localStorage
  }
  
  currentTheme();
});

function currentTheme() {
  // зчитування зі сховища теми
  // let indexTheme = false;
  try {
    indexTheme = localStorage.getItem('userTheme') === 'dark' ? true : false;
  } catch (error) {
    indexTheme = false;
  }

  if (indexTheme) {
    body.classList.add('dark-theme');
    spanTheme.style.left = '20px';
  } else {
    body.classList.remove('dark-theme');
    spanTheme.style.left = '2px';
  }
}

currentTheme();

// // v2
// const themeElementsList = [
//   {
//     className: 'body',
//     elementProperty: 'background-color',
//     value: ['#D0D0D0', '#202024'], // [0] - light theme; [1] - dark theme
//   },
//   {
//     className: '.header',
//     elementProperty: 'background',
//     value: ['#FFFFFF', '#111111'],
//   },
//     // {  // logo
//   //   className: '',
//   //   elementProperty: 'background-image',
//   //   value: ['url()','url()'],
//   // },
//   { // theme button
//     className: '.label-them',
//     elementProperty: 'background',
//     value: [
//       'linear-gradient(180deg, #4F2EE8 0%, #$DCDCDC 100%)',
//       'linear-gradient(180deg, #4F2EE8 0%, #686868 100%)',
//     ],
//   },
//   {  // menu
//     className: '.menu-category',
//     elementProperty: 'color',
//     value: ['rgba(17,17,17,0.6','rgba(255,255,255,0.6'],
//   },  
//   {  // gallery
//     className: '.gallery-title',
//     elementProperty: 'color',
//     value: ['#111111', '#FFFFFF'],
//   },
//   {  // gallery
//     className: '.gallery-book-name',
//     elementProperty: 'color',
//     value: ['#111111', '#FFFFFF'],
//   },
// ];

// let indexTheme = 0;

// inputTheme.addEventListener('change', () => {
//   if (indexTheme === 1) {
//     indexTheme = 0;
//     localStorage.setItem('userTheme', 'light');
//   } else {
//     indexTheme = 1;
//     localStorage.setItem('userTheme', 'dark'); // запис теми в localStorage
//   }

//   themeSetting();
//   // themeElementsList.forEach(item => {
//   //   try {
//   //     const element = document.querySelectorAll(item.className);
//   //     element.forEach(el => {
//   //       el.style[item.elementProperty] = item.value[+indexTheme];
//   //     })
//   //     // element.style[el.elementProperty] = el.value[+indexTheme];
//   //   } catch(err) {
//   //     console.log(err);
//   //   }
//   // });
// });

// body.addEventListener('click', () => themeSetting());

// body.addEventListener('change', () => themeSetting());

// function themeSetting() {
//   spanTheme.style.left = (indexTheme === 0) ? '2px' : '20px';  

//   themeElementsList.forEach(item => {
//     try {
//       const element = document.querySelectorAll(item.className);
//       element.forEach(el => {
//         el.style[item.elementProperty] = item.value[+indexTheme];
//       })
//       // element.style[el.elementProperty] = el.value[+indexTheme];
//     } catch(err) {
//       console.log(err);
//     }
//   });
// }

// function currentTheme() {
//   // зчитування зі сховища теми
//   try {
//     indexTheme = localStorage.getItem('userTheme') === 'dark' ? 1 : 0;
//   } catch (error) {
//     indexTheme = 0;
//   }
//   themeSetting();
// }

// currentTheme();


// // galleryTheme.addEventListener('mousemove', 
// //   _.debounce(() => {
// //     if (indexTheme === 1) {
        
// //     } else {
      
// //     }

// //   }, 300)
// // );

// // const settings = {
// //   theme: "dark",
// //   isAuthenticated: true,
// //   options: [1, 2, 3],
// // };

// // localStorage.setItem("settings", JSON.stringify(settings));

// // localStorage.setItem("ui-theme", "dark");

// // const theme = localStorage.getItem("ui-theme");
// // console.log(theme); // "dark"

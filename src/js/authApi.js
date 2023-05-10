// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC8MReEemS7JV9qw93b0eXUMnIqA3WPdqE",
//   authDomain: "devhunt-team-project-js-b2975.firebaseapp.com",
//   projectId: "devhunt-team-project-js-b2975",
//   storageBucket: "devhunt-team-project-js-b2975.appspot.com",
//   messagingSenderId: "824663387440",
//   appId: "1:824663387440:web:48fb6e7a6edb3c511becf5"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

import { getAuthForm } from './authForm';
console.log(typeof getAuthForm());
const authform = document.querySelector('.footer-link');
console.log(authform);
const mrkp = getAuthForm();
authform.insertAdjacentHTML('afterend', mrkp);

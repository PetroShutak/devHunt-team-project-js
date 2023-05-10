// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDU3ZZnnvRlfSMkQ6WJyAlYwDghi9yifFE",
//   authDomain: "devhunt-team-project-js.firebaseapp.com",
//   projectId: "devhunt-team-project-js",
//   storageBucket: "devhunt-team-project-js.appspot.com",
//   messagingSenderId: "663743819564",
//   appId: "1:663743819564:web:9792cca23dd0300a444689",
//   measurementId: "G-Z8F0N4EJHB"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import { getAuthForm } from './authForm';
console.log(typeof getAuthForm());
const authform = document.querySelector('.footer-link');
console.log(authform);
const mrkp = getAuthForm();
authform.insertAdjacentHTML('afterend', mrkp);

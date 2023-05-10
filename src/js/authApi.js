import { getAuthForm } from '../js/authForm';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

getAuthForm();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC8MReEemS7JV9qw93b0eXUMnIqA3WPdqE',
  authDomain: 'devhunt-team-project-js-b2975.firebaseapp.com',
  projectId: 'devhunt-team-project-js-b2975',
  storageBucket: 'devhunt-team-project-js-b2975.appspot.com',
  messagingSenderId: '824663387440',
  appId: '1:824663387440:web:48fb6e7a6edb3c511becf5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log(app);
console.log(auth);
const email = 'wee@aaa.ddd';
const password = 'aaaaaaaa';

//CREATE USER

// createUserWithEmailAndPassword(auth, email, password)
//   .then(userCredential => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch(error => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

//SIGN IN

signInWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

// IF USER AUTHORISED

// onAuthStateChanged(auth, user => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

// SIGN OUT

// signOut(auth)
//   .then(() => {
//     // Sign-out successful.
//   })
//   .catch(error => {
//     // An error happened.
//   });

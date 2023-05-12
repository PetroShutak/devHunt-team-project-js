import { firebaseConfig } from './firebaseSettings';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { getDatabase, set, ref, update } from 'firebase/database';
import { Notify } from 'notiflix';

const refs = {
  openMdlBtn: document.querySelector('.js-modal-autoriz-open'),
  mdlBackdrop: document.querySelector('.heder-backdrop'),
  closeMdlBtn: document.querySelector('.js-modal-autoriz-close'),
  signInBtn: document.querySelector('.header-form-btn'),
  formAuth: document.getElementById('header-form-auth'),
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

refs.closeMdlBtn.addEventListener('click', () => {
  modalBackdrop.classList.remove('is-hidden');
});

refs.closeMdlBtn.addEventListener('click', () => {
  refs.mdlBackdrop.classList.add('is-hidden');
});

sighUp.addEventListener('click', e => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const username = document.getElementById('username').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;

      set(ref(database, 'users/' + user.uid), {
        username: username,
        email: email,
      });

      alert('user created!');
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      Notify.failure(`${error.message}`);
      // ..
    });
});

login.addEventListener('click', e => {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;

      const dt = new Date();
      update(ref(database, 'users/' + user.uid), {
        last_login: dt,
      });

      alert('User loged in!');
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      Notify.failure(`${error.message}`);
    });
});

const user = auth.currentUser;
onAuthStateChanged(auth, user => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    //bla bla bla
    // ...
  } else {
    // User is signed out
    // ...
    //bla bla bla
  }
});

logout.addEventListener('click', e => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      alert('user loged out');
    })
    .catch(error => {
      // An error happened.
      const errorCode = error.code;
      const errorMessage = error.message;

      Notify.failure(`${error.message}`);
    });
});

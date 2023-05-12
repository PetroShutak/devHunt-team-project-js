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
  signInRef: document.getElementById('sign-in-ref'),
  logout: document.getElementById('logout'),
  shopLst: document.getElementById('shoplst'),
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

refs.openMdlBtn.addEventListener('click', () => {
  refs.mdlBackdrop.classList.remove('is-hidden');
});

refs.closeMdlBtn.addEventListener('click', () => {
  refs.mdlBackdrop.classList.add('is-hidden');
});

//const user = auth.currentUser;

onAuthStateChanged(auth, user => {
  if (user) {
    refs.shopLst.classList.remove('visual-hidden');
    const uid = user.uid;
    console.log('Hello', uid);
  } else {
    refs.shopLst.classList.add('visual-hidden');
    console.log('BAD');
  }
});

refs.formAuth.addEventListener('submit', e => {
  e.preventDefault();
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
      Notify.success(`User ${username} was created`);
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      Notify.failure(`${error.message}`);
      // ..
    });
});

refs.signInRef.addEventListener('click', e => {
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
      refs.mdlBackdrop.classList.add('is-hidden');
      refs.mdlBackdrop.classList.add('is-hidden');
      Notify.info(`Hello my, friend ${user} `);
      // ...
    })
    .catch(error => {
      //const errorCode = error.code;
      //const errorMessage = error.message;

      Notify.failure(`${error.message}`);
    });
});

refs.logout.addEventListener('click', e => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      Notify.success('User loged out');
      refs.mdlBackdrop.classList.add('is-hidden');
      window.location.href = '../index.html';
    })
    .catch(error => {
      // An error happened.
      const errorCode = error.code;
      const errorMessage = error.message;

      Notify.failure(`${error.message}`);
    });
});

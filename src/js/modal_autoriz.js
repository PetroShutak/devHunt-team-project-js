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
  signIn: document.getElementById('signIn'),
  logout: document.getElementById('logout'),
  shopLst: document.getElementById('shoplst'),
  loginBtn: document.getElementById('loginBtn'),
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

refs.openMdlBtn.addEventListener('click', e => {
  if (!(e.target.innerText.toLowerCase() === 'log out')) {
    refs.mdlBackdrop.classList.remove('is-hidden');
    return;
  }
});

refs.closeMdlBtn.addEventListener('click', () => {
  refs.mdlBackdrop.classList.add('is-hidden');
});

refs.loginBtn.addEventListener('click', e => {
  if (e.target.innerText.toLowerCase() === 'log out') {
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
  }
});

//const user = auth.currentUser;

onAuthStateChanged(auth, user => {
  if (user) {
    refs.shopLst.classList.remove('visual-hidden');
    const uid = user.uid;
    refs.loginBtn.innerHTML = `Log out
    <svg class="header-icon arrow-to-right-sign" width="20" height="20">
      <use href="/images/sprite.svg#icon-arrow-narrow-right"></use>
    </svg>`;
    console.log('Hello', uid);
  } else {
    refs.shopLst.classList.add('visual-hidden');
    console.log('BAD');
  }
});

refs.formAuth.addEventListener('click', e => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const username = document.getElementById('username').value;

  if (e.target.innerText.toLowerCase() === 'sign in') {
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
  }
  //});

  if (e.target.innerText.toLowerCase() === 'sign up') {
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
        //Notify.info(`Hello my, friend ${user} `);
      })
      .catch(error => {
        //const errorCode = error.code;
        //const errorMessage = error.message;

        Notify.failure(`${error.message}`);
      });
  }
});

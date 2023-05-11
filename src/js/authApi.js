import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAhTPPhyjmYiVlxak4yke42Dy8ubiIpUkY',
  authDomain: 'devhunt-team-project-js-c262f.firebaseapp.com',
  databaseURL:
    'https://devhunt-team-project-js-c262f-default-rtdb.firebaseio.com',
  projectId: 'devhunt-team-project-js-c262f',
  storageBucket: 'devhunt-team-project-js-c262f.appspot.com',
  messagingSenderId: '435122609975',
  appId: '1:435122609975:web:059264b84e50ff17a384b2',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

createUserWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

export { createUserWithEmailAndPassword };

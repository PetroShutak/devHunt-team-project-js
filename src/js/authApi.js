//import { getAuthForm } from '../js/authForm';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// const mark = document.querySelector('.footer-book');
// mark.insertAdjacentHTML('afterend', getAuthForm());

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

console.log(app);
console.log(auth);
console.log(database);
export { register, login };
// Set up our register function
function register() {
  // Get all our input fields
  email = document.getElementById('email').value;
  password = document.getElementById('password').value;
  full_name = document.getElementById('full_name').value;
  // favourite_song = document.getElementById("favourite_song").value;
  // milk_before_cereal = document.getElementById("milk_before_cereal").value;

  // Validate input fields
  if (
    validate_email(email) === false ||
    validate_password(password) === false
  ) {
    alert('Email or Password is Outta Line!!');
    return;
    // Don't continue running the code
  }
  if (
    validate_field(full_name) === false ||
    validate_field(favourite_song) === false ||
    validate_field(milk_before_cereal) === false
  ) {
    alert('One or More Extra Fields is Outta Line!!');
    return;
  }

  // Move on with Auth
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      const user = auth.currentUser;

      // Add this user to Firebase Database
      const database_ref = database.ref();

      // Create User data
      const user_data = {
        email: email,
        full_name: full_name,
        // favourite_song: favourite_song,
        // milk_before_cereal: milk_before_cereal,
        last_login: Date.now(),
      };

      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data);

      // DOne
      alert('User Created!!');
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      const error_code = error.code;
      const error_message = error.message;

      alert(error_message);
    });
}

// Set up our login function
function login(email, password) {
  // Get all our input fields
  email = document.getElementById('email').value;
  password = document.getElementById('password').value;

  // Validate input fields
  if (
    validate_email(email) === false ||
    validate_password(password) === false
  ) {
    alert('Email or Password is Outta Line!!');
    return;
    // Don't continue running the code
  }

  auth
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      const user = auth.currentUser;

      // Add this user to Firebase Database
      const database_ref = database.ref();

      // Create User data
      const user_data = {
        last_login: Date.now(),
      };

      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data);

      // DOne
      alert('User Logged In!!');
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      const error_code = error.code;
      const error_message = error.message;

      alert(error_message);
    });
}

// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    // Email is good
    return true;
  } else {
    // Email is not good
    return false;
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_field(field) {
  if (field === null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
}

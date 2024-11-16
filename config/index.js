// Import the functions you need from the SDKs you need
import app from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBSjKFiPAB_LB11uA1ibP2cQJBOB2jbGds',
  authDomain: 'whatsapp-d2fb9.firebaseapp.com',
  databaseURL: 'https://whatsapp-d2fb9-default-rtdb.firebaseio.com',
  projectId: 'whatsapp-d2fb9',
  storageBucket: 'whatsapp-d2fb9.firebasestorage.app',
  messagingSenderId: '771408375685',
  appId: '1:771408375685:web:c5fbe3febcf0ef43889eec',
  measurementId: 'G-2K6GZJ9WVE',
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);

export default firebase;

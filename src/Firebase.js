import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCKYAJPUU7JGm6GMNEeLM7cRbT0yAV4Cn8",
    authDomain: "twitter-clone-a6ae8.firebaseapp.com",
    projectId: "twitter-clone-a6ae8",
    storageBucket: "twitter-clone-a6ae8.appspot.com",
    messagingSenderId: "180117449821",
    appId: "1:180117449821:web:44786ee7e910084916b1b4",
    measurementId: "G-62YM5T39D0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth()

  export {auth, db};
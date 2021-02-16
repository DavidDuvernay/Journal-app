import  firebase  from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBR8UApLEGBjl4TqpwmNLBSpprwJ1yjLOs",
    authDomain: "react-journal-app-ed51f.firebaseapp.com",
    projectId: "react-journal-app-ed51f",
    storageBucket: "react-journal-app-ed51f.appspot.com",
    messagingSenderId: "632902478601",
    appId: "1:632902478601:web:ea4a9056f0eb680b3c81d8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }
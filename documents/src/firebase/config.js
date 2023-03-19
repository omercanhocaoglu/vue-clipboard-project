import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyB4QLZXoHf78qMNRGEI6mlIPb1crJMMyUc",
    authDomain: "vue-thought-app.firebaseapp.com",
    projectId: "vue-thought-app",
    storageBucket: "vue-thought-app.appspot.com",
    messagingSenderId: "314361695905",
    appId: "1:314361695905:web:b0edcd1734d9cc808e2ae0"
  };
  firebase.initializeApp(firebaseConfig);
  
  const projectAuth = firebase.auth();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectFirestore, timestamp, projectAuth };
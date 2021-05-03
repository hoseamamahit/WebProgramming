import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBlgMfv2RN8c086mMcjR2EL4poliCstCtY",
    authDomain: "webpro-c8e40.firebaseapp.com",
    databaseURL: "https://webpro-c8e40-default-rtdb.firebaseio.com",
    projectId: "webpro-c8e40",
    storageBucket: "webpro-c8e40.appspot.com",
    messagingSenderId: "463298860966",
    appId: "1:463298860966:web:2109dce17ed034ad59a167"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
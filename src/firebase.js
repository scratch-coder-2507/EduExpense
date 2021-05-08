import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAGE0n4-sdnDwfi366D_K1KkKaZFo872vM",
    authDomain: "eduexpense.firebaseapp.com",
    projectId: "eduexpense",
    storageBucket: "eduexpense.appspot.com",
    messagingSenderId: "813450892657",
    appId: "1:813450892657:web:bed3ffdd3abf7e76ecd2d0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;
import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAjeNCEMi5bSwr5MQq528emzb1u2j5SEXM",
    authDomain: "testproject-ed87b.firebaseapp.com",
    databaseURL: "https://testproject-ed87b.firebaseio.com",
    projectId: "testproject-ed87b",
    storageBucket: "testproject-ed87b.appspot.com",
    messagingSenderId: "419864901798",
    appId: "1:419864901798:web:786bff4a9bf49d8540dc67",
    measurementId: "G-LSE0JKWS14"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth }
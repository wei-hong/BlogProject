import firebase from "firebase/app";
import database from "firebase/database";

const config = {
  apiKey: "AIzaSyDewtpi9AO6wra_IdHT2Yy7ozW0tbyoL7A",
  authDomain: "blog-db-46c86.firebaseapp.com",
  databaseURL: "https://blog-db-46c86.firebaseio.com",
  projectId: "blog-db-46c86",
  storageBucket: "blog-db-46c86.appspot.com",
  messagingSenderId: "716260782289",
  appId: "1:716260782289:web:05f1b45186ddb9ab44d5f0",
};
let firebaseCach;

export const getFirebase = () => {
  if (firebaseCach) {
    return firebaseCach;
  }

  firebase.initializeApp(config);
  firebaseCach = firebase;
  return firebase;
};

const firebase = require('firebase');


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn989g19ceZ9iTZbilNR839rkMu1GkWpM",
  authDomain: "api-raspberry-ab940.firebaseapp.com",
  projectId: "api-raspberry-ab940",
  storageBucket: "api-raspberry-ab940.appspot.com",
  messagingSenderId: "412672883261",
  appId: "1:412672883261:web:09d6eae96e04d037420854"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig); //initialize firebase app 
module.exports = { firebase }; //export the app
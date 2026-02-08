// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbscy0t9Mqv3NPp89WKJCfnaMrZM6S6Go",
  authDomain: "gk-crackers-007.firebaseapp.com",
  projectId: "gk-crackers-007",
  storageBucket: "gk-crackers-007.firebasestorage.app",
  messagingSenderId: "743958860251",
  appId: "1:743958860251:web:90ac8c399d27e977a2d7fe",
  measurementId: "G-PTSW5SQ7L6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
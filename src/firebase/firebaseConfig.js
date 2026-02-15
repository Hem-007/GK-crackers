// firebase/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbscy0t9Mqv3NPp89WKJCfnaMrZM6S6Go",
  authDomain: "gk-crackers-007.firebaseapp.com",
  projectId: "gk-crackers-007",
  storageBucket: "gk-crackers-007.firebasestorage.app",
  messagingSenderId: "743958860251",
  appId: "1:743958860251:web:90ac8c399d27e977a2d7fe",
  measurementId: "G-PTSW5SQ7L6"
};

const app = initializeApp(firebaseConfig);

// ✅ THIS LINE IS IMPORTANT
export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCoTeUOCNGZUD3zs5yEN9fWlyYPd_415sA",
    authDomain: "tcs-entry.firebaseapp.com",
    projectId: "tcs-entry",
    storageBucket: "tcs-entry.appspot.com",
    messagingSenderId: "1027790364225",
    appId: "1:1027790364225:web:2e6212e008d4955fa1b0c0",
    measurementId: "G-ZEE3X5GBM4",
  databaseURL:
    "https://tcs-entry-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


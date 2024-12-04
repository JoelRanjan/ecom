// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9nLrETDhoCKUmonFLEmS6GGzaIURxNCw",
  authDomain: "ecom-39f98.firebaseapp.com",
  projectId: "ecom-39f98",
  storageBucket: "ecom-39f98.firebasestorage.app",
  messagingSenderId: "413984661136",
  appId: "1:413984661136:web:ce98433bb41ad38adc0215",
  measurementId: "G-5323G94Z1L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

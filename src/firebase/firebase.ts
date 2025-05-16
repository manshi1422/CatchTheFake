// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm8badTf219CmlkK4VYLO4B9n5cMg7bJg",
  authDomain: "guessthefakegame.firebaseapp.com",
  projectId: "guessthefakegame",
  storageBucket: "guessthefakegame.firebasestorage.app",
  messagingSenderId: "904495291659",
  appId: "1:904495291659:web:e99127620f1578c90ad60e"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const db = getDatabase(app);
//  export {auth,app};
 export {auth,db};

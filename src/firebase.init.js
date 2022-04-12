// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkB545-Z2tc5rL1nXlRSgJAMma3_TAKj8",
  authDomain: "ema-john-simple-bfd4f.firebaseapp.com",
  projectId: "ema-john-simple-bfd4f",
  storageBucket: "ema-john-simple-bfd4f.appspot.com",
  messagingSenderId: "542664007394",
  appId: "1:542664007394:web:faca737e72a7f0a57a88bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvjRRxkuKsNJtdIUe_mbJkJEOEi8VG92w",
  authDomain: "email-password-authentic-f4fa3.firebaseapp.com",
  projectId: "email-password-authentic-f4fa3",
  storageBucket: "email-password-authentic-f4fa3.firebasestorage.app",
  messagingSenderId: "228502198099",
  appId: "1:228502198099:web:b862492fbdb1adaad333a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
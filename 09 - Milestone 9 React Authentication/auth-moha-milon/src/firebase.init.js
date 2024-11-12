// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHvjPPoyDHTFudldqa-cd6DtegOxRXBFY",
  authDomain: "auth-moha-milon-87b5f.firebaseapp.com",
  projectId: "auth-moha-milon-87b5f",
  storageBucket: "auth-moha-milon-87b5f.firebasestorage.app",
  messagingSenderId: "60733896049",
  appId: "1:60733896049:web:a5661175d1403c303632d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
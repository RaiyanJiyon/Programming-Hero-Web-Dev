// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqjVrBwKeHHqaGa86jnkUoJ69erfLHNQo",
  authDomain: "simple-firebase-2-91aa0.firebaseapp.com",
  projectId: "simple-firebase-2-91aa0",
  storageBucket: "simple-firebase-2-91aa0.firebasestorage.app",
  messagingSenderId: "343686635406",
  appId: "1:343686635406:web:4055209eda3251ca238edf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
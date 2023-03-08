// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7MwV8Gww1ko0rbaZOgYBEyu-eX4cSjpg",
  authDomain: "poker-champ-76c0e.firebaseapp.com",
  projectId: "poker-champ-76c0e",
  storageBucket: "poker-champ-76c0e.appspot.com",
  messagingSenderId: "640446135926",
  appId: "1:640446135926:web:4c471506a3059c1847a957",
  measurementId: "G-3VYY9FDK4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
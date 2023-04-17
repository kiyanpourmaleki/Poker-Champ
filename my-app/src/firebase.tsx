// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import {  getAuth, signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, signOut } 
  from "firebase/auth";
import { getFirestore, collection, addDoc } 
  from "firebase/firestore";
import { useNavigate } from "react-router";
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
const auth = getAuth(app);
const db = getFirestore(app);

// const logInWithEmailAndPassword = async (email: any, password: any) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//     const navigate = useNavigate();
//     navigate("/LandingPage");
//   } catch (err) {
//     console.error(err);
//   }
// };
// const registerWithEmailAndPassword = async (name: any, email: any, password: any) => {
//   try {
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     const user = res.user;
//     console.log(`signed in as ${user}`);
//     const navigate = useNavigate();
//     navigate("/LandingPage")
//     await addDoc(collection(db, "users"), {
//       uid: user.uid,
//       name,
//       authProvider: "local",
//       email,
//     });
//   } catch (error: any) {
//     // const errorCode = error.code;
//     // const errorMessage = error.message;
//     // console.log(errorCode, errorMessage);
//     console.error(error);
//     alert(error.message);
//   }
// };
const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  // logInWithEmailAndPassword,
  // registerWithEmailAndPassword,
  logout
};


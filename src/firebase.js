// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, doc, query, setDoc,where, orderBy, onSnapshot } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_S6g9SYVroAt_9dFqbOpizdLBiTnB2ag",
  authDomain: "port-18143.firebaseapp.com",
  projectId: "port-18143",
  storageBucket: "port-18143.firebasestorage.app",
  messagingSenderId: "859470540793",
  appId: "1:859470540793:web:f54b3506096475c4b25728",
  measurementId: "G-0XJ0Q397D5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db,auth, collection, addDoc, doc,where, query,setDoc, orderBy, onSnapshot,createUserWithEmailAndPassword,sendPasswordResetEmail, signInWithEmailAndPassword, signOut };
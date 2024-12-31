// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxUf9mPiUkJpu3K1mzKAOED774BEMNmq0",
  authDomain: "chess-auth-2cf46.firebaseapp.com",
  projectId: "chess-auth-2cf46",
  storageBucket: "chess-auth-2cf46.firebasestorage.app",
  messagingSenderId: "817378545641",
  appId: "1:817378545641:web:21a0d7910fc766ea904578",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

console.log("Firebase App Initialized:", app);
console.log("Auth Instance:", auth);
console.log("Firestore Instance:", db);

export { app, auth, db };

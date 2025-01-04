// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
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

// Initialize Firebase App
const app = initializeApp(firebaseConfig);
console.log("Firebase App Initialized:", app);

// Initialize Firebase Auth
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Auth Persistence set to local.");
  })
  .catch((error) => {
    console.error("Error setting auth persistence:", error);
  });

// Initialize Firestore
const db = getFirestore(app);
console.log("Firestore Instance Initialized:", db);

// Export Firebase instances
export { app, auth, db };

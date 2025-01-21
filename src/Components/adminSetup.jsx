// src/adminSetup.js
import { auth } from "../firebase/firebase"; // Firebase config file
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Firestore } from "firebase/firestore";
// Function to register an admin
export async function registerAdmin() {
  try {
    const email = "admin@example.com";  // Replace with your admin email
    const password = "admin123";  // Replace with your admin password

    // Create admin account in Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save the admin role to Firestore
    await setDoc(doc(firestore, "users", user.uid), { isAdmin: true });

    console.log("Admin registered successfully!");
  } catch (error) {
    console.error("Error registering admin:", error.message);
  }
}

// Import the necessary Firebase functions
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Initialize Firestore
const db = getFirestore();

/**
 * Create a new user with email and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<Object>} UserCredential
 */
export const doCreateUserWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Check if the user already exists in Firestore
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()) {
      // Add user to Firestore if not already present
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        createdAt: new Date(),
      });
    }

    return userCredential;
  } catch (error) {
    console.error("Error creating user:", error.code, error.message);
    throw error;
  }
};

/**
 * Sign in a user with email and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<Object>} UserCredential
 */
export const doSignInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error) {
    console.error("Error signing in:", error.code, error.message);
    throw error;
  }
};

/**
 * Sign in a user with Google
 * @returns {Promise<Object>} User
 */
export const doSignInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Add or update user in Firestore
    const userRef = doc(db, "users", user.uid);
    await setDoc(
      userRef,
      {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        lastLogin: new Date(),
      },
      { merge: true }
    ); // Merge to avoid overwriting existing data

    return user;
  } catch (error) {
    console.error("Error signing in with Google:", error.code, error.message);
    throw error;
  }
};

/**
 * Sign out the current user
 */
export const doSignOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out:", error.code, error.message);
    throw error;
  }
};

/**
 * Send a password reset email
 * @param {string} email
 */
export const doPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.error(
      "Error sending password reset email:",
      error.code,
      error.message
    );
    throw error;
  }
};

/**
 * Change the password of the current user
 * @param {string} password
 */
export const doPasswordChange = async (password) => {
  try {
    if (auth.currentUser) {
      await updatePassword(auth.currentUser, password);
    } else {
      throw new Error("No user is currently signed in.");
    }
  } catch (error) {
    console.error("Error changing password:", error.code, error.message);
    throw error;
  }
};

/**
 * Send an email verification to the current user
 */
export const doSendEmailVerification = async () => {
  try {
    if (auth.currentUser) {
      await sendEmailVerification(auth.currentUser, {
        url: `${window.location.origin}/home`, // Redirect after email verification
      });
    } else {
      throw new Error("No user is currently signed in.");
    }
  } catch (error) {
    console.error(
      "Error sending email verification:",
      error.code,
      error.message
    );
    throw error;
  }
};

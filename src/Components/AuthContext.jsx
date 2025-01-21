// AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase"; // Firebase auth
import { onAuthStateChanged } from "firebase/auth";

// Create context
const AuthContext = createContext();

// UseAuth Hook
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap the app and provide user context
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Update user state on auth state change
    });
    return () => unsubscribe(); // Clean up listener on component unmount
  }, []);

  const isAuthenticated = !!user; // Check if user is authenticated

  return (
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

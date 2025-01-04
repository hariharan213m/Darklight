import About from "./Components/About";
import Courses from "./Components/Courses";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Levels from "./Components/Levels";
import Login from "./Components/Login";
import Register from "./Components/Register";
import React, { useState, useEffect } from "react";
import Events from "./Components/Events";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase"; // Import your Firebase auth instance

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Initially set to null

  const location = useLocation();

  // This function will handle login when the button is clicked
  const loginHandler = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", true); // Persist state in localStorage
  };

  const logoutHandler = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated"); // Clear state from localStorage
  };

  // Sync Firebase auth state with localStorage and check login status
  useEffect(() => {
    // Listen to auth state change and set isAuthenticated accordingly
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    // Check localStorage for persisted authentication state
    const persistedAuthState = JSON.parse(
      localStorage.getItem("isAuthenticated")
    );
    if (persistedAuthState !== null) {
      setIsAuthenticated(persistedAuthState);
    }

    // Cleanup listener when component unmounts
    return () => unsubscribe();
  }, []);

  // Show Header and Footer only if not on Login or Register
  const shouldShowHeaderFooter = !["/login", "/register"].includes(
    location.pathname
  );

  // If isAuthenticated is still null (checking state from Firebase or localStorage), show nothing
  if (isAuthenticated === null) {
    return null;
  }

  return (
    <div>
      {/* Show Header only if not on Login or Register */}
      {shouldShowHeaderFooter && <Header onLogout={logoutHandler} />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={loginHandler} />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        {isAuthenticated ? (
          <>
            <Route path="/courses" element={<Courses />} />
            <Route path="/events" element={<Events />} />
            <Route path="/courses/:id" element={<Levels />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
          </>
        ) : (
          // Redirect to /login if not authenticated
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>

      {/* Show Footer only if not on Login or Register */}
      {shouldShowHeaderFooter && <Footer />}
    </div>
  );
}

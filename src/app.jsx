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

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    // Retrieve authentication state from localStorage
    () => JSON.parse(localStorage.getItem("isAuthenticated")) || false
  );

  const location = useLocation();

  const loginHandler = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", true); // Persist state in localStorage
  };

  const logoutHandler = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated"); // Clear state from localStorage
  };

  // Determine if Header and Footer should be shown
  const shouldShowHeaderFooter = !["/login", "/register"].includes(
    location.pathname
  );

  useEffect(() => {
    // Ensure the authentication state is synced with localStorage on refresh
    const authState = JSON.parse(localStorage.getItem("isAuthenticated"));
    if (authState) {
      setIsAuthenticated(authState);
    }
  }, []);

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
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>

      {/* Show Footer only if not on Login or Register */}
      {shouldShowHeaderFooter && <Footer />}
    </div>
  );
}

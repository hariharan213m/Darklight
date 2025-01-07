import About from "./Components/About";
import Courses from "./Components/Courses";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Levels from "./Components/Levels";
import Login from "./Components/Login";
import Register from "./Components/Register";
import React, { useState, useEffect } from "react";
import Events from "./Components/Events";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import Notfound from "./Components/Notfound";
import { DataProvider } from "./context/DataContext";

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

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

  // Function to handle login state change
  const handleLogin = () => {
    setIsAuthenticated(true); // Set authenticated state to true after successful login
  };

  return (
    <div>
      <DataProvider>
        {/* Show Header only if not on Login or Register */}
        {shouldShowHeaderFooter && <Header user={isAuthenticated} />}{" "}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />

          {/* All Components Accessible Regardless of Authentication */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/events" element={<Events />} />
          <Route path="/courses/:id" element={<Levels />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />

          {/* Catch-All Route for 404 Not Found */}
          <Route path="*" element={<Notfound />} />
        </Routes>
        {/* Show Footer only if not on Login or Register */}
        {shouldShowHeaderFooter && <Footer />}
      </DataProvider>
    </div>
  );
}

import About from "./Components/About";
import Courses from "./Components/Courses";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Levels from "./Components/Levels";
import Login from "./Components/Login";
import Register from "./Components/Register";
import React, { useState } from "react";
import Events from "./Components/Events";

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginHandler = () => {
    setIsAuthenticated(true); // Update the state when the user logs in
  };

  return (
    <div>
      {isAuthenticated && <Header />}
      <Routes>
        {/* If not authenticated, redirect to the login page */}
        {!isAuthenticated ? (
          <>
            <Route path="/login" element={<Login onLogin={loginHandler} />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="courses" element={<Courses />} />
            <Route path="events" element={<Events />} />
            <Route path="/courses/:id" element={<Levels />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="about" element={<About />} />
          </>
        )}
      </Routes>
      {isAuthenticated && <Footer />}
    </div>
  );
}

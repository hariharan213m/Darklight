import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
} from "../firebase/auth";
import { useAuth } from "../contexts/authContext";

const Register = () => {
  const authContext = useAuth(); // Access the context directly
  const user = authContext?.user || null; // Fallback to null if undefined

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous error
    setIsRegistering(true); // Set registration in progress

    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      setIsRegistering(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setIsRegistering(false);
      return;
    }

    try {
      await doCreateUserWithEmailAndPassword(email, password);
      alert("Registration successful!");
      setIsRegistering(false);
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
      setIsRegistering(false);
    }
  };

  if (user) {
    return <Navigate to="/home" replace />;
  }
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div
        className="card shadow rounded-4"
        style={{ width: "40rem", padding: "5.5rem" }}
      >
        <h3 className="text-center mb-4 fw-bolder">Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="name"
              className="form-label"
              style={{ fontSize: "1.5rem" }}
            >
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your full name"
              required
              style={{ fontSize: "12px", padding: "10px" }}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="form-label"
              style={{ fontSize: "1.5rem" }}
            >
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
              style={{ fontSize: "12px", padding: "10px" }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="form-label"
              style={{ fontSize: "1.5rem" }}
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Create a password"
              required
              style={{ fontSize: "12px", padding: "10px" }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="confirmPassword"
              className="form-label"
              style={{ fontSize: "1.5rem" }}
            >
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control mb-4"
              id="confirmPassword"
              placeholder="Confirm your password"
              required
              style={{ fontSize: "12px", padding: "10px" }}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {error && (
            <div className="alert alert-danger text-center" role="alert">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary w-100 mb-3"
            style={{ fontSize: "1.4rem", padding: "8px", letterSpacing: 1 }}
            disabled={isRegistering}
          >
            {isRegistering ? "Registering..." : "Sign Up"}
          </button>
          <div className="text-center mt-3">
            <p style={{ fontSize: "1.2rem" }}>
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../firebase/auth";
import { useAuth } from "../contexts/authContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const { user } = useAuth(); // Assuming `useAuth` provides user state

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (!email || !password) {
      alert("Email and password are required");
      return;
    }

    try {
      const userCredential = await doSignInWithEmailAndPassword(
        email,
        password
      );
      console.log("Signed in:", userCredential.user);
      // Redirect or handle user data here
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error
    setIsLoggedIn(false); // Reset login state initially

    try {
      await doSignInWithGoogle();
      setIsLoggedIn(true);
    } catch (err) {
      setError(err.message || "Google sign-in failed. Please try again.");
      setIsLoggedIn(false);
    }
  };

  if (user) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div
        className="card shadow rounded-4"
        style={{ width: "40rem", padding: "6rem" }}
      >
        <h1 className="text-center mb-4 fw-bolder">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="form-label"
              style={{ fontSize: "1.5rem" }}
            >
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
              style={{ fontSize: "12px", padding: "10px" }}
              value={email}
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
              className="form-control mb-4"
              id="password"
              placeholder="Enter your password"
              required
              style={{ fontSize: "12px", padding: "10px" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <div className="alert alert-danger text-center" role="alert">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary w-100 mb-3 fw-bold"
            style={{ fontSize: "1.4rem", padding: "8px", letterSpacing: 1 }}
          >
            {isLoggedIn ? "Logging in..." : "Login"}
          </button>
          <div className="text-center mt-3">
            <p style={{ fontSize: "1.2rem" }}>
              Don't have an account? <Link to="/register">Sign up</Link>
            </p>
          </div>
        </form>
        <div className="text-center">OR</div>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline-danger w-100 mt-3"
          style={{ fontSize: "1.4rem", padding: "5px", letterSpacing: 1 }}
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;

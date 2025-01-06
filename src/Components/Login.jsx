import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { doSignInWithEmailAndPassword } from "../firebase/auth";
import { useAuth } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    onLogin();
    navigate("/"); // Navigates to Home after login
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    // Log the email and password before trying to sign in
    console.log("Attempting sign-in with email:", email);
    console.log("Attempting sign-in with password:", password);

    try {
      // Attempt to sign in with email and password
      await doSignInWithEmailAndPassword(email, password);
      console.log("Signed in with email:", email);

      // Only call onLogin after successful sign-in
      onLogin();
      navigate("/"); // Navigate to Home after successful login
    } catch (error) {
      // Handle authentication errors
      console.error("Error signing in:", error.message);

      if (error.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else if (error.code === "auth/user-not-found") {
        setError("No user found with this email.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Signed in with Google:", user);

      // Call onLogin only if Google sign-in is successful
      onLogin();
      navigate("/"); // Navigate to Home after successful Google sign-in
    } catch (err) {
      console.error("Google Sign-In failed:", err.message);
      setError(err.message || "Google sign-in failed. Please try again.");
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
            Login
          </button>
          <div className="text-center mt-3">
            <p style={{ fontSize: "1.2rem" }}>
              Don't have an account?{" "}
              <Link onClick={() => navigate("/register")} to="/register">
                Sign up
              </Link>
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

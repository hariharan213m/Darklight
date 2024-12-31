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
    onLogin(); 
    navigate("/"); 
  };

  // const goToRegister = () => {
  //   navigate("/register");
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (!email || !password) {
      alert("Email and password are required");
      return;
    }

    try {
      await doSignInWithEmailAndPassword(email, password);
      console.log("Signed in with email:", email);
      onLogin(); 
      navigate("/"); 
    } catch (error) {
      console.error("Error signing in:", error.message);
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider); 
      const user = result.user; 
      console.log("Signed in with Google:", user);

      onLogin(); 
      navigate("/"); 
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
            onClick={handleLogin}
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

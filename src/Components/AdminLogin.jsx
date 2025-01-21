import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Check if the email matches an admin email
      if (email === "darklightchess64@gmail.com") {
        // Replace with your admin email
        navigate("/admin-dashboard"); // Redirect to admin dashboard
      } else {
        setError("You do not have admin access.");
      }
    } catch (err) {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div
        className="card shadow rounded-4"
        style={{ width: "40rem", padding: "6rem" }}
      >
        <h1 className="text-center mb-4 fw-bolder">Admin Login</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 mb-3 fw-bold"
            style={{ fontSize: "1.5rem", padding: "8px", letterSpacing: 1 }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

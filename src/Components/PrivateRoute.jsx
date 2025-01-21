import React from "react";
import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const PrivateRoute = ({ children }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  // Check if the user is logged in and is an admin
  if (user && user.email === "harim2005haran@gmail.com") {
    return children; // Allow access to admin routes
  }

  // Redirect non-admin or unauthenticated users to admin login
  return <Navigate to="/admin-login" />;
};

export default PrivateRoute;

import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles = [], user, children }) => {
  if (!user) {
    // Not logged in, redirect to home
    return <Navigate to="/" />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    // User role not allowed, redirect to home
    return <Navigate to="/" />;
  }

  // User allowed, render children
  return children;
};

export default ProtectedRoute;

// // ProtectedRoute.jsx
// import { Navigate } from 'react-router-dom';

// export default function ProtectedRoute({ children, allowedRoles = [] }) {
//   const token = localStorage.getItem('token');
//   const role = localStorage.getItem('role'); // optional: store role if needed

//   if (!token) {
//     // Not logged in
//     return <Navigate to="/login" />;
//   }

//   if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
//     // Role not allowed
//     return <Navigate to="/unauthorized" />;
//   }

//   return children;
// }


// src/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles, children }) => {
  const user = JSON.parse(localStorage.getItem('user')); // Simulate auth

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;

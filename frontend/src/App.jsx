// import { Routes, Route, Navigate } from 'react-router-dom';
// import Login from './Pages/FirstPage';
// import Login from './Pages/Login';
// import Register from './Pages/Register';
// import AdminDashboard from './Pages/AdminDashboard';
// import TranslatorDashboard from './Pages/TranslatorDashboard';
// // import Unauthorized from './Pages/Unauthorized';
// // import ProtectedRoute from './components/ProtectedRoute';

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<FirstPage />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />

//       {/* ✅ Protected admin route */}
//       <Route
//         path="/admin"
//         element={
//           <ProtectedRoute allowedRoles={['admin']}>
//             <AdminDashboard />
//           </ProtectedRoute>
//         }
//       />

//       {/* ✅ Protected user route */}
//       <Route
//         path="/translator"
//         element={
//           <ProtectedRoute allowedRoles={['user', 'admin']}>
//             <TranslatorDashboard />
//           </ProtectedRoute>
//         }
//       />

//       <Route path="/unauthorized" element={<Unauthorized />} />
//       <Route path="*" element={<Navigate to="/login" />} />
//     </Routes>
//   );
// }

// export default App; 
// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate  } from 'react-router-dom';
import FirstPage from './Pages/FirstPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AdminDashboard from './Pages/AdminDashboard';
import TranslatorDashboard from './Pages/TranslatorDashboard';
import ContinueTranslation from './Pages/ContinueTranslation';
import Unauthorized from './Pages/Unauthorized';
import ProtectedRoute from './ProtectedRoute';
import './App.css';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/translator" element={<Navigate to="/translator-dashboard" />} />
      <Route path="/admin" element={<AdminDashboard />} />


      {/* Admin Protected Routes */}
      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Translator Protected Routes */}
      <Route
        path="/translator-dashboard"
        element={
          <ProtectedRoute allowedRoles={['user']}>
            <TranslatorDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/continue-translation"
        element={
          <ProtectedRoute allowedRoles={['user']}>
            <ContinueTranslation />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

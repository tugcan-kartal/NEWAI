// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Oturum bilgilerini sağlayan bir bağlam

const PrivateRoute = ({ element, ...rest }) => {
  const auth = useAuth();

  return auth.user ? (
    element
  ) : (
    <Navigate to="/SignIn" state={{ from: rest.location.pathname }} replace />
  );
};

export default PrivateRoute;

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProfileAuth = ({ children, isProtected }) => {
  
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  if (isProtected && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!isProtected && isAuthenticated) { 
    return <Navigate to="/profile" replace />; // si user est connecté la page login renvoie vers la page profile.
  }

  return children;
};

export default ProfileAuth;
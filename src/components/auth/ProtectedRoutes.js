import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoutes = ({ isLoggedIn, children }) => {
	if (!isLoggedIn) return <Navigate to='/login' replace />;
	return children;
};

export default ProtectedRoutes;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = (props) => {
	const { Component } = props;
	const navigate = useNavigate();
	useEffect(() => {
		const authenticateduser = localStorage.getItem('user');

		if (!authenticateduser) navigate('/login');
	});

	return (
		<>
			<Component />
		</>
	);
};

export default ProtectedRoutes;

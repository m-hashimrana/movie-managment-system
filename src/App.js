import './App.css';
import './components/styles.scss';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import ReactModal from 'react-modal';
import ProtectedRoutes from './components/auth/ProtectedRoutes';

function App() {
	const [auth, setAuth] = useState();
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		setAuth(JSON.parse(localStorage.getItem('user')));
		setIsAuthenticated(true);
	}, []);
	console.log('auth', auth);
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<ProtectedRoutes Component={Home} auth={auth} />} />

				<Route exact path='/login' element={<Login />} />
				<Route exact path='/signup' element={<Signup />} />

				<Route />
			</Routes>
		</div>
	);
}

export default App;

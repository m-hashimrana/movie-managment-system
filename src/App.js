import './App.css';
import './components/styles.scss';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/Home';

function App() {
	const [auth, setAuth] = useState();

	useEffect(() => {
		setAuth(JSON.parse(localStorage.getItem('user')));
	}, []);

	return (
		<div className='App'>
			<Routes>
				<Route exact path='/' element={<Home />} />
				{auth === undefined ||
					(null && (
						<>
							<Route exact path='/login' element={<Login />} />
							<Route exact path='/signup' element={<Signup />} />
						</>
					))}
			</Routes>
		</div>
	);
}

export default App;

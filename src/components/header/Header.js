import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import Logo from '../../assets/Logo.png';
import Avatar from '../../assets/user-profile-avatar.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const [isOpenDropDown, setIsOpenDropDown] = useState(false);
	const [user, setUser] = useState();
	const navigate = useNavigate();
	let auth = localStorage.getItem('user');

	const handleLogOut = () => {
		localStorage.removeItem('user');
		navigate('/login');
	};
	useEffect(() => {
		let usr = JSON.parse(auth);
		setUser(usr);
	}, []);

	console.log('auth from header ', user);
	return (
		<div className='header'>
			<div className='imgWrapper'>
				<img src={Logo} />
			</div>
			<div className='userProfile' onClick={() => setIsOpenDropDown(!isOpenDropDown)}>
				<img src={Avatar} />
				{isOpenDropDown && (
					<div className='profileDropDown'>
						<p>
							{_.capitalize(user?.firstName)} {_.capitalize(user?.lastName)}
						</p>
						<p className='email'>{user?.email}</p>
						<button onClick={handleLogOut}>Logout</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;

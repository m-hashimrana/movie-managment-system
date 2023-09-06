import _ from 'lodash';
import React, { useState } from 'react';
import Logo from '../../assets/Logo.png';
import Avatar from '../../assets/user-profile-avatar.png';
import { useNavigate } from 'react-router-dom';

const Header = ({ auth }) => {
	const [isOpenDropDown, setIsOpenDropDown] = useState(false);
	const navigate = useNavigate();

	const handleLogOut = () => {
		navigate('/login');
		localStorage.removeItem(auth);
	};

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
							{_.capitalize(auth?.firstName)} {_.capitalize(auth?.lastName)}
						</p>
						<p className='email'>{auth?.email}</p>
						<button onClick={handleLogOut}>Logout</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;

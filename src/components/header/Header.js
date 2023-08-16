import React from 'react';
import Logo from '../../assets/Logo.png';
import Avatar from '../../assets/user-profile-avatar.png';

const Header = () => {
	return (
		<div className='header'>
			<div className='imgWrapper'>
				<img src={Logo} />
			</div>
			<div className='userProfile'>
				<img src={Avatar} />
			</div>
		</div>
	);
};

export default Header;

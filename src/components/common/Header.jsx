import React from 'react';
import Menu from './Menu';
import { useRef } from 'react';
import { Link } from 'react-router-dom';


function Header() {
	const menu = useRef(null);
	return (
		<header>
			<h1>
				<Link to='/'>
					<img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt='로고' />
				</Link>
			</h1>			
			<Menu ref={menu} />
			<Link to='/login'>
				<p>
				<img src={`${process.env.PUBLIC_URL}/img/user.png`} alt="로그인" />
				</p>
			</Link>
		</header>
	);
}

export default Header;

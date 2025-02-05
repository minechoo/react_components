// components/common/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Menu = React.forwardRef((props, ref) => {
	const [activeMenu, setActiveMenu] = useState(null);

	const handleMouseEnter = (menu) => setActiveMenu(menu);
	const handleMouseLeave = () => setActiveMenu(null);

	return (
		<nav ref={ref}>
			<ul>
				<li onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
					<Link to='/about'>About</Link>
					{activeMenu === 'about' && (
						<ul>
							<li>
								<Link to='/about/info'>Info</Link>
							</li>
							<li>
								<Link to='/about/location'>Location</Link>
							</li>
						</ul>
					)}
				</li>

				<li onMouseEnter={() => handleMouseEnter('community')} onMouseLeave={handleMouseLeave}>
					<Link to='/community'>Community</Link>
					{activeMenu === 'community' && (
						<ul>
							<li>
								<Link to='/community/discussions'>Discussions</Link>
							</li>
							<li>
								<Link to='/community/events'>Events</Link>
							</li>
						</ul>
					)}
				</li>
				<li>
					<Link to='/counter'>Counter</Link>
				</li>
				<li>
					<Link to='/input'>InputText</Link>
				</li>
				<li>
					<Link to='/multi'>MultipleText</Link>
				</li>
				<li>
					<Link to='/list'>UserList</Link>
				</li>
			</ul>
		</nav>
	);
});

export default Menu;

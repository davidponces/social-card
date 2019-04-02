import React from 'react';
import NavBarMenu from './NavBarMenu/NavBarMenu';
import SearchBar from './SearchBar';

export default class NavBar extends React.Component {
	render() {
		return (
			<div className='navbar-container'>
				<div className='navbar'>
					<SearchBar />
					<NavBarMenu />
				</div>
			</div>
		);
	}
}

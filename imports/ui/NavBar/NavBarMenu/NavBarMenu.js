import React from 'react';

export default class NavBarMenu extends React.Component {
	render() {
		return (
			<div className='navbar-menu'>
				<img className='navbar-menu__img' src='/images/profile-picture.jpg' alt='Profile Icon' />
				<a className='navbar-menu__link' href='#'>
					David
				</a>
				<a className='navbar-menu__link' href='#'>
					Página Inicial
				</a>
				<a className='navbar-menu__link' href='#'>
					Criar
				</a>
				{/* <img src='' alt='People Icon' />
				<img src='' alt='Message Icon' />
				<img src='' alt='Notifications Icon' />
				<img src='' alt='Questions Icon' />
				<img src='' alt='Dropdown Icon' /> */}
			</div>
		);
	}
}

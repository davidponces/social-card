import React from 'react';

export default class SearchBar extends React.Component {
	render() {
		return (
			<div className='search-bar'>
				<img className='search-bar__logo' src='/images/facebook-logo.png' alt='Facebook Logo' />
				<div className='search-bar-text'>
					<input className='search-bar-text__input' type='search' name='' id='' placeholder='Pesquisa' />
					<img className='search-bar-text__icon' src='../../images/search-icon.svg' alt='search-bar-icon' />
				</div>
			</div>
		);
	}
}

import React from 'react';

export default class SocialCardTitle extends React.Component {
	render() {
		return (
			<div className='social-card-title'>
				<div className='social-card-title-container'>
					<img className='social-card-title__img' src='/images/ana-profile.jpg' alt='Ana Marques Avatar' />
					<div className='social-card-title__text'>
						<a className='social-card-title__link' href=''>
							Ana Marques
						</a>{' '}
						tem interesse num evento.
						<div className='social-card-title__text__container'>
							<span className='social-card-title__paragraph'> 34 mins. •</span>
							<img className='social-card__public-icon' src='/images/world.png' alt='Public Icon' />
						</div>
					</div>
				</div>
				<div className='social-card-title__more-button'>...</div>
			</div>
		);
	}
}

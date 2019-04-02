import React from 'react';

export default class SocialCardInfo extends React.Component {
	render() {
		return (
			<div className='social-card-info-container'>
				<div className='social-card-info'>
					<p className='social-card-info__title'>DOMING, 2/06 ÀS 18:30</p>
					<p className='social-card-subtitle'>
						António Damásio: Cerebro, Corpo, e a Naturalidade da Consciência
					</p>
					<div className='social-card-people__container'>
						<img className='social-card-info__img' src='/images/ana-profile.jpg' alt='Avatar Logos' />

						<img className='social-card-info__img' src='/images/profile-picture.jpg' alt='avatar logo' />
						<span className='social-card-info__people'>Ana, Diogo e outros 17 amigos</span>
					</div>
				</div>
				<div className='social-card-button-star-container'>
					<img className='social-card-star__icon' src='/images/star-24.ico' alt='star logo' />
					<span className='social-card-star__text'>Com Interesse</span>
				</div>
			</div>
		);
	}
}

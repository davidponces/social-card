import React from 'react';

export default class SocialCardImage extends React.Component {
	render() {
		return (
			<div className='social-card-img-container'>
				<img className='social-card-img' src='/images/social-card-img.jpg' alt='Social Card Image' />
			</div>
		);
	}
}

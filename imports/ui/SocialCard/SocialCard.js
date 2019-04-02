import React from 'react';
import SocialCardTitle from './SocialCardTitle';
import SocialCardImage from './SocialCardImage';
import SocialCardInfo from './SocialCardInfo';
import SocialCardInteraction from './SocialCardInteraction';

export default class SocialCard extends React.Component {
	render() {
		return (
			<div className='social-card'>
				<SocialCardTitle />
				<SocialCardImage />
				<SocialCardInfo />
				<SocialCardInteraction />
			</div>
		);
	}
}

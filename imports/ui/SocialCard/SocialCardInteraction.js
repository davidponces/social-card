import React from 'react';

export default class SocialCardInteraction extends React.Component {
	render() {
		return (
			<div className='social-card-bottom'>
				<div className='social-card-interaction-container'>
					<div className='social-card-interaction'>
						<div className='social-card-interaction-button'>
							<img className='social-card-interactiong-img' src='/images/like.png' alt='Gosto Icon' />
							<span className='social-card-interaction-text'>Gosto</span>
						</div>
						<div className='social-card-interaction-button'>
							<img
								className='social-card-interactiong-img'
								src='/images/coment.png'
								alt='Comentar Icon'
							/>
							<span className='social-card-interaction-text'>Comentar</span>
						</div>
						<div className='social-card-interaction-button'>
							<img
								className='social-card-interactiong-img'
								src='/images/share.png'
								alt='Partilhar Icon'
							/>
							<span className='social-card-interaction-text'>Partilhar</span>
						</div>
					</div>
				</div>
				<div className='social-card-interaction-comment'>
					<img
						className='social-card-interaction__profile-picture'
						src='/images/profile-picture.jpg'
						alt='profile picture'
					/>
					<div className='social-card-interaction-comment-text'>
						<input
							className='social-card-interaction-comment-text__input'
							type='text'
							placeholder='Escreve um comentário...'
						/>
						<div className='social-card-interaction-comment-img__container'>
							<img
								className='social-card-interaction-comment-text_img'
								src='/images/emoji.png'
								alt='emoji logo'
							/>
							<img
								className='social-card-interaction-comment-text_img'
								src='/images/camera.png'
								alt='camera logo'
							/>
							<img
								className='social-card-interaction-comment-text_img'
								src='/images/gif.png'
								alt='gif logo'
							/>
							<img
								className='social-card-interaction-comment-text_img'
								src='/images/sticky.png'
								alt='sticker logo'
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

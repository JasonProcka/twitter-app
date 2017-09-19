import React, {Component} from 'react'// styling
import './Tweet.css'
//images
import ProfileImage from '../../images/profile.png'

export default class Tweet extends Component {
	render() {
		return (
			<div className="tweet-container">
				<div className="tweet-head">
					<p className="tweet-profile-image"><img src={ProfileImage} width="30px" height="30px" /></p>
					<p className="tweet-poster-name">Jason R. Procka</p>
					<p className="tweet-poster-handle">@jprocka</p>
				</div>
				<div className="tweet-body">
					{this.props.content}
				</div>
			</div>
		)
	}
}
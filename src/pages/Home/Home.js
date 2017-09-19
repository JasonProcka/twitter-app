import React, {Component} from 'react'
// components
import Tweet from '../../components/Tweet/Tweet'
//styling
import './Home.css'

export default class Home extends Component {
	render() {
		return (
			<div className="Home">
				<div className="tweet-ladder">
					<h3>Tweets</h3>
					<Tweet content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat."/>
				</div>
			</div>
		)
	}
}
import React, {Component} from 'react'
// React router stuff
import { Link } from 'react-router-dom'
// components
import NewTweet from '../NewTweet/NewTweet'
// styling
import './Header.css'

export default class Header extends Component {
	render() {
		return (
			<nav className="twitter-header">
				<NewTweet />
				<ul className="header-navigation">
					<li><Link to='/'>Dashboard</Link></li>
					<li><Link to='/profile'>Profile</Link></li>
					<li><Link to='/profile'>Dashboard</Link></li>
					<li><Link to='/profile'>Dashboard</Link></li>
				</ul>
			</nav>
		)
	}
}
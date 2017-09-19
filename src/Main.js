import React, { Component} from 'react'
// React Router v4 stuff
import { Switch, Route } from 'react-router-dom'
// pages
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'

export default class Main extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/dashboard" component={Home} />
				<Route path="/home" component={Home} />
				<Route path="/profile" component={Profile} />
				<Route path="/new" component={Profile} />
			</Switch>
		)
	}
}
import React from 'react'
import './NewTweet.css'

const NewTweet = () => (
  <a className="NewTweet" href="javascript:void(0)" style={newTweetStyles} className="NewTweet">Tweet</a>
)

var newTweetStyles = {
	backgroundColor: '#2ecc71',
	borderRadius: 4,
	border: 0,
	paddingTop: 10,
	paddingBottom: 10,
	paddingLeft: 14,
	paddingRight: 14,
	color: '#FFF',
	display: 'inline-block',
	marginTop: 4,
	marginLeft: 14
}

export default NewTweet

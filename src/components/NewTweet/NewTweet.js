import React from 'react'

const NewTweet = () => (
  <button style={newTweetStyles} className="NewTweet">Tweet</button>
)

var newTweetStyles = {
	backgroundColor: '#3498db',
	borderRadius: 6,
	border: 0,
	paddingTop: 10,
	paddingBottom: 10,
	paddingLeft: 14,
	paddingRight: 14,
	color: '#FFF'
}

export default NewTweet

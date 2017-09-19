import React, { Component } from 'react'
// firebase
import {init as firebaseInit} from './javascript/firebase.js'
// components
import Header from './components/Header/Header'
import Main from './Main'
// styling
import './App.css'

// Stateless App component

export default class App extends Component {
  constructor(props) {
    super(props)
    firebaseInit()
  }
  
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>  
    )
  }
}

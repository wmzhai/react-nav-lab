import Expo from 'expo'
import React, { Component } from 'react'
import Router from './config/router'

class App extends Component {
  render() {
    return <Router />
  }
}

Expo.registerRootComponent(App);

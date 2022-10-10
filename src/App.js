import './App.css'

import React, { Component } from 'react'
import Navbaar from './Components/Navbaar'
import News from './Components/News'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbaar />
        <News />
      </div>
    )
  }
}

import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import World from './world.js'


class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <World />
      </div>
    )
  }
}

export default App;

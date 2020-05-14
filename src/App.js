import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Home from './containers/Home/Home'

class App extends Component {
  render () {
    return (
      <div>
        <Route path="/" component={Home} />
      </div>
    )
  }
}

export default App

import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'
import Home from './containers/Home/Home'

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Route path="/" component={Home} />
        </Layout>
      </div>
    )
  }
}

export default App

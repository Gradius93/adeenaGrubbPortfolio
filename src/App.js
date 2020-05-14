import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'
import Home from './containers/Home/Home'
import About from './components/About/About'


class App extends Component {
  render () {
    return (
      <div>
        <Layout>

            <Route path="/about" component={About} />
            <Route path="/insta" component={() => {
              global.window && (global.window.location.href = 'https://www.instagram.com/adeenagrubb/?hl=en')
            return null
            }} />
            <Route path="/vimeo" component={() => {
              global.window && (global.window.location.href = 'https://vimeo.com/adeenagrubb')
              return null
            }} />
        </Layout>
      </div>
    )
  }
}

export default App

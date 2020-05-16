import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'
import Home from './containers/Home/Home'
import About from './components/About/About'
import Redirect from './components/UI/Redirect/Redirect'

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
            <Route path="/about" component={About} />
            <Route path="/insta" component={ () => {
              window.location.href = 'https://www.instagram.com/adeenagrubb/?hl=en';
              return null;
            }} />
            <Route path="/vimeo" component={ () => {
              window.location.href = 'https://vimeo.com/adeenagrubb';
              return null;
            }} />
            <Route path="/youtube" component={ () => {
              window.location.href = 'https://www.youtube.com/channel/UCPacyoFy9DeFanMF6mhvwnA';
              return null;
            }} />
        </Layout>
      </div>
    )
  }
}

export default App

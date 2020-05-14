import React, { Component } from 'react'

import adeenaImage from '../../assets/adeena1.png'
import classes from './About.module.css'

class About extends Component {
  render() {
    return (
      <div className={classes.About}>
        <div className={classes.Img}>
          <img src={adeenaImage} alt="About"/>
        </div>
        <div className={classes.Info}>
          <p>Adeena is a lovely little girl who makes lovely things</p>
        </div>

      </div>
    )
  }
}

export default About

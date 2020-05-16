import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
          <div className={classes.InsideInfo}>
            <p>Adeena is a lovely little girl who makes lovely things</p>
            <p>Adeena is an award winning animation director, specialising in stop motion animation. </p>
            <p>She has worked on many projects including the great British bake-off and National Lottery adverts. </p>
            <p>Her clients include Pilgrims Choice, Channel 4 and Metcalfes Popcorn.</p>
            <p>LALALALALAL</p>
            <p>LALAL</p>
            <p>LALALALAL</p>
          </div>
        </div>
        <div className={classes.Contact}>
          <FontAwesomeIcon icon='fa-vimeo-v' />
        </div>
      </div>
    )
  }
}

export default About

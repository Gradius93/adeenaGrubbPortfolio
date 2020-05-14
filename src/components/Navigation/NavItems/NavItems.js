import React from 'react'

import classes from './NavItems.module.css'
import NavItem from './NavItem/NavItem'

const navItems = () => (
  <ul className={classes.NavItems}>
    <NavItem link="/gallery">Gallery</NavItem>
    <NavItem link="/about">About</NavItem>
    <NavItem link={{
      pathname: 'https://www.instagram.com/adeenagrubb/?hl=en'
    }}
    >Instagram</NavItem>
  </ul>
)

export default navItems

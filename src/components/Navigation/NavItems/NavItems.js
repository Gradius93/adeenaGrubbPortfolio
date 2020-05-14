import React from 'react'

import classes from './NavItems.module.css'
import NavItem from './NavItem/NavItem'

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavItem link="/" exact>Adeena Grubb</NavItem>
    <NavItem link="/gallery">Gallery</NavItem>
    <NavItem link="/about">About</NavItem>
    <NavItem link="/insta">Instagram</NavItem>
  </ul>
)

export default navigationItems

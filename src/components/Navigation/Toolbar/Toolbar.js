import React from 'react'


import NavItems from '../NavItems/NavItems'
import Name from '../../Name/Name'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

import classes from './Toolbar.module.css'

const toolbar = ( props ) => (
  <header className={classes.Toolbar}>
    <DrawerToggle
      clicked={props.drawerToggleClicked}/>
    <div className={classes.Name}>
      <Name />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavItems />
    </nav>
  </header>
)

export default toolbar

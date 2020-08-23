import React from 'react';
import classes from './Leftbar.module.css'
import {NavLink} from 'react-router-dom'

const Leftbar = () => {
  return(
    <nav className={classes.Leftbar}>
        <NavLink to = "/profile" activeClassName={classes.active}>
          <div className = {classes.LeftbarDiv}>Profile</div>
        </NavLink>
        <NavLink to = "/dialogs/0" activeClassName={classes.active}>
          <div  className = {classes.LeftbarDiv}>Dialogs</div>
        </NavLink>
        <NavLink to = "/usersPage" activeClassName={classes.active}>
          <div className = {classes.LeftbarDiv}>Users</div>
        </NavLink>
        <NavLink to = "/pictures" activeClassName={classes.active}>
          <div className = {classes.LeftbarDiv} >Pictures</div>
        </NavLink>
        <NavLink to = "/music" activeClassName={classes.active}>
          <div className = {classes.LeftbarDiv}>Music</div>
        </NavLink>
        <NavLink to = "/settings" activeClassName={classes.active}>
          <div className = {classes.LeftbarDiv}>Settings</div>
        </NavLink>
    </nav>
  )
}

export default Leftbar;

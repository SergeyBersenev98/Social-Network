import React from 'react';
import classes from './Leftbar.module.css'
import {NavLink} from 'react-router-dom'

const Leftbar = () => {
  return(
    <nav className={classes.Leftbar}>
      <div>
        <NavLink to = "/profile" activeClassName={classes.active}>Profile</NavLink>
      </div>   
      <div>
        <NavLink to = "/dialogs" activeClassName={classes.active}>Dialogs</NavLink>
      </div>   
      <div>
        <NavLink to = "/usersPage" activeClassName={classes.active}>Users</NavLink>
      </div>      
      <div>
        <NavLink to = "/2" activeClassName={classes.active}>Profile</NavLink>
      </div>      
      <div>
        <NavLink to = "/3" activeClassName={classes.active}>Profile</NavLink>
      </div>      
      <div>
        <NavLink to = "/4" activeClassName={classes.active}>Profile</NavLink>
      </div>
      <div>
        text 3
      </div>
    </nav>
  )
}

export default Leftbar;

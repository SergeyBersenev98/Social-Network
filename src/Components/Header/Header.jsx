import React from 'react';
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom'


const Header = (props) => { 
  return(
    <header className={classes.header}>
      <img src="https://c-ash.smule.com/sf/s27/arr/99/a8/43530006-4fe8-4668-ac6b-c68b9a250978_1024.jpg"></img>
      <div className = {classes.loginBlock}>
      {props.isAuth ? props.login : <NavLink to ={'/login'}>Login</NavLink>}
         </div>
    </header>
  )
}

export default Header;

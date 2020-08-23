import React from 'react';
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom'
import logoutImage from '../Common/images.png'
import logotypeImage from '../Common/unnamed.jpg'

const Header = (props) => { 
  return(
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logotypeImage} alt = "logotype"/>
      </div>
      <div className = {classes.TS}>Twilight Sparkle</div>
      <div className = {classes.TSmini}>social network</div>
      <div className = {classes.loginBlock}>  
      {props.isAuth 
          ? <div className = {classes.logout}>
            <div>
              {props.login} 
            </div>
              <img onClick = {props.logoutThunk} src ={logoutImage} alt = "logout">
              </img>
            </div> 
          : <NavLink to ={'/login'}><button>Login</button></NavLink>}
         </div>
    </header>
  )
}

export default Header;

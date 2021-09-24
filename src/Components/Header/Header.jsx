import React, {useState} from 'react';   
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom'
import logoutImage from '../Common/images.png'
import logotypeImage from '../Common/unnamed.jpg'

const Header = (props) => { 

  let dayColor = "#f0ebf3";
  let nightColor = "#160046";
  let [color, setColor] = useState("#f0ebf3");
  let [contr, setContr] = useState(0)

let changeTheme = () => {
  if(contr%2===0){setColor(nightColor);setContr(contr++)}else{setColor(dayColor);setContr(contr++)}
  document.getElementById('app-wrapper').style.backgroundColor=color
  document.getElementById('app-wrapper').lastChild.style.backgroundColor=color
}
  return(
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logotypeImage} alt = "logotype"/>
      </div>
      <div className = {classes.TS}>Twilight Sparkle</div>
      <div className = {classes.TSmini}>social network</div>
      <label className={classes.switch} onClick={()=>{changeTheme()}}>
        <input type="checkbox"></input>
        <span className={classes.slider}></span>
      </label>
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

import React from 'react';
import classes from './Settings.module.css'
import cityDay from '../Common/cityDay.png'
import cityNight from '../Common/cityNight.png'
const Settings = (props) => { 
 let background, leftbarActiveText, leftbarDiv, leftbarText;
 const toSetDarkThemeMode = () => {props.changeThemeAC()};
    if (props.theme === false){
      background = '#f0ebf3';
      leftbarActiveText = '#e1d7e7';
      leftbarText = '#48275F'
      leftbarDiv = '#48275F'
    } else {
      background = '#1f0626';
      leftbarActiveText = '#48275F';
      leftbarText = '#e1d7e7'
      leftbarDiv = '#e1d7e7'
    }
  
  let styleApp = document.createElement('style');
  styleApp.setAttribute('class', 'styleDarkApp');
  styleApp.innerHTML = `.app-wrapper{display: grid; background: ${background} ; grid-template-areas:  "h h" "n c"; grid-template-rows: 65px 1fr; grid-template-columns: 2fr 10fr; grid-gap: 30px;} .content {grid-area: c; min-height: 86.9vh; background-color: ${background}; margin-right: 30px;} .content img {height: 20vh; width: 40vh;}`
  
  document.head.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.replaceWith(styleApp)
  
  
  let styleLeftbar = document.createElement('style');
  styleLeftbar.setAttribute('type', 'text/css');
  styleLeftbar.innerHTML = `.Leftbar_Leftbar__3W9nK  {grid-area: n;} .Leftbar_active__1n47V div{color: ${leftbarActiveText};font-size: 30px;width: 200px; text-align: center;margin-left: 30px;margin-right: 10px;margin-top: -35px;position: relative;text-decoration: none;user-select: none;padding: .8em 2em;outline: none;background-color: ${leftbarText};; background-image: linear-gradient(45deg, rgba(157,107,157,.0) 30%, rgba(157,107,157,.5), rgba(157,107,157,.0) 70%); background-repeat: no-repeat; background-size: 200% 100%, auto; background-position: 200% 0, 0 0; box-shadow: rgba(200,100,200,.9) 0 2px 2px; background: ${leftbarDiv};;}.Leftbar_Leftbar__3W9nK a {text-decoration: none;margin: 12vh;font-size: 30px;}.Leftbar_LeftbarDiv__3p3wj{ width: 200px;text-align: center;margin-left: 30px; margin-right: 10px; margin-top: -35px; position: relative; text-decoration: none; user-select: none; padding: .8em 2em; outline: none; background-color:${leftbarActiveText};; background-image: linear-gradient(45deg, rgba(157,107,157,.0) 30%, rgba(157,107,157,.5), rgba(157,107,157,.0) 70%); background-repeat: no-repeat; background-size: 200% 100%, auto; background-position: 200% 0, 0 0; box-shadow: rgba(200,100,200,.9) 0 2px 2px; color: ${leftbarText};} Leftbar_Leftbar__3W9nK div:active { top: 2px; box-shadow: none; background: black; padding:  .8em 2em;}.Leftbar_Leftbar__3W9nK div:hover { transition: .2s linear; background-position: -200% 0, 0 0;}.Leftbar_hover__2nnqi { transition: .2s linear; color: aquamarine;}`

  document.head.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.replaceWith(styleLeftbar)
  
  return (
      <div className={classes.editAndSaveButton}>
       {props.theme
          ? <button onClick = {toSetDarkThemeMode}>Night theme: on</button>
          : <button onClick = {toSetDarkThemeMode}>Night theme: off</button>}
       {props.theme
          ? <img src = {cityNight} alt = "cityNight"></img>
          : <img src = {cityDay} alt = "cityDay"></img>}
      </div>
  )
}
export default Settings



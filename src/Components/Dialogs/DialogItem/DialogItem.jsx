import React from 'react';
import classes from './DialogItem.module.css'
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {
  let id = props.id
  if (id === 0) return (<div></div>)
  return(   
        <NavLink to={"/dialogs/" + props.id} activeClassName = {classes.active} key = {props.id}>
          <div className={classes.chat}  >
            <img src = {props.ava} alt = "ava"></img> 
            <div   className={classes.names}>
              {props.name}
            </div>
          </div>
        </NavLink>  
    )
}
export default DialogItem;

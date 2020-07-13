import React from 'react';
import classes from './DialogItem.module.css'
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {
  return(
     <div className={classes.chat}>
        <NavLink to={"/dialogs/" + props.id}><img src = {props.ava}></img> {props.name}</NavLink>
      </div> 
    )
}
export default DialogItem;

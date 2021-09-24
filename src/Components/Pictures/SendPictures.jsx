import React from 'react';
import classes from './Pictures.module.css'
import {NavLink} from 'react-router-dom'

const SendPictures = (props) => {
const send = () => {
  props.sendPictures(" ", props.idAndName.id, props.url)
}
  return (
    <div>
      <NavLink to = {`/dialogs/${props.idAndName.id}`} activeClassName={classes.active}>
        <div className = {classes.LeftbarDiv} onClick = {send}>{props.idAndName.name}</div>
      </NavLink>  
    </div>
  )
}

export default SendPictures

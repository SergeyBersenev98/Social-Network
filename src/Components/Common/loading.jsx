import React from 'react';
import loadingPicture from './loading.gif'
import loadingTwilight from './loadingTwilight.gif'
import classes from './loading.module.css'

export let LoadingTwilight = (props) => {
  return (<div className = {classes.twi}><img src = {loadingTwilight} alt = "pony loading..."></img></div>)
}

let Loading = (props) => {
  return <div className = {classes.loading}><img src = {loadingPicture} alt = "loading"></img></div>
}
export default Loading;

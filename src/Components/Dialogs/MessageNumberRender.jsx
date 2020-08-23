import React from 'react';
import classes from './Dialogs.module.css'                          

const MessageNumber2 = (props) => {
  let i = 0;
  const RenderMessage = (props) => {
    return (
          <div>
          {props.owner === "me" 
              ? <div className = {classes.me}>{props.text}{props.img 
                  ? <img src = {props.img} alt = "message"></img> 
                  : <div></div>}</div>
              : <div className = {classes.no}>{props.text}{props.img 
                ? <img src = {props.img} alt = "message"></img> 
                : <div></div>}</div>}
         </div>)
  }
  return(
    <div className = {classes.allMessages}>
      {props.messages.map(m2 => <RenderMessage text = {m2.text} img = {m2.img} owner = {m2.owner} key = {i++}/>)}
   </div> )
}
export default MessageNumber2;
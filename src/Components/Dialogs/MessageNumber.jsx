import React from 'react';             
import {Route} from 'react-router-dom'
import MessageNumberRender from './MessageNumberRender.jsx'

const MessageNumber = (props) => {
  return (
      <div>   
    {props.m.id === 0 
        ? <Route path = {`/dialogs/0`} render = {() => <MessageNumberRender messages = {props.m.messages}/>} /> 
        : <Route path = {`/dialogs/${props.m.id}`} render = {() => <MessageNumberRender messages = {props.m.messages}/>} />}
      </div>      
  )
}
export default MessageNumber;


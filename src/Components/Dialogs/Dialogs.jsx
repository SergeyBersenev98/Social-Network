import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'
import MessageItem from './MessageItem/MessageItem.jsx'
import DialogItem from './DialogItem/DialogItem.jsx'
import ToWriteMessage from './ToWriteMessage/ToWriteMessage.jsx'
import DialogsContainer from './DialogsContainer.jsx'                            

const Dialogs = (props) => {
let DialogsRender = props.DialogsRender.map(d => <DialogItem name={d.name} ava={d.ava} id={d.id} />);
let MessagesRender = props.MessagesRender.map(m => <MessageItem text={m.message} />)

  
  return(
    <div className={classes.chatsAndMassages}>
      <div className={classes.chats}>
        {DialogsRender}
      </div>
      <div className={classes.massages}>
        {MessagesRender}
        <ToWriteMessage NewMessageText={props.NewMessageText} sendNewMessageText={props.sendNewMessageText} MessagesData={props.MessagesData} changeNewMessageText={props.changeNewMessageText}/>
      </div>
    </div>
    
  )
}

export default Dialogs;

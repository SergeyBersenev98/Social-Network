import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem.jsx'
import ToWriteMessage from './ToWriteMessage/ToWriteMessage.jsx'                            
import MessageNumber from './MessageNumber.jsx'

 
const Dialogs = (props) => {
  let DialogsRender = props.DialogsRender.map(d => <DialogItem name={d.name} ava={d.ava} id={d.id} key={d.id} />);                             
  let MessagesRender = props.DialogsRender.map(m => <MessageNumber m = {m} key = {m.id}/>)
  return(
    <div className={classes.chatsAndMassages}>
      <div className={classes.chats}>
        {DialogsRender}
      </div>
      <div className={classes.messages}>

        <ToWriteMessage sendNewMessageText={props.sendNewMessageText} MessagesData={props.MessagesData}/>
        {MessagesRender}
      </div>
    </div> 
  )
}

export default Dialogs;

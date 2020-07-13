import React from 'react';


const ToWriteMessage = (props) => {
let newMessageElement = React.createRef();

  let changeNewMessage = ()=>{
    let text = newMessageElement.current.value;
    props.changeNewMessageText(text)
    }

  let sendNewMessage = () => {
    let text = newMessageElement.current.value;
    props.sendNewMessageText(text)
  }
  return(
    <div>
     <textarea ref={newMessageElement} onChange = {changeNewMessage} value = {props.NewMessageText}></textarea> 
     <button onClick = {sendNewMessage}>Write a messge</button>
    </div>
  )
}

export default ToWriteMessage;
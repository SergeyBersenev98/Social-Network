import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {required, maxLengthCreator} from '../../Utils/Validators/Validator.js'
import {Textarea} from '../../Common/FormControls.jsx'
import classes from './ToWriteMessage.module.css'

const ToWriteMessage = (props) => { 
  const addNewMessage = (values) => {
    props.sendNewMessageText(values.newMessageBody)} //newMessageBody - cause it's name of Field (23str)
      return(
        <div>
          <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
      )
}

const maxLength50 = maxLengthCreator(500)

const addMessageForm = (props) => {
  return ( 
    <div>

     <form onSubmit = {props.handleSubmit}>
       <div>
         <Field className = {classes.field}component = {Textarea} name = "newMessageBody" 
                placeholder = "Enter your message" validate = {[required, maxLength50]}/>
       </div>
       <div>
         <button>Send a messge</button>
       </div>
     </form>
     </div>
  )
}

const AddMessageFormRedux = reduxForm({
  form: "dialogsAddMessageForm"
})(addMessageForm)

export default ToWriteMessage;






import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {required, maxLengthCreator} from '../../Utils/Validators/Validator.js'
import {Textarea} from '../../Common/FormControls.jsx'
const ToWriteMessage = (props) => {
  
const addNewMessage = (values) => {props.sendNewMessageText(values.newMessageBody)} //newMessageBody - cause it's name of Field (20str)

  return(
    <div>
      <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>
  )
}

const maxLength50 = maxLengthCreator(50)

const addMessageForm = (props) => {
  return ( 
     <form onSubmit = {props.handleSubmit}>
      <div>
       <Field component = {Textarea} name = "newMessageBody" 
              placeholder = "Enter your message" validate = {[required, maxLength50]}/>
      </div>
      <div>
       <button>Send a messge</button>
       </div>
     </form>
)
}

const AddMessageFormRedux = reduxForm({
  form: "dialogsAddMessageForm"
})(addMessageForm)

export default ToWriteMessage;






import React from 'react';
import Dialogs from './Dialogs.jsx'   
import {changeNewMessageTextActionCrerator, sendNewMessageTextActionCrerator} from '../../Redux/DialogsReducer.js'
import {connect} from 'react-redux'

let f1 = (state) => {
  return{
    DialogsRender: state.Dialogs.DialogsData,
    MessagesRender: state.Dialogs.MessagesData,
    NewMessageText: state.Dialogs.NewMessageText,
  }}

let f2 = (dispatch) => {
  return{
    changeNewMessageText: (text) => {dispatch(changeNewMessageTextActionCrerator(text))},
    sendNewMessageText: (text) => {dispatch(sendNewMessageTextActionCrerator(text))}
  }}


const DialogsContainer = connect(f1, f2)(Dialogs);


export default DialogsContainer;

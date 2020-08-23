import React from 'react';
import Dialogs from './Dialogs.jsx'   
import {sendNewMessageTextActionCrerator} from '../../Redux/DialogsReducer.js'
import {connect} from 'react-redux'
import {AuthRedirect} from '../../HOC/AuthRedirect.js'
import {compose} from 'redux'

let AuthRedirectComponent = AuthRedirect(Dialogs)


let f1 = (state) => {
  return{
    DialogsRender: state.Dialogs.DialogsData,
    MessagesRender: state.Dialogs.MessagesData,
    NewMessageText: state.Dialogs.NewMessageText,
  }}

let f2 = (dispatch) => {
  return{
    sendNewMessageText: (text) => {dispatch(sendNewMessageTextActionCrerator(text))}
  }}


const DialogsContainer = connect(f1, f2)(AuthRedirectComponent);


export default compose(
  connect(f1, f2),
  AuthRedirect,
)(Dialogs);

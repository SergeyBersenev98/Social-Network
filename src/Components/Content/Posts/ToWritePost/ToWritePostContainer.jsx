import React from 'react';
import {changeNewPostTextActionCrerator, serverNewPostActionCrerator} from '../../../../Redux/ProfileReducer.js'
import ToWritePost from './ToWritePost'
import {connect} from "react-redux"

/*
const ToWritePostContent = (props) => {
  
  let NewPostText = props.Store.getState().Profile.NewPostText;

  let onServerNewPost = (text) => {
    props.Store.dispatch(serverNewPostActionCrerator(text))
  }
  
  let onChangeNewPostText = (text) => {
    props.Store.dispatch(changeNewPostTextActionCrerator(text));
  }
   return <ToWritePost serverNewPost = {onServerNewPost}
                       changeNewPostText = {onChangeNewPostText}
                       newPostText = {NewPostText} />
}
*/


let f1 = (state) => {
  return {
   newPostText: state.Profile.NewPostText
  }
}


let f2 = (dispatch) => {
  return {
    ServerNewPostText: (text) => {
    dispatch(serverNewPostActionCrerator(text))},
    
    ChangeNewPostText: (text) => {
    dispatch(changeNewPostTextActionCrerator(text));
    }
  }
}

const ToWritePostContainer =  connect(f1, f2)(ToWritePost)

export default ToWritePostContainer;


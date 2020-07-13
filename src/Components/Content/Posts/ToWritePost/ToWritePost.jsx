import React from 'react';
import classes from './ToWritePost.module.css'
import {changeNewPostTextActionCrerator, serverNewPostActionCrerator} from '../../../../Redux/ProfileReducer.js'
import ToWritePostContainer from './ToWritePostContainer.jsx'

const ToWritePost = (props) => {
  let newPostElement = React.createRef();
  
  let addPost = ()=>{
  let text = newPostElement.current.value;
  props.ServerNewPostText(text);
  text = ''
}
  let onPostChange = ()=>{
    let text = newPostElement.current.value;
   props.ChangeNewPostText(text)
  };
  
  return(
    <div>
     <textarea  ref={newPostElement} onChange = {onPostChange} value = {props.newPostText}/> 
     <button onClick = {addPost}>Add post</button>
    </div>
  )
}

export default ToWritePost;


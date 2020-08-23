import React from 'react';
import classes from './Profile.module.css'

const ProfilePostRender = (props) => {
  const toLike = () => {props.likeAC(props.post.id)}
  return (
    <div className = {classes.posts}>
      <div className = {classes.picture}>
        <img src ={props.ava} alt = "ava"></img>
      </div>
      <div className = {classes.postText}>{props.post.text}
        <div className = {props.post.wasLiked ? classes.likesYes : classes.likesNo} onClick = {toLike}>
          <img src = "https://cdn.pixabay.com/photo/2013/07/13/01/18/favorite-155494_640.png" alt = "ava"></img>
          <b>{props.post.likes}</b>
        </div>                                   
      </div>
    </div> 
  )
}

export default ProfilePostRender


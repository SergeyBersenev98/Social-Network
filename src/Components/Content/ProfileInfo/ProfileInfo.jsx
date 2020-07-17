import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  if (props.profile === " ") {
    return <></>
  } else { 
    debugger
    return(
    <div className={classes.content}>
      <img src= {props.profile.photos.large}></img>
      <div>
        {props.profile.AboutMe}
      </div>
      <div>
        {props.profile.fullname}
      </div>
      <div>
        {props.profile.lookingForAJob}
      </div>
      <div>
        {props.profile.lookingForAJobDescription}
      </div>
    </div>
  )
}
}

export default ProfileInfo;


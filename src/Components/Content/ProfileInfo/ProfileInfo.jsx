import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return(
    <div className={classes.content}>
      <img src="https://i.pinimg.com/originals/ed/99/fd/ed99fd664f97c90a224ef435b8a71ba8.jpg"></img>
      <div>
      Ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;


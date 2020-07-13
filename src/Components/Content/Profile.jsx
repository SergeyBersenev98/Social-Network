import React from 'react';
import classes from './Profile.module.css'
import OldPostsContainer from './Posts/OldPosts/OldPostsContainer.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'
import ToWritePostContainer from './Posts/ToWritePost/ToWritePostContainer.jsx'




const Profile = () => {
  return(
    <div className={classes.profile}>
    <ProfileInfo />
    <ToWritePostContainer />
    <OldPostsContainer /> 
    </div>
  )
}

export default Profile;


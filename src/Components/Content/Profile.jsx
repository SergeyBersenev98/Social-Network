import React from 'react';
import classes from './Profile.module.css'

import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'
import ToWritePostContainer from './Posts/ToWritePost/ToWritePostContainer.jsx'
import ProfileContainerAPI from './ProfileContainer.jsx'



const Profile = (props) => {
  debugger; 
      
     
  return(
      <div className={classes.profile}>
        <div>
          tut text and photo
        </div>
        <ProfileInfo profile = {props.profile.Profile} />
        <ToWritePostContainer />
        <div className={classes.post}>
          tut kakoi-to post render bil
          {props.profile.PostsData.map(post => <div>{post.text}</div>)}
        </div>
      </div>
      
  )
}


export default Profile;


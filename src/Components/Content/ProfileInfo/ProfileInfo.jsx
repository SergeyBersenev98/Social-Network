import React, {useState} from 'react';
import classes from '../Profile.module.css'
import ProfileDataForm from '../ProfileDataForm.jsx'
import ava from '../../Common/ava.jpg'
import noPhoto from '../../Common/nophotosmall.PNG'

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState (false);
    const toEditMode = () => {
      setEditMode(!editMode);
    }
    let [showContactsMode, setshowContactsMode] = useState (false);
    const toShowContactsMode = () => {
      setshowContactsMode(!showContactsMode)
    }
    const Contact = ({contactTitle, contactValue}) => {
      return (<div>{contactTitle} : {contactValue}</div>)}  
    const ProfileData = ({profile, toEditMode}) => {
      return (
        <div>
          <div className={classes.mainAva}>
            <img src= {props.owner ? ava : props.profile.photos.large || noPhoto} alt = "ava"></img>
            <div className={classes.changeAva}>
              {props.owner ? <input type = "file" name = "photo" onChange={loadingProfilePicture}/>: ""}
            </div>
          </div>
          <div className={classes.editAndSaveButton}>
            {props.owner ? <button onClick = {toEditMode}>Edit</button> : ""}
          </div>
          <div className={classes.infoText}>
            <div className = {classes.firstColumn}>
              <div>
                <b>About me: </b>
                {props.profile.aboutMe} 
              </div>
              <div>
                <b>Full name: </b>
                {props.profile.fullName}
              </div>
              <div>
                <b>Looking for a job:  </b>
                {props.profile.lookingForAJob ? ' yes' : ' no'}
              </div>
                {props.profile.lookingForAJob &&
              <div>
                          <b>Looking for a job description: </b>
                {props.profile.lookingForAJobDescription}
              </div>}
            </div> 
            <div className = {classes.secondColumn}>
              <div> 
                <button onClick = {toShowContactsMode}>Contacts ↓</button>
                {showContactsMode 
                  ? Object.keys(props.profile.contacts).map(key => {
                  return <Contact key = {key} contactTitle = {key} contactValue = {props.profile.contacts[key]} />}) 
                  : ""}

              </div>
            </div>
          </div>
        </div>
      )
    }

let loadingProfilePicture = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files)
    }
  }

const onSubmit = (formData) => {
  props.saveProfile(formData);
  toEditMode();
}
  
  if (props.profile === " ") {
    return <></>
  } else { 
    return(
    <div>
      {editMode ? <ProfileDataForm initialValues = {props.profile} onSubmit = {onSubmit} photos = {props.profile.photos} contacts = {props.profile.contacts}/> : <ProfileData profile = {props.profile} toEditMode = {toEditMode} loadingProfilePicture = {loadingProfilePicture}/>}
    </div>
    )
  }
}

export default ProfileInfo;

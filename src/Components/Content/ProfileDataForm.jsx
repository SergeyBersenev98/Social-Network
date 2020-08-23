import React from 'react';
import classes from './Profile.module.css'
import {Field, reduxForm} from 'redux-form'
import {Input} from '../Common/FormControls.jsx'
import ava from '../Common/ava.jpg'

const ProfileDataForm = ({handleSubmit, photos, toEditMode, contacts, error, loadingProfilePicture}) => { 

      return (
         <form onSubmit = {handleSubmit}  className={classes.content}>     
           <div className={classes.mainAva}>
            <img src= {photos.large || ava} alt = "ava"></img>
             <div className={classes.changeAva}>
               <input type = "file" name = "photo" onChange={loadingProfilePicture}/>
             </div>
          </div>
          <div>
            <button>Save</button>
          </div>
          <div className={classes.infoText}>
            <div className={classes.firstColumn}>
              <div>
                About me: <Field placeholder = {"About me"} name = "aboutMe" component={Input}/>
              </div>
              <div>
                Full name: <Field placeholder = {"Full name"} name = "fullName" component={Input}/>
              </div>
              <div>
                Looking for a job:  <Field type = {"checkbox"} name = "lookingForAJob" component={Input} /> 
              </div>
              <div>
                Looking for a job description: <Field placeholder = {"lfajd"} name = "lookingForAJobDescription" component={Input}/>
              </div>
            </div>
            <div className={classes.secondColumn}>     
              <div>
                Contacts: {Object.keys(contacts).map(key => {
                  return (<div>
                            <Field placeholder = {key} 
                                   name = {"contacts." + key} 
                                   component={Input}/>
                          </div>)
                })}
              </div>
             </div>
          </div>
        </form> 
      )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm


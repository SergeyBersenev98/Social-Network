import React from 'react';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'
import URLProfileContainer from './ProfileContainer.jsx'
import ProfileStatusWithHooks from './ProfileStatusWithHooks.jsx'
import {Field, reduxForm} from 'redux-form'
import {required, maxLengthCreator} from '../Utils/Validators/Validator.js'
import {Textarea} from '../Common/FormControls.jsx'

const maxLength10 = maxLengthCreator(10)

const AddNewPost = (props) => { 
  return (
    <form onSubmit = {props.handleSubmit}>
      <div>
        <Field placeholder = {"ToAddPost"} name = {"newPostText"} component={Textarea} 
               validate = {[required, maxLength10]} />

        <button>AddPost</button>
      </div>
    </form> 
  )
}

const AddNewPostForm = reduxForm({
  form : "NewPost"
})(AddNewPost)

const Profile = (props) => {
  
  let onAddPost = (values) => {
    console.log(values)
    props.toAddPost(values.newPostText)
  }
  
  return (
          <div className={classes.profile}>
        <ProfileInfo profile = {props.profile.Profile} />
        <AddNewPostForm onSubmit = {onAddPost}/>
        <div className={classes.post}>
          <ProfileStatusWithHooks status = {props.status} updateStatus = {props.updateStatus} />
          {props.profile.PostsData.map(post => <div>{post.text}</div>)}
        </div>
      </div>
    
    )
}


export default Profile


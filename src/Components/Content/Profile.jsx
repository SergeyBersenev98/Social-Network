import React from 'react';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'
import ProfileStatusWithHooks from './ProfileStatusWithHooks.jsx'
import {Field, reduxForm} from 'redux-form'
import {required, maxLengthCreator} from '../Utils/Validators/Validator.js'
import {Textarea} from '../Common/FormControls.jsx'
import ava from '../Common/ava.jpg'
import ProfilePostRender from './ProfilePostRender.jsx'
const maxLength10 = maxLengthCreator(500)

const AddNewPost = (props) => { 
  return (
    <form onSubmit = {props.handleSubmit} >
      <div className={classes.editAndSaveButton}>
        <Field placeholder = {"ToAddPost"} name = {"newPostText"} component={Textarea} 
               validate = {[required, maxLength10]} className={classes.newPost}/>
        <button>AddPost</button>
      </div>
    </form> 
  )
}

const AddNewPostForm = reduxForm({
  form : "NewPost"
})(AddNewPost)

const Profile = React.memo (props => {  //React.memo == shouldComponentUpdate (in class)
  let onAddPost = (values) => {
    props.toAddPost(values.newPostText)
  }
  return (
    <div className={classes.content}>
      <ProfileInfo profile = {props.profile.Profile} 
                   owner = {props.owner} 
                   savePhoto = {props.savePhoto}
                   saveProfile = {props.saveProfileThunk}/>
      <ProfileStatusWithHooks status = {props.status} updateStatus = {props.updateStatus} owner = {props.owner}/>  
      {props.owner 
        ? <div>
            <AddNewPostForm onSubmit = {onAddPost}/> 
            <div className={classes.post}>
              {props.profile.PostsData.map(post => <ProfilePostRender key = {post.id} post = {post} ava = {ava} likeAC = {props.likeAC}/> )}
            </div> 
          </div>
        : <div></div>}
    </div>
    )
  }
)

export default Profile


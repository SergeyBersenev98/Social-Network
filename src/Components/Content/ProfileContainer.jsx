

import React from 'react';
import Profile from './Profile.jsx'
import * as axios from 'axios' 
import {allInfoAboutUserAC, getStatus, updateStatus, toAddPost, savePhotoThunk, saveProfileThunk, likeAC} from '../../Redux/ProfileReducer.js'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'

class ProfileContainerAPI extends React.Component {
  
  refresh = () => {
    let userId = this.props.match.params.userId //standart path for getting end of URL
    if (!userId) {userId=9365}
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
      this.props.allInfoAboutUserAC(response.data)
                        }
           )
      this.props.getStatus(userId)}
  componentDidMount() {
  this.refresh()
}  
  
 componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId){this.refresh()}
  }

  render () {
    return (   
      <Profile key={this.props.key} {...this.props} owner={!this.props.match.params.userId} profile={this.props.profile} 
        status = {this.props.status} updateStatus = {this.props.updateStatus}
        toAddPost={this.props.toAddPost} savePhoto={this.props.savePhotoThunk}
        saveProfileThunk={this.props.saveProfileThunk} likeAC = {this.props.likeAC} />
    )
  }
}

let f1 = (state) => {
  return{
    profile: state.Profile,
    status: state.Profile.status
  }
}

export default compose(
  connect(f1, {allInfoAboutUserAC, getStatus, updateStatus, toAddPost, savePhotoThunk, saveProfileThunk, likeAC}),
  withRouter,
 // AuthRedirect - when it is not commented, Profile is not render if user is not login
)(ProfileContainerAPI)

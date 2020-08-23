

import React from 'react';
import classes from './Profile.module.css'
import Profile from './Profile.jsx'
import * as axios from 'axios' 
import Loading from '../Common/loading.jsx'
import {allInfoAboutUserAC, getStatus, updateStatus, toAddPost} from '../../Redux/ProfileReducer.js'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {AuthRedirect} from '../../HOC/AuthRedirect.js'
import {compose} from 'redux'

class ProfileContainerAPI extends React.Component {
  constructor (props) {
  super (props)
  }
  
  componentDidMount() {
  let userId = this.props.match.params.userId //standart path for getting end of URL
  if (!userId) {userId=9365}
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
      this.props.allInfoAboutUserAC(response.data)
                        }
           )
    this.props.getStatus(userId)
}  
  render () {
    return (   
      <Profile {...this.props} profile={this.props.profile} 
        status = {this.props.status} updateStatus = {this.props.updateStatus}
        toAddPost={this.props.toAddPost}/>
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
  connect(f1, {allInfoAboutUserAC, getStatus, updateStatus, toAddPost}),
  withRouter,
 // AuthRedirect
)(ProfileContainerAPI)

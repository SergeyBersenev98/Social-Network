import React from 'react';
import classes from './Profile.module.css'
import Profile from './Profile.jsx'
import * as axios from 'axios' 
import Loading from '../Common/loading.jsx'
import {allInfoAboutUserAC, getProfileThunk} from '../../Redux/ProfileReducer.js'
import {connect} from 'react-redux'
import {withRouter, Redirect} from 'react-router-dom'

class ProfileContainerAPI extends React.Component {
  constructor (props) {
  super (props)
  }
  
  componentDidMount() {
  let userId = this.props.match.params.userId //standart path for getting end of URL
  if (!userId) {userId=2}
  getProfileThunk(userId)
           
}  
  render () {
    if (!this.props.isAuth) return <Redirect to = {'/Login'} />
    return (   
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let f1 = (state) => {
  return{
    isAuth: state.AuthorizationUser.isAuth,
    profile: state.Profile
  }
}

let URLProfileContainer = withRouter(ProfileContainerAPI)

export default connect(f1, {allInfoAboutUserAC})(URLProfileContainer);
 


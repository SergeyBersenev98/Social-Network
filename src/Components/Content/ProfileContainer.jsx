import React from 'react';
import classes from './Profile.module.css'
import Profile from './Profile.jsx'
import * as axios from 'axios' 
import Loading from '../Common/loading.jsx'
import {allInfoAboutUserAC} from '../../Redux/ProfileReducer.js'
import {connect} from 'react-redux'

class ProfileContainerAPI extends React.Component {
    constructor (props) {
  super (props)
  }
componentDidMount() {
  debugger
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
      this.props.allInfoAboutUserAC(response.data)
                        }
           )
}  
  
  
  
  render () {
     debugger
    return (   
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let f1 = (state) => {
  return{
    profile: state.Profile
  }
}



const ProfileContainer = connect(f1, {allInfoAboutUserAC})(ProfileContainerAPI);

export default ProfileContainer;


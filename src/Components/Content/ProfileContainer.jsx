import React from 'react';
import classes from './Profile.module.css'
import Profile from './Profile.jsx'
import * as axios from 'axios' 
import Loading from '../Common/loading.jsx'
import {allInfoAboutUserAC} from '../../Redux/ProfileReducer.js'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class ProfileContainerAPI extends React.Component {
  constructor (props) {
  super (props)
  }
  
  componentDidMount() {
  let userId = this.props.match.params.userId //standart path for getting end of URL
  if (!userId) {userId=2}
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
      this.props.allInfoAboutUserAC(response.data)
                        }
           )
}  
  render () {
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

let URLProfileContainer = withRouter(ProfileContainerAPI)

export default connect(f1, {allInfoAboutUserAC})(URLProfileContainer);
 


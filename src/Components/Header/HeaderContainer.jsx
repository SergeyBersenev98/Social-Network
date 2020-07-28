import React from 'react';
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom'
import Header from './Header.jsx'
import * as axios from 'axios' 
import {connect} from 'react-redux'
import {logining, getAuthUserData} from '../../Redux/AuthorizationReducer.js'


class HeaderContainer extends React.Component {
  componentDidMount () {
    this.props.getAuthUserData()
/*    authMe().then(response => {
      if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        this.props.logining(id, login, email)
      } else {}
                        }
           )*/}

    render () {
      return(
        <Header {...this.props} />
      )
    }

  }
const mapStateToProps = (state) => ({
  isAuth: state.AuthorizationUser.isAuth,
  login: state.AuthorizationUser.login,
  
} );

 

export default connect(mapStateToProps, {logining, getAuthUserData}) (HeaderContainer);

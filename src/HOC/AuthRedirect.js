import {Redirect} from 'react-router-dom'
import React from 'react';
import {connect} from 'react-redux'

/*This component redirect to login*/

let f1ForRedirect = (state) => ({
  isAuth: state.AuthorizationUser.isAuth
})

export const  AuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render () {
      if (!this.props.isAuth) return <Redirect to = '/Login' />
        return <Component {...this.props} /> 
    }
  }
  let ConnectedAuthRedirectComponent = connect(f1ForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}

export default AuthRedirect;

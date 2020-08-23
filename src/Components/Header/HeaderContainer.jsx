import React from 'react';
import Header from './Header.jsx'
import {connect} from 'react-redux'
import {logining, logoutThunk} from '../../Redux/AuthorizationReducer.js'

class HeaderContainer extends React.Component {
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

export default connect(mapStateToProps, {logoutThunk, logining }) (HeaderContainer);

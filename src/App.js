import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer.jsx'
import Leftbar from './Components/Leftbar/Leftbar.jsx'
import ProfileContainer from './Components/Content/ProfileContainer.jsx'
import SettingsContainer from './Components/Settings/SettingsContainer.jsx'
import UsersPageContainer from './Components/UsersPage/UsersPageContainer.jsx'
import MusicContainer from './Components/Music/MusicContainer.jsx'
import PicturesContainer from './Components/Pictures/PicturesContainer.jsx'
import DialogsContainer from './Components/Dialogs/DialogsContainer.jsx'
import {Route} from 'react-router-dom'
import Login from './Components/Login/Login.jsx'
import {initializeApp} from './Redux/AppReducer.js'
import Loading from './Components/Common/loading.jsx'

class App extends Component {  
    componentDidMount () {
    this.props.initializeApp()
    }
  render() {
    if (!this.props.initialized) {return <Loading />}
    return (
      <div className="app-wrapper" id="app-wrapper">
        <HeaderContainer />
        <Leftbar />
        <div className="content">
          <Route path = '/profile/:userId?' render = {()=> <ProfileContainer />}/> 
          <Route path = '/dialogs' render = {()=> <DialogsContainer />}/>
          <Route path = '/usersPage' render = {()=> <UsersPageContainer />}/>
          <Route path = '/login' render = {()=> <Login />}/>
          <Route path = '/music' render = {()=> <MusicContainer />}/>
          <Route path = '/settings' render = {() => <SettingsContainer />} />
          <Route path = '/pictures' render = {() => <PicturesContainer />} />
        </div>  
      </div>
    );
  }
}

const f1 = (state) => ({
  initialized: state.App.initialized
})

export default connect(f1, {initializeApp})( App);

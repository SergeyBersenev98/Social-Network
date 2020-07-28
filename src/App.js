import React from 'react';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer.jsx'
import Leftbar from './Components/Leftbar/Leftbar.jsx'
import ProfileContainer from './Components/Content/ProfileContainer.jsx'
import UsersPageContainer from './Components/UsersPage/UsersPageContainer.jsx'
import DialogsContainer from './Components/Dialogs/DialogsContainer.jsx'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './Components/Login/Login.jsx'
   




const  App = (props) => { //21 str /:userId - it's mean 'url parametr'     '?' - it's mean? that parametr is not nessecary
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Leftbar />
      <div className="content">
        <Route path = '/profile/:userId?' render = {()=> <ProfileContainer />}/> 
        <Route path = '/dialogs' render = {()=> <DialogsContainer />}/>
        <Route path = '/usersPage' render = {()=> <UsersPageContainer />}/>
        <Route path = '/login' render = {()=> <Login />}/>
      </div>  
    </div>
  );
}



export default App;

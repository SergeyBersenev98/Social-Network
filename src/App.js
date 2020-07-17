import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx'
import Leftbar from './Components/Leftbar/Leftbar.jsx'
import ProfileContainer from './Components/Content/ProfileContainer.jsx'
import UsersPageContainer from './Components/UsersPage/UsersPageContainer.jsx'
import DialogsContainer from './Components/Dialogs/DialogsContainer.jsx'
import {BrowserRouter, Route} from 'react-router-dom'

   




const  App = (props) => { 
  debugger
  return (
    <div className="app-wrapper">
      <Header />
      <Leftbar />
      <div className="content">
        <Route path = '/profile' render = {()=> <ProfileContainer />}/>
        <Route path = '/dialogs' render = {()=> <DialogsContainer />}/>
        <Route path = '/usersPage' render = {()=> <UsersPageContainer />}/>
      </div>  
    </div>
  );
}



export default App;

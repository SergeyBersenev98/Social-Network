import React from 'react';
import {setUsers, getUsersThunkCreator} from '../../Redux/UsersPageReducer.js'
import {connect} from 'react-redux'
import {setCurrentPage, changeFollowingStatus, usersQuantity, isFetching, followThunk, unfollowThunk} from '../../Redux/UsersPageReducer.js'
import UsersPage from './UsersPage.jsx'
import {LoadingTwilight} from '../Common/loading.jsx'

import {AddNewFriendAC} from '../../Redux/DialogsReducer.js'
class UsersPageAPI extends React.Component {
  
  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.usersInPage);
}


  onPageChanged = (page) => {
    this.props.getUsersThunkCreator(page, this.props.usersInPage);

}


render () {
  return  (<div>
    {this.props.state.isLoading ? <LoadingTwilight /> : null}
         <UsersPage usersQuantity = {this.props.state.usersQuantity}
                    usersInPage = {this.props.state.usersInPage}
                    changeFollowingStatus = {this.props.changeFollowingStatus}
                    currentPage = {this.props.state.currentPage}
                    users = {this.props.users}
                    onPageChanged = {this.onPageChanged}
                    followingStatus = {this.props.followingStatus}
                    isFetching = {this.props.isFetching}
                    followingInProgress = {this.props.state.followingInProgress}
                    followThunk = {this.props.followThunk}
                    unfollowThunk = {this.props.unfollowThunk}
                    AddNewFriend = {this.props.AddNewFriendAC}/>
    </div>)
  }
}

let f1 = (state) => {
  return{
    users : state.UsersPage.users,
    state : state.UsersPage
  }}

const UsersPageContainer = connect(f1, {setUsers, setCurrentPage,
                                        usersQuantity, isFetching,
                                        getUsersThunkCreator, followThunk, unfollowThunk, 
                                        changeFollowingStatus, AddNewFriendAC })(UsersPageAPI);

export default UsersPageContainer;


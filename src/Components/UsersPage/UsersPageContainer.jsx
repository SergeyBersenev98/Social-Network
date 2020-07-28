
import React from 'react';
import * as axios from 'axios' 
import {changeFollowing, setUsers, getUsersThunkCreator} from '../../Redux/UsersPageReducer.js'
import {connect} from 'react-redux'
import {UsersPageReducer, setCurrentPage, changeFollowingStatus, usersQuantity, isLoading, isFetching, followThunk, unfollowThunk} from '../../Redux/UsersPageReducer.js'
import UsersPage from './UsersPage.jsx'
import Loading from '../Common/loading.jsx'
import {getUsersAPI} from '../../API/API.js'

class UsersPageAPI extends React.Component {
  constructor (props) {
  super (props)

  }
  
  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.usersInPage);
}


  onPageChanged = (page) => {
    this.props.getUsersThunkCreator(page, this.props.usersInPage);

}


render () {
  return  (<div>
    {this.props.state.isLoading ? <Loading /> : null}
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
                    unfollowThunk = {this.props.unfollowThunk}/>
    </div>)
  }
}

let f1 = (state) => {
  return{
    users : state.UsersPage.users,
    state : state.UsersPage
  }}

/*let f2 = (dispatch) => {
  return{
    changeFollowingStatus: (userId) => {dispatch(changeFollowingStatusAC(userId))},
    setUsers: (users) => {dispatch(setUsersAC(users))},
    setCurrentPage: (number) => {dispatch(setCurrentPageAC(number))},
    usersQuantity: (quantity) => {dispatch(usersQuantityAC(quantity))},
    isLoading: (loading) => {dispatch(isLoadingAC(loading))},
  }
}*/


const UsersPageContainer = connect(f1, {changeFollowingStatus, setUsers, setCurrentPage,
                                        usersQuantity, isFetching,
                                       getUsersThunkCreator, followThunk, unfollowThunk, changeFollowingStatus})(UsersPageAPI);

export default UsersPageContainer;



import React from 'react';
import * as axios from 'axios' 
import {changeFollowing, setUsers} from '../../Redux/UsersPageReducer.js'
import {connect} from 'react-redux'
import {UsersPageReducer, setCurrentPage, changeFollowingStatus, usersQuantity, isLoading, isFetching} from '../../Redux/UsersPageReducer.js'
import UsersPage from './UsersPage.jsx'
import Loading from '../Common/loading.jsx'
import {getUsersAPI} from '../../API/API.js'

class UsersPageAPI extends React.Component {
  debugger
  constructor (props) {
  super (props)

  }
  
  componentDidMount() {
    this.props.isLoading('startLoading')
    getUsersAPI(this.props.state.currentPage, this.props.state.usersInPage)
      .then(data => {
         this.props.isLoading('stopLoading')
         this.props.setUsers(data.items)
         this.props.usersQuantity(data.totalCount)
                        }
           )
}


  onPageChanged = (page) => {
    this.props.isLoading('startLoading')
    this.props.setCurrentPage(page)
    getUsersAPI(page, this.props.state.usersInPage)
      .then(data => {
        this.props.isLoading('stopLoading')    
        this.props.setUsers(data.items)
                        }
           )
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
                    followingInProgress = {this.props.state.followingInProgress}/>
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
                                        usersQuantity, isLoading, isFetching})(UsersPageAPI);

export default UsersPageContainer;


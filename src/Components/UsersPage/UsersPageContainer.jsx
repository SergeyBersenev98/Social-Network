
import React from 'react';
import * as axios from 'axios' 
import {changeFollowing, setUsers} from '../../Redux/UsersPageReducer.js'
import {connect} from 'react-redux'
import {UsersPageReducer, setCurrentPage, changeFollowingStatus, usersQuantity, isLoading} from '../../Redux/UsersPageReducer.js'
import UsersPage from './UsersPage.jsx'
import Loading from '../Common/loading.jsx'

class UsersPageAPI extends React.Component {
  debugger
  constructor (props) {
  super (props)

  }
  
  componentDidMount() {
    this.props.isLoading('startLoading')
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.usersInPage}`).then(response => {
     this.props.isLoading('stopLoading')
      this.props.setUsers(response.data.items)
      this.props.usersQuantity(response.data.totalCount)
                        }
           )
    }


  onPageChanged = (page) => {
    this.props.isLoading('startLoading')
    this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.state.usersInPage} `).then(response => 
             {this.props.isLoading('stopLoading')    
              this.props.setUsers(response.data.items)
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
                    followingStatus = {this.props.followingStatus}/>
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
                                        usersQuantity, isLoading})(UsersPageAPI);

export default UsersPageContainer;


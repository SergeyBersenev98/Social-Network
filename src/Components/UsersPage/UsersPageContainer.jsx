
import React from 'react';
import {changeFollowingAC, setUsersAC} from '../../Redux/UsersPageReducer.js'
import {connect} from 'react-redux'
import {UsersPageReducer, setCurrentPageAC, changeFollowingStatusAC, usersQuantityAC} from '../../Redux/UsersPageReducer.js'
import UsersPage from './UsersPage.jsx'

let f1 = (state) => {
  return{
    users : state.UsersPage.users,
    state : state.UsersPage
  }}

let f2 = (dispatch) => {
  return{
    changeFollowingStatus: (userId) => {dispatch(changeFollowingStatusAC(userId))},
    setUsers: (users) => {dispatch(setUsersAC(users))},
    setCurrentPage: (number) => {dispatch(setCurrentPageAC(number))},
    usersQuantity: (quantity) => {dispatch(usersQuantityAC(quantity))}
  }
}


const UsersPageContainer = connect(f1, f2)(UsersPage);

export default UsersPageContainer;


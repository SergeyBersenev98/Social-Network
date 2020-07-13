
const CHANGE_FOLLOWING = "CHANGE-FOLLOWING";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const USERS_QUANTITY = "USERS-QUANTITY";

let initialState = {
  users : [],
  currentPage : 1,
  usersQuantity : 0,
  usersInPage: 5,
      }

let UsersPageReducer = (state = initialState, action) => {
   switch (action.type) {
     case CHANGE_FOLLOWING : {
    let stateCopy = {...state, users: state.users.map( u => {
      if (u.id == action.id){
       return {...u, followed: !u.followed}
      }else{    
      return u}})}
     return stateCopy
     }
     case SET_USERS : {
       let stateCopy = {...state, users: [...action.users]}
       return stateCopy;
     }
     case SET_CURRENT_PAGE : {
       let stateCopy = {...state, currentPage: action.number}
       return stateCopy;
     }
     case USERS_QUANTITY : {
       let stateCopy = {...state, usersQuantity: action.quantity}
       return stateCopy
     }
     default:
       return state;
      
    }
 }

export default UsersPageReducer;

export const changeFollowingStatusAC = (id) => {
  return {
    type: CHANGE_FOLLOWING,
    id: id,
    }
  }

export const setUsersAC = (users) => {
 return {
   type: SET_USERS,
   users: users
 } 
}

export const setCurrentPageAC = (number) => {
  return {
    type: SET_CURRENT_PAGE,
    number: number
  }
}

export const usersQuantityAC = (quantity) => {
  debugger;
  return {
    type: USERS_QUANTITY,
    quantity: quantity,
    }
  }

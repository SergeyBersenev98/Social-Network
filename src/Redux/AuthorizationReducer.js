import {authMe, login, logout} from '../API/API.js'
import {stopSubmit} from 'redux-form'

const LOGINING = "LOGINING";

let initialState = {
    userId : null,
    login : null,
    email : null,
    isAuth : false,
}

let AuthorizationReducer = (state = initialState, action) => {
   switch (action.type) {
     case LOGINING :  
       return {
         ...state,
         ...action.data 
     }
     default:
       return state;
 }
}

export const logining = (userId, login, email,isAuth) => ({type: LOGINING, data: {userId, login, email,isAuth}})

//THUNKS//
export const getAuthUserData = () => {
  return (dispatch) => {
       return authMe()
         .then(response => {
      if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(logining(id, login, email, true))
      } else {dispatch(logining(null, null, null, false))}
                        }
           )
  }
}
export const loginThunk = (email, password, rememberMe) => (dispatch) => {
  login(email, password, rememberMe).then(response => {
    if (response.data.resultCode === 0){
      dispatch(getAuthUserData())
    } else {
      dispatch(stopSubmit("login", {_error: response.data.messages})) //_error передаёт общую ошибку на всю систему в login

    }
  })
}
export const logoutThunk = () => (dispatch) => {
  logout().then(response => {
    if (response.data.resultCode === 0){ 
      dispatch(getAuthUserData())
    }
  })
}

export default AuthorizationReducer;












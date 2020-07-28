import {authMe} from '../API/API.js'

const LOGIN = "LOGIN";


let initialState = {
    userId : null,
    login : null,
    email : null,
    isAuth : false
}

let AuthorizationReducer = (state = initialState, action) => {
   switch (action.type) {
     case LOGIN : 
      
     return {
       ...state,
       ...action.data,
        isAuth: true
     }
  
            default:
       return state;
 }
}


export const logining = (userId, login, email) => ({type: LOGIN, data: {userId, login, email}})

//THUNKS//
export const getAuthUserData = () => {
  return (dispatch) => {
        authMe().then(response => {
      if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(logining(id, login, email))
      } else {}
                        }
           )
  }
}




export default AuthorizationReducer;












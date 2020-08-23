import {getAuthUserData} from './AuthorizationReducer.js'
const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";


let initialState = {
    initialized : false
}

let AuthorizationReducer = (state = initialState, action) => {
   switch (action.type) {
     case INITIALIZED_SUCCESS : 
     return {
       ...state,
       initialized : true  
     }
            default:
       return state;
 }
}


export const initializedSucces = () => (
  {type: INITIALIZED_SUCCESS})

//THUNKS//

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData())

  //dispatch(smthElse())
  //dispatch(smthElse())
  Promise.all([promise]).then(() => {
    dispatch(initializedSucces())})
  
  
}




/*
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



*/

export default AuthorizationReducer;












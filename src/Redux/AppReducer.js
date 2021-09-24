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

export const initializedSucces = () => ({type: INITIALIZED_SUCCESS})

//THUNKS//
export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData())
  Promise.all([promise]).then(() => {
    dispatch(initializedSucces())}) 
}

export default AuthorizationReducer;












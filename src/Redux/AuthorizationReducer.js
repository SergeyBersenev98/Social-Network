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
export default AuthorizationReducer;
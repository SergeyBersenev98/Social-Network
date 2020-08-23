import DomRendering from '../index.js'
import {getProfileAPI, getStatusAPI, updateStatusAPI} from '../API/API.js'

const TO_ADD_POST = 'TO-ADD-POST'
const ALL_INFO_ABOUT_USER = 'ALL-INFO-ABOUT-USER'
const SET_STATUS = 'SET-STATUS'

let initialState = {
      PostsData : [{text: "POST: Hi!"},
                   {text: "POST: Sometext"},
                   {text: "POST: Sometext"},],

      Profile : " ",
  status: ""
}
    

let ProfileReducer = (state = initialState, action) => {
  switch (action.type) {  
      
    case TO_ADD_POST : {
      let basicPost = { text: action.postFromUser }; 
      return {
        ...state, 
        PostsData: [basicPost, ...state.PostsData]    
        }
    }
      
      case ALL_INFO_ABOUT_USER : {
        let stateCopy = {...state, Profile: action.profile}
        return stateCopy
      }
    case SET_STATUS : {
      let stateCopy = {...state, status: action.status}
      return stateCopy
    }
      
        default:
      return state;
      }
      
    }
    
  
  



export const toAddPost = (text) => {
  return {
    type: TO_ADD_POST,
    postFromUser: text
  }
}
export const allInfoAboutUserAC = (profile) => {
  return {
    type: ALL_INFO_ABOUT_USER,
    profile : profile
  }
}
export const setStatus = (status) => {
  return {
  type: SET_STATUS,
  status: status
}
}


export const getProfileThunk = (userId) => {
  return (dispatch) =>{getProfileAPI(userId).then(response => {
      this.props.allInfoAboutUserAC(response.data)}
                        )
                      }
}
export const getStatus = (userId) => {
  return (dispatch) => {getStatusAPI(userId).then(response => {
    dispatch(setStatus(response.data))
  })}
}

export const updateStatus = (status) => {
  return (dispatch) => {updateStatusAPI(status).then( response => {
    console.log(response)
    if (response.data.resultCode === 0) {getStatusAPI(9365).then(response => {
    dispatch(setStatus(response.data))
  })
   // dispatch(setStatus(response.data))
  }}
)}
}

                                                     //THUNKS
   
export default ProfileReducer;










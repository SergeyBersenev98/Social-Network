import DomRendering from '../index.js'

const SERVER_NEW_POST = 'SERVER-NEW-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'
const ALL_INFO_ABOUT_USER = 'ALL-INFO-ABOUT-USER'

let initialState = {
      PostsData : [{text: "POST: Hi!"},
                   {text: "POST: Sometext"},
                   {text: "POST: Sometext"},],
      NewPostText :  "",
  
      Profile : " ",
}
    

let ProfileReducer = (state = initialState, action) => {
  switch (action.type) {  
      
    case SERVER_NEW_POST : {
      let basicPost = { text: action.postFromUser }; 
      debugger;
      return {
        ...state, 
        NewPostText : "",
        PostsData: [basicPost, ...state.PostsData]    
        }
    }
      
    case CHANGE_NEW_POST_TEXT : {  
      let stateCopy = {...state, NewPostText: action.textFromUser }
      return stateCopy
      }
      
      case ALL_INFO_ABOUT_USER : {
        debugger
        let stateCopy = {...state, Profile: action.profile}//p/P?
        debugger
        return stateCopy
      }
      
        default:
      return state;
      }
      
    }
    
  
  

  
export default ProfileReducer;

export const serverNewPostActionCrerator = (text) => {
  return {
    type: SERVER_NEW_POST,
    postFromUser: text
  }
}
export const changeNewPostTextActionCrerator = (text) => {
  return {
    type: CHANGE_NEW_POST_TEXT,
    textFromUser: text
  }
}
export const allInfoAboutUserAC = (profile) => {
  return {
    type: ALL_INFO_ABOUT_USER,
    profile : profile
  }
}
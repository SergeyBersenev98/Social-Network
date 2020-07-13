import DomRendering from '../index.js'

const SERVER_NEW_POST = 'SERVER-NEW-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'

let initialState = {
      PostsData : [{text: "POST: Hi!"},
                   {text: "POST: Sometext"},
                   {text: "POST: Sometext"},],
      NewPostText :  "",
    }

let ProfileReduser = (state = initialState, action) => {
  switch (action.type) {  
    case SERVER_NEW_POST: {
      let basicPost = { text: action.postFromUser }; 
      return {
        ...state, 
        NewPostText : "",
        PostsData: [basicPost, ...state.PostsData]    
        }
    }
    case CHANGE_NEW_POST_TEXT: {               
      return {
        ...state,
        NewPostText: action.textFromUser
            }
    }
    
    default:
      return state;
  }

  
}
export default ProfileReduser;
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
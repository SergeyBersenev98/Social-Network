import DomRendering from '../index.js'

const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'
const SEND_NEW_MESSAGE_TEXT = 'SEND-NEW-MESSAGE-TEXT'

let initialState = {
      NewMessageText : "",
      MessagesData : [{id:1, message:"Hi!"},
                      {id:2, message:"Sometext"},],
      DialogsData : [{id:1, name:"Andrew", ava:"https://clck.ru/Pbd5H"}, 
                     {id:2, name:"Sergey", ava:"https://clck.ru/Pbd5H"},
                     {id:3, name:"Elena", ava:"https://clck.ru/Pbd5H"},
                     {id:4, name:"Oleg", ava:"https://clck.ru/Pbd5H"},
                     {id:5, name:"Jenna", ava:"https://clck.ru/Pbd5H"},
                     {id:6, name:"Kate", ava:"https://clck.ru/Pbd5H"},],
    }

let DialodsReducer = (state = initialState, action) => {
   let stateCopy = {...state};
   switch (action.type) {
     case CHANGE_NEW_MESSAGE_TEXT : {
       stateCopy.NewMessageText = action.textFromUser
       return stateCopy;
     }
     case  SEND_NEW_MESSAGE_TEXT: {
       let basicMessage = {id:1, message: action.textFromUser}
       stateCopy.MessagesData = [ ...state.MessagesData, basicMessage]
       stateCopy.NewMessageText = ""
       return stateCopy;
     }
     default:
       return state;
      
    }
 }

export default DialodsReducer;
export const changeNewMessageTextActionCrerator = (text) => {  
  return {
    type: CHANGE_NEW_MESSAGE_TEXT,
    textFromUser: text,
    }
  }
export const sendNewMessageTextActionCrerator = (text) => {
  return {
    type: SEND_NEW_MESSAGE_TEXT,
    textFromUser: text,
    
  }
}
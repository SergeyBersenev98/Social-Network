/*
import ProfileReducer from './ProfileReducer.js'
import DialogsReducer from './DialogsReducer.js'

let DomRendering = () => {};

let store = {
  _state : {
    Profile : {
      PostsData : [{text: "POST: Hi! I try to find Ponies!"},
                   {text: "POST: I it, but they dont want to talk with me"},
                   {text: "POST: Hey there! Watch it! Trixie made me red stalion!"},],
      NewPostText :  "",
    },
    Dialogs : {
      NewMessageText : "trh",
      MessagesData : [{id:1, message:"Hi!"},
                      {id:2, message:"Do you want to be my waifu?"},],
      DialogsData : [{id:1, name:"Twilight Sparkle", ava:"https://goo.su/1k98"}, 
                     {id:2, name:"Fluttershy", ava:"https://goo.su/1K8z"},
                     {id:3, name:"Raibow Dash", ava:"https://goo.su/1K9"},
                     {id:4, name:"Rarity", ava:"https://goo.su/1k90"},
                     {id:5, name:"Apple Jack", ava:"https://goo.su/1k92"},
                     {id:6, name:"Pinkie Pie", ava:"https://goo.su/1k9J"},],
    }
  },
          
   getState () {return store._state},

  
   dispatch(action){
ProfileReducer(this._state.Profie, action);
DialogsReducer(this._state.Dialos, action);
DomRendering();}
  }






export default store; 
*/

import img from '../Components/Common/noAva.jpg'

const SEND_NEW_MESSAGE_TEXT = 'SEND-NEW-MESSAGE-TEXT'
const ADD_NEW_FRIEND = 'ADD-NEW-FRIEND'

let initialState = {
      DialogsData : [
         {idAndName : {id: 0}, id: 0, messages: [ 
                          {owner:"ts", text: "Hi! It's your own chat, where you can store important information and messages.", img: ""},
                          {owner:"me", text: "to phone Jenna +99890-111-22-33 in 15:30 ", img: ""},
                          {owner:"me", text: "to get package. 19 district 45/2 13.1", img: ""},
                          {owner:"me", text: "100USD => 6340RUB    100EUR => 7322RUB   13.02.20", img: "https://prowebber.ru/uploads/posts/2018-04/thumbs/1524118136_1499598310_1499089578_mat_681741.jpg"}, ]},                                  
        {idAndName : {id:1, name:"Andrew"}, id:1, name:"Andrew", ava: "https://www.novostimira.com.ua/images/news/1363175378_722.jpg.jpeg", messages: [
                          {owner: "me", text: "It was a burning hot day. Yan was wandering in pursuit of birds amongthe endless groves and glades of the Sandhill wilderness aboutCarberry. The water in the numerous marshy ponds was warm with the sunheat, so Yan cut across to the trail spring, the only place in thecountry where he might find a cooling drink. As he stooped beside ithis eye fell on a small hoof-mark in the mud, a sharp and eleganttrack.", img: ""},
                          {owner: "no", text: "Yes? And whats the next?", img: ""}]}, 
        {idAndName: {id:2, name:"Sergey"}, id:2, name:"Sergey", ava: img, messages: [
                          {owner: "me", text: "I am Jenna!", img: "https://i.pinimg.com/236x/11/a6/20/11a620fe40cd054fa7cf955798104b7c--miracle-search.jpg"},
                          {owner: "no", text: "Good", img: ""},
                          {owner: "no", text: "Will u ever be serious?", img: ""}]},
        {idAndName: {id:3, name:"Elena"}, id:3, name:"Elena", ava:" https://pbs.twimg.com/profile_images/684043952425709569/yCEyneCv_400x400.jpg", messages: [        
                          {owner: "me", text: "В первом сезоне исполняла роль исполнительного продюссера, во втором — консультирующего продюссера. На протяжении первого сезона общалась с фанатами и отвечала на их вопросы на своей страничке DeviantArt.", img: ""},
                          {owner: "no", text: "Вскоре после выхода последней серии первого сезона, Фауст заявила, что покидает сериал. Её роль во втором сезоне заметно уменьшилась, и теперь она (но не полностью) отвечает только за концепцию истории и сценарий, в то время как на протяжении первого сезона она отвечала за каждую деталь. ", img: ""}]},
       {idAndName: {id:4, name:"Oleg"}, id:4, name:"Oleg", ava: "https://i.pinimg.com/originals/b2/67/fd/b267fd416ac8b4f8727dedef55ee88ab.png" , messages: [
                         {owner: "no", text: "Lacedaemonius quidam, cuius ne nomen quidem proditum est, mortem tantopere contempsit, ut, cum ad eam1 duceretur damnatus ab ephoris et esset vultu hilari atque laeto, dixissetque ei quidam inimicus: «Contemnisne leges Lycurgi?»3, responderit2: «Ego vero illi maximam gratiam habeo,", img: ""},
                         {owner: "no", text: "qui me eā poenā multaverit, quam sine mutuatione et sine versura possem dissolvere4.» O virum Sparta dignum!5 Ut mihi quidem, qui tam magno animo6 fuerit, innocens damnatus esse videatur7.", img: ""},
                         {owner: "me", text: "???", img: ""}]},
       {idAndName: {id:5, name:"Jenna"}, id:5, name:"Jenna", ava: img, messages: [
                        {owner: "me", text: `Компонент работает и импортируется, но почему-то возникает ошибка:
                        {
                        "resource": "/d: /projects/ 111111111/frontend/src/ components/Header/ Index.js",
                        "owner": "eslint",
                        "code": "import/ no-unresolved",
                        "severity": 8,`, img: "https://i.ytimg.com/vi/qDnROJwDYqA/mqdefault.jpg"},
                        {owner: "no", text: "регистр букавок в названии файла проверьте", img: ""},]},
      {idAndName: {id:6, name:"Kate"}, id:6, name:"Kate", ava: img, messages: [
                        {owner: "me", text: "Hi!", img: ""},
                        {owner: "no", text: "Hi!", img: ""},]},
      ],
    }

let DialodsReducer = (state = initialState, action) => {
   switch (action.type) {
     case SEND_NEW_MESSAGE_TEXT : {
       debugger
       let actionId;
       if (!action.id){
          actionId = document.URL.substr(30)
       } else {actionId = action.id}
       if (!actionId){actionId = 0}
       let stateCopy = JSON.parse(JSON.stringify(state));
       for(let i=0; i<50; i++){
         if (!!stateCopy.DialogsData[i]){
          if(stateCopy.DialogsData[i].id == actionId){
            stateCopy.DialogsData[i].messages.push({owner: "me", text: action.textFromUser, img: action.img})
           }
         }
       }
      return stateCopy;
    }
     case ADD_NEW_FRIEND : {
       let stateCopy = JSON.parse(JSON.stringify(state));
       stateCopy.DialogsData.push({idAndName: {id:action.id, name:action.name}, 
                                   id:action.id, name:action.name, ava: img, 
                                   messages: [{owner: "me", text: "I add you to contact!", img: ""}]})
       return stateCopy;
     }
     default:
       return state;
    }
 }

export default DialodsReducer;

export const AddNewFriendAC = (name, id) => {
  return { 
    type: ADD_NEW_FRIEND,
    name: name,
    id: id,
  }
}
export const sendNewMessageTextActionCrerator = (text, id, img) => {
  return {
    type: SEND_NEW_MESSAGE_TEXT,
    textFromUser: text,
    id: id,
    img: img,
  }
}
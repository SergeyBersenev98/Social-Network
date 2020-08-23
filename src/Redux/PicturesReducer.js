
const ADD_PICTURE = "ADD-PICTURE"
const DELETE_PICTURE = "DELETE-PICTURE"

let initialState = {
  picturesQuantity : 6,
  picturesData : [{id: 0, 
                   url: 'https://avatars.mds.yandex.net/get-zen_doc/1602486/pub_5d014b7628f8b800adee98db_5d014bd0d0c8c500ac6a332b/scale_1200'}, 
                  {id: 1,
                   url: 'https://pbs.twimg.com/media/BYdW0cgCQAATK3B.jpg:large'},
                  {id: 2, 
                   url: 'https://avatars.mds.yandex.net/get-pdb/1543238/86e03855-5e5d-4eb4-85b1-e12fb85ef557/s1200?webp=false'},
                  {id: 3, 
                   url: 'https://ya-odarennost.ru/code/image.php?width=960&image=68706_1566911786.jpeg'},
                  {id: 4,
                   url: 'https://pbs.twimg.com/media/D8hOenBWsAATQvX.jpg:large'},
                  {id: 5,
                   url: 'https://7themes.su/php/imres/resize.php?width=960&height=600&cropratio=16:10&image=/_ph/55/761063418.jpg'},
                  {id: 6,
                   url: 'https://avatars.mds.yandex.net/get-pdb/2074318/2708dbd8-b731-451f-aedc-86b6d6a2ead9/s1200?webp=false'}]
      }
let PicturesReducer = (state = initialState, action) => {
   switch (action.type) {
     case ADD_PICTURE : {
      let stateCopy = JSON.parse(JSON.stringify(state))
      stateCopy.picturesQuantity = stateCopy.picturesQuantity++
      stateCopy.picturesData.push({id: state.picturesQuantity, url: action.picture})
       return stateCopy
         } 
    case DELETE_PICTURE : {
      let stateCopy = JSON.parse(JSON.stringify(state))
        for (let i=0; i<1000; i++){ 
          if (stateCopy.picturesData[i].id === action.id){    
              stateCopy.picturesData.splice(i, 1)
          break}
          }
       return stateCopy
        }
     default:
       return state; 
    } 
 }

export const addPictureAC = (picture) => {
  return {
    type: ADD_PICTURE,
    picture: picture,
    }
  }
export const deletePictureAC = (id) => {
  return {
    type: DELETE_PICTURE,
    id: id,
    }
  }

export default PicturesReducer;

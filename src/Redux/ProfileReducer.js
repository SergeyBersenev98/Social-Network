import {getProfileAPI, getStatusAPI, updateStatusAPI, savePhotoAPI, saveProfileAPI} from '../API/API.js'

const SAVE_PHOTO = 'SAVE-PHOTO'
const TO_ADD_POST = 'TO-ADD-POST'
const ALL_INFO_ABOUT_USER = 'ALL-INFO-ABOUT-USER'
const SET_STATUS = 'SET-STATUS'
const SAVE_PROFILE = 'SAVE-PROFILE'
const LIKE = 'LIKE'

let initialState = {
    PostsData : [{text: "Orbilius notus magister est. Puмri Romāni Orbilii magistri scholam frequentant. Orbilii schola privāta est. Nam Romāni scholas publĭcas non habent.", likes: 4, wasLiked: false, id: 2},
                 {text: "Inter puĕros Horatius quoque est. Horatius Orbilium magistrum non amat. Nam Orbilius sevērus est et puмros plagis terrēre solet. Itгque puмri Orbilium magistrum plagōsum appellant.", likes: 3, wasLiked: false, id:1},
                 {text: "Multi apud Graecos clari medĭci sunt. Primus Graecōrum medĭcus Aesculapius est, vir doctus, perītus et ingeniōsus. Postea Aesculapius medicōrum deus est. In libris Homēri de libмris Aesculapii legĭmus.", likes: 7, wasLiked: false, id:0},],

      Profile : " ",
      status: "",
      photo: 'https://lh3.googleusercontent.com/proxy/v91qca59eamAI920aVTF7L7yewS6-bwsGKgE6KPvxW3SGOmhhPnp9DKQEWnyncJhEZ9YQ5z4epvfFdiZGI6KO8Wnt6tX5GcDKpg'
}
    

let ProfileReducer = (state = initialState, action) => {
  switch (action.type) {  
    case TO_ADD_POST : {
      let basicPost = { text: action.postFromUser, likes: 0, wasLiked: false, id: state.PostsData.length}; 
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
    case SAVE_PHOTO : {
      let stateCopy = {...state, photo: action.photo}
      return stateCopy
    }
    case LIKE : {
      let stateCopy = JSON.parse(JSON.stringify(state))
/*here we get number id as reverse of arr.length (for id = 2 arr.length = n  - 1 (for [0]) - 2)*/
    if (stateCopy.PostsData[stateCopy.PostsData.length - 1 - action.id].wasLiked === false){
      stateCopy.PostsData[stateCopy.PostsData.length - 1 - action.id].wasLiked = true;
      stateCopy.PostsData[stateCopy.PostsData.length - 1 - action.id].likes++
    } else {
      stateCopy.PostsData[stateCopy.PostsData.length - 1 - action.id].wasLiked = false;
      stateCopy.PostsData[stateCopy.PostsData.length - 1 - action.id].likes--
    }
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
export const savePhoto = (photo) => {
  if (photo.resultCode === 1) {
    alert('Something went wrong! Server return Result Code 1')
  }
  return {
    type: SAVE_PHOTO,
    photo: photo,
  }
}
export const saveProfile = (profile) => {
  return {
    type: SAVE_PROFILE,
    profile: profile,
  }
}
export const likeAC = (id) => {
  return {
    type: LIKE,
    id:id,
  }
}
//THUNKS
export const getProfileThunk = (userId) => {
  return (dispatch) =>{getProfileAPI(userId).then(response => {
      this.props.allInfoAboutUserAC(response.data)}
                        )
            }
}
export const savePhotoThunk = (photo) => {
  return (dispatch) =>{savePhotoAPI(photo).then(response => {
      dispatch(savePhoto(response.data))
  })}
}
export const getStatus = (userId) => {
  return (dispatch) => {getStatusAPI(userId).then(response => {
    dispatch(setStatus(response.data))
  })}
}
export const updateStatus = (status) => {
  return (dispatch) => {updateStatusAPI(status).then( response => {
    if (response.data.resultCode === 0) {getStatusAPI(9365).then(response => {
    dispatch(setStatus(response.data))
    })
  }}
)}
}
export const saveProfileThunk = (profile) => {
  return (dispatch) => {saveProfileAPI(profile).then(
    response => {
      if (response.data.resultCode !== 0){
        dispatch(allInfoAboutUserAC(profile, "edit-profile", {_error: response.data.messages}))
        console.log(response.data.messages)
      }
     dispatch(allInfoAboutUserAC(profile))
  })}
  }

export default ProfileReducer;










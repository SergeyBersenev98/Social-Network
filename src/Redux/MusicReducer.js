const CHANGE_PLAYER_VISABILITY = 'CHANGE_PLAYER_VISABILITY'
const PLAYER_WAS_ADDED = "PLAYER-WAS-ADDED"
const CHANGE_RIGHTBAR_VISABILITY = "CHANGE-RIGHTBAR-VISABILITY"

let initialState = {visability : true,
                    playerWasAdded : false,
                    rightbarVisability : true}

let MusicReducer = (state = initialState, action) => {
   switch (action.type) {
     case CHANGE_PLAYER_VISABILITY : {
       let stateCopy = {...state, visability : !state.visability}
        return stateCopy
     }
     case PLAYER_WAS_ADDED : {
       let stateCopy = {...state, playerWasAdded : true}
        return stateCopy
     }
     case CHANGE_RIGHTBAR_VISABILITY : {
       let stateCopy = {...state, rightbarVisability : !state.rightbarVisability}
        return stateCopy
     }
     default:
       return state;
    }
 }

export const changePlayerVisabilitydAC = () => {
  return { type: CHANGE_PLAYER_VISABILITY }
}
export const playerWasAddedAC = () => {
  return { type : PLAYER_WAS_ADDED }
}
export const changeRightbarVisabilityAC = () => {
  return { type: CHANGE_RIGHTBAR_VISABILITY }
}
  
export default MusicReducer;

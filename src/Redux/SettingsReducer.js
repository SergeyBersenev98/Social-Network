
const CHANGE_THEME = "CHANGE-THEME"

let initialState = {
  darkTheme : false
      }

let SettingsReducer = (state = initialState, action) => {
   switch (action.type) {
     case CHANGE_THEME : {
       let stateCopy = {...state, darkTheme: !state.darkTheme}
        return stateCopy
      }
     default:
       return state; 
    } 
 }

export const changeThemeAC = () => {
  return {
    type: CHANGE_THEME,
    }
  }


export default SettingsReducer;

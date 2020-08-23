import Settings from './Settings.jsx'   
import {changeThemeAC} from '../../Redux/SettingsReducer.js'
import {connect} from 'react-redux'
import {AuthRedirect} from '../../HOC/AuthRedirect.js'
import {compose} from 'redux'


let f1 = (state) => {
  return{
    theme: state.Settings.darkTheme
  }}

let f2 = (dispatch) => {
  return{
    changeThemeAC: () => {dispatch(changeThemeAC())}
  }}

export default compose(
  connect(f1, f2),
  AuthRedirect,
)(Settings);

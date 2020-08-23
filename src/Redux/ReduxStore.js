import {combineReducers, createStore, applyMiddleware} from 'redux';
import ProfileReducer from './ProfileReducer'
import DialogsReducer from './DialogsReducer'
import MusicReducer from './MusicReducer'
import PicturesReducer from './PicturesReducer'
import UsersPageReducer from './UsersPageReducer'
import AuthorizationReducer from './AuthorizationReducer'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer } from 'redux-form'
import AppReducer from './AppReducer.js'
import SettingsReducer from './SettingsReducer'


let reducers = combineReducers({
  App : AppReducer,
  Profile : ProfileReducer,
  Dialogs : DialogsReducer,
  UsersPage : UsersPageReducer,
  AuthorizationUser : AuthorizationReducer,
  form: formReducer,
  Music: MusicReducer,
  Settings: SettingsReducer,
  Pictures: PicturesReducer
})
let store = createStore (reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
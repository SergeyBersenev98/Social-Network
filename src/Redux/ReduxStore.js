import {combineReducers, createStore, applyMiddleware} from 'redux';
import ProfileReducer from './ProfileReducer'
import DialogsReducer from './DialogsReducer'
import UsersPageReducer from './UsersPageReducer'
import AuthorizationReducer from './AuthorizationReducer'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer } from 'redux-form'
import AppReducer from './AppReducer.js'
let reducers = combineReducers({
  App : AppReducer,
  Profile : ProfileReducer,
  Dialogs : DialogsReducer,
  UsersPage : UsersPageReducer,
  AuthorizationUser : AuthorizationReducer,
  form: formReducer,
})
let store = createStore (reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
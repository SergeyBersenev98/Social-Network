import {combineReducers, createStore, applyMiddleware} from 'redux';
import ProfileReducer from './ProfileReducer'
import DialogsReducer from './DialogsReducer'
import UsersPageReducer from './UsersPageReducer'
import AuthorizationReducer from './AuthorizationReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  Profile : ProfileReducer,
  Dialogs : DialogsReducer,
  UsersPage : UsersPageReducer,
  AuthorizationUser : AuthorizationReducer,
})
let store = createStore (reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
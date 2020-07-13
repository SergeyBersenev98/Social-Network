import {combineReducers, createStore} from 'redux';
import ProfileReducer from './ProfileReducer'
import DialogsReducer from './DialogsReducer'
import UsersPageReducer from './UsersPageReducer'

let reducers = combineReducers({
  Profile : ProfileReducer,
  Dialogs : DialogsReducer,
  UsersPage : UsersPageReducer
})
let store = createStore (reducers);
window.store = store;

export default store;
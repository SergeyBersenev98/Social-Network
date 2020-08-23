import Pictures from './Pictures.jsx'   
import {addPictureAC, deletePictureAC} from '../../Redux/PicturesReducer.js'
import {sendNewMessageTextActionCrerator} from '../../Redux/DialogsReducer.js'
import {connect} from 'react-redux'
import {AuthRedirect} from '../../HOC/AuthRedirect.js'
import {compose} from 'redux'

let f1 = (state) => {
  return{
    pictures: state.Pictures,
    idAndName: state.Dialogs.DialogsData.map((d) => {
      return d.idAndName})
  }}

let f2 = (dispatch) => {
  return{
    addPictureAC: (picture) => {dispatch(addPictureAC(picture))},
    deletePictureAC: (picture) => {dispatch(deletePictureAC(picture))},
    sendPictures: (text, id, img) => {dispatch(sendNewMessageTextActionCrerator(text, id, img))}
  }}

export default compose(
  connect(f1, f2),
  AuthRedirect,
)(Pictures);

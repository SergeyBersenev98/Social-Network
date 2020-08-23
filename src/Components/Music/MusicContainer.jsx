import Music from './Music.jsx'   
import {changeRightbarVisabilityAC, changePlayerVisabilitydAC, playerWasAddedAC} from '../../Redux/MusicReducer.js'
import {connect} from 'react-redux'

let f1 = (state) => {
  return{
    visability: state.Music.visability,
    rightbarVisability: state.Music.rightbarVisability,
    playerWasAdded: state.Music.playerWasAdded,
  }}

let f2 = (dispatch) => {
  return{
    changePlayerVisabilitydAC: () => {dispatch(changePlayerVisabilitydAC())},
    playerWasAddedAC: () => {dispatch(playerWasAddedAC())},
    changeRightbarVisabilityAC: () => {dispatch(changeRightbarVisabilityAC())}
  }}


const MusicContainer = connect(f1, f2)(Music);

export default MusicContainer

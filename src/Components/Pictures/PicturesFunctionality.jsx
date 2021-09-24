import React, {useState} from 'react';
import classes from './Pictures.module.css'
import SendPictures from './SendPictures.jsx'                   
 
const PicturesFunctionality = (props) =>{
  let [fullSize, setFullSize] = useState (false);
  const setSize = () => {
    setFullSize(!fullSize);
    }
  
  let [showUsers, setShowUsers] = useState (false);
  const usersToSend = () => {
    setShowUsers(!showUsers)};  
  
  let usersRender = props.idAndName.map(u => <div className = {classes.showUsers}><SendPictures idAndName={u} sendPictures =  {props.sendPictures} url = {props.picture.url}/></div>)
  
  const deletePhoto = () => {
    props.deletePicture(props.picture.id)
  }

  return(
    <div>
      {fullSize
        ? <div>
            <div className = {classes.blur}>
              <div className = {classes.bigPicture}>
                <img src = {props.picture.url} onClick = {setSize} alt = "big"></img>
              </div>          
            </div> <div className = {classes.smallPicture} >
                <img src = {props.picture.url} onClick = {setSize} alt = "small"></img>
                <div className = {classes.functionButtons}>
                  <div>
                    <button>Send</button>}
                  </div>
                  <div>
                    <button>Delete</button>
                  </div>
                </div>
              </div>
          </div>
        : <div>
            <div className = {classes.smallPicture} >
              <img src = {props.picture.url} onClick = {setSize}  alt = "small"></img>
              <div className = {classes.functionButtons}>
                <div>
                  {showUsers
                  ? <div><button onClick = {usersToSend}>Send</button>
                      <div className = {classes.usersRender}>{usersRender}</div></div>
                  : <button onClick = {usersToSend}>Send</button>}
                </div>
                <div>
                  <button onClick = {deletePhoto}>Delete</button>
                </div>
              </div>
            </div>
          </div>}
        </div>)
}
export default PicturesFunctionality

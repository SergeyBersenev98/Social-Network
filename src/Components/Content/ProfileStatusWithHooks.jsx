import React, {useState, useEffect} from 'react';
import classes from './Profile.module.css'

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false)
  const activateEditMode = () => {props.owner ? setEditMode(true) : setEditMode(false)}
  const deactivateEditMode= () => {setEditMode(false)
                                     props.updateStatus(status)}  
  let [status, setStatus] = useState(props.status)
  const onChangeStatus = (e) => {setStatus(e.currentTarget.value)}
  useEffect(()=>{setStatus(props.status)}, [props.status]) //useEffect depends on [props.status]
    return(
          <div>
            {!editMode &&
              <div className={classes.status}>    
                <span onClick = {activateEditMode}>{props.status || "no status yet" }</span>
              </div>
            }
            {editMode &&
              <div className={classes.statusOff}>
                <input onChange = {onChangeStatus} onBlur = {deactivateEditMode} autoFocus = {true} value = {status}/>
              </div>
            }
          </div>
      )
  }

export default ProfileStatusWithHooks;


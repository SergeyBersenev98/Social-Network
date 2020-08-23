import React, {useState, useEffect} from 'react';
import classes from './Profile.module.css'




const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false)
    const activateEditMode = () => {setEditMode(true)}
    const deactivateEditMode= () => {setEditMode(false)
                                    props.updateStatus(status)}  
    
  let [status, setStatus] = useState(props.status)
    const onChangeStatus = (e) => {setStatus(e.currentTarget.value)}

  useEffect(()=>{setStatus(props.status)}, [props.status]) //useEffect depends on [props.status]
  
    return(
          <div className={classes.profile}>
            { !editMode &&
            <div>
              <span onDoubleClick = {activateEditMode}>{props.status || "----" }</span>
            </div>
            }
            { editMode &&
            <div>
              <input onChange = {onChangeStatus} onBlur = {deactivateEditMode} autoFocus = {true} value = {status}/>
            </div>
            }
          </div>
      )
  }


export default ProfileStatusWithHooks;


import React, {useState} from 'react';
import classes from './Pictures.module.css'          
import {Field, reduxForm} from 'redux-form'
import {Input} from '../Common/FormControls.jsx'
import PicturesFunctionality from './PicturesFunctionality.jsx'

const Pictures = (props) => {
  let [editMode, setEditMode] = useState (false);
  const toEditMode = () => {
    setEditMode(!editMode);
    }

    let addNewPhoto = (values) => {
      toEditMode();
      props.addPictureAC(values.picture)
    }
  
  let PicturesRender = props.pictures.picturesData.map(p => <div className = {classes.picture}  key = {p.id}><PicturesFunctionality picture = {p} deletePicture = {props.deletePictureAC} idAndName = {props.idAndName} sendPictures = {props.sendPictures}/></div>);
                                            
  return(
    <div className={classes.PicturesAlbum}>
      {PicturesRender}
      <button onClick = {toEditMode}>Add more</button>
      {editMode                                    
      ? <PicturesWithReduxForm  onSubmit = {addNewPhoto}/>
      : <div></div>}
    </div>
  )
}

  let PictureForm = (props) => {
    return (   
      <form onSubmit = {props.handleSubmit} className = {classes.formForURL} >
         <div>
           <div className = {classes.inputAndButton}>
             <Field placeholder = {"Write picture URL here..."} name = {"picture"} component={Input} className = {classes.PictureURLInput}/>
             <button>Send!</button>
           </div>
          <div>For example:</div>
          <div>https://avatars.mds.yandex.net/get-pdb/1543238/034fccab-fe4a-4a66-aa0b-23e8791df44d/s1200?webp=false</div>
          <div>https://avatars.mds.yandex.net/get-pdb/1689155/f8adfc4a-2033-421a-bde6-a65bf568e265/s1200?webp=false</div>
        </div>
        <div></div>
     </form>)
    }



const PicturesWithReduxForm = reduxForm({
  form: 'picture'
})(PictureForm)

export default Pictures

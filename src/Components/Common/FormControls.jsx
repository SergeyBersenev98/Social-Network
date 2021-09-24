import React from 'react';
import classes from './FormControl.module.css'
import {Field} from 'redux-form'

export const Textarea  = ({input, meta, ...props}) => { //исключили из propsов input и meta (rest оператор)
  const hasError = meta.touched && meta.error
  return(
    <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
      <div>
        <textarea {...input} {...props}/> 
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Input = ({input, meta, ...props}) => { //исключили из propsов input и meta (rest оператор)
  const hasError = meta.touched && meta.error
  return(
    <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
      <div>
        <input {...input} {...props}/> 
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const createField = ({placeholder, name, component, props = {}, text = ""}) => (
<div>
  <Field placeholder = {placeholder}
         name = {name}
         component = {component}
         {...props} />
  {text}
</div>)






























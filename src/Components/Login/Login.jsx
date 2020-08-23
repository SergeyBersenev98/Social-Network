import React from 'react';   
import classes from './Login.module.css'
import {Field, reduxForm} from 'redux-form'
import {Input} from '../Common/FormControls.jsx'
import {required} from '../Utils/Validators/Validator.js'
import {connect} from 'react-redux'
import {loginThunk} from '../../Redux/AuthorizationReducer'
import {Redirect} from 'react-router-dom'
import errorStyle from '../Common/FormControl.module.css'
//import {AuthorizationUser} from '../../Redux/ReduxStore.js'

const LoginForm = (props) => { 
  return (
    <form onSubmit = {props.handleSubmit}>
      <div>
        <Field placeholder = {"Login"} name = {"login"} component={Input} validate={[required]}/>
      </div>
      <div>
        <Field placeholder = {"Password"} name = {"password"} component={Input} validate={[required]} type = {"password"}/>
      </div>
      <div>
        <Field type = {"checkbox"} name = {"rememberMe"} component={Input} />
        remember me
      </div>
      {props.error && <div className = {errorStyle.formSummaryError}>
      {props.error}
      </div>
        }
      <div>
        <button>Login!</button>
      </div>
    </form> 
  )
}

const LoginReduxForm = reduxForm({
  form : 'login'
})(LoginForm)

const Login = (props) => {
  
  const onSubmit = (formData) => {
    props.loginThunk(formData.login, formData.password, formData.rememberMe)
  }
  
  if (props.isAuth) {
    return <Redirect to = {"/profile"} />
  }
  
  return (
  <div>
    <h1>Login here</h1>
    <LoginReduxForm onSubmit = {onSubmit}/>
  </div>
    )
}

const f1 = (state) => ({
  isAuth : state.AuthorizationUser.isAuth
})

export default connect(f1, {loginThunk})(Login)
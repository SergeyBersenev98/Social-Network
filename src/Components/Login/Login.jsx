import React from 'react';   
import classes from './Login.module.css'
import {Field, reduxForm} from 'redux-form'
import {Input} from '../Common/FormControls.jsx'
import {required} from '../Utils/Validators/Validator.js'
import {connect} from 'react-redux'
import {loginThunk} from '../../Redux/AuthorizationReducer'
import {Redirect} from 'react-router-dom'
import errorStyle from '../Common/FormControl.module.css'

const LoginForm = (props) => {
  return (
    <form className = {classes.mainForm} onSubmit = {props.handleSubmit}>
      <h1>login and password</h1>
      <div>
        <div>
          <div>Login</div>
          <Field placeholder = {"Login"} name = "login" component={Input} validate={[required]} 
            className = {classes.mainFormLoginInput}/>
       </div>
      <div>
        <div>Password</div>
        <Field placeholder = {"Password"} name = "password" component={Input} validate={[required]} type = {"password"}
          className = {classes.mainFormPasswordInput}/>
      </div>
      <div>
        <Field type = {"checkbox"} name = {"rememberMe"} component={Input} />
        <div>remember me</div>
      </div>
      </div>
      {props.error && 
        <div className = {errorStyle.formSummaryError}>
          {props.error}
        </div>
      }
      <div className = {classes.mainFormButton}>
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
    <div className = {classes.mainBorder}>
      <h1>Welcome!</h1>
      <h2>To start working with TS social network enter your username and password</h2>
      <LoginReduxForm onSubmit = {onSubmit}/>
    </div>
    )
}

const f1 = (state) => ({
  isAuth : state.AuthorizationUser.isAuth
})

export default connect(f1, {loginThunk})(Login)
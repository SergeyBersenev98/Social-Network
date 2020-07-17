import React from 'react';   
import classes from './UsersPage.module.css'
import {NavLink} from 'react-router-dom'

let UsersPage = (props) => {

  let FollowingStatus = (value) => {
    props.changeFollowingStatus(value.target.value)
  } 
  
  let pagesArray = []
 
  let pagesQuantity = Math.ceil(props.usersQuantity/props.usersInPage);  
    for (let i = 1; i <= pagesQuantity; i++) {
      pagesArray.push(i)
    }


  
    
  return <div> 
          <div>
            {pagesArray.map(i => {
            return <span className = {props.currentPage === i 
                ? classes.currentPage 
                : classes.no} onClick = {(e) => {props.onPageChanged(i)}} >{i + " "}</span>})}  
          </div>
    
    {props.users.map( u => {return <div className = {classes.usersPage}>
      <NavLink to = '/profile'>
     <img src={u.photos.small !== null ? u.photos.small : "https://clck.ru/Pbd5H"}></img>
      </NavLink>
      <div className = {classes.usersName}>
      {u.name}
      </div>
      <div>
      {u.description}
      </div>
      <div>
      </div>   
      <div>
        {u.followed
          ? <button onClick = {FollowingStatus} value = {u.id}>unfollow</button>           
          : <button onClick = {FollowingStatus} value = {u.id}>follow</button>                 
          }
      </div>
    </div>})}
  </div>
  }


export  default UsersPage

/*onClick = { 
                (e) => {props.onPageChanged(i)}}*/

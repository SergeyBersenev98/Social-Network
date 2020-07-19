import React from 'react';   
import classes from './UsersPage.module.css'
import {NavLink} from 'react-router-dom'
import * as axios from 'axios' 

let UsersPage = (props) => {

  let FollowingStatus = (value) => {
    debugger;
    props.changeFollowingStatus(value)
    debugger
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
      <NavLink to = {'/profile/' + u.id}>
     <img src={u.photos.small !== null ? u.photos.small : "https://clck.ru/Pbd5H"}></img>
      </NavLink>
      <div className = {classes.usersName}>
      {u.name}
      </div>
      <div>
      {u.description}
      </div>  
      <div>
        
        {u.followed
         
         
          ? <button onClick = {()=>{
          
             axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials : true, headers: {"API-KEY": "a4ba89cd-2d03-49f7-8ec7-417c749906a7"}}).
              then(response => {
      if (response.data.resultCode === 0) FollowingStatus(u.id)})
       } }
               value = {u.id}>unfollow</button> 
          

          
          : <button onClick = {()=>{
            
              axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials : true, headers: {"API-KEY": "a4ba89cd-2d03-49f7-8ec7-417c749906a7"}}).
              then(response => {
      if (response.data.resultCode === 0) FollowingStatus(u.id)})
       } }
            

             value = {u.id}>follow</button>                 
          }
      </div>
    </div>})}
  </div>
  }


export  default UsersPage

/*onClick = { 
                (e) => {props.onPageChanged(i)}}*/

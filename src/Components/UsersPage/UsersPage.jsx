import React, {useState} from 'react';   
import classes from './UsersPage.module.css'
import {NavLink} from 'react-router-dom'
import nophoto from '../Common/nophoto.PNG'

let UsersPageWithHooks = (props) => {
  let [previousNum, setPreviousNum] = useState(0)
  let usersInPage = 5;
  const previous = () => {setPreviousNum(previousNum-usersInPage)}
  const future = () => {setPreviousNum(previousNum+usersInPage)}
  let futureNum = previousNum + usersInPage;
  let pagesArray = []
  let pagesQuantity = Math.ceil(props.usersQuantity/props.usersInPage);  
    for (let i = 1; i <= pagesQuantity; i++) {
      pagesArray.push(i)
    }

  return (
    <div className = {classes.allPage}> 
      <div className = {classes.previousAndFutures}> 
        <button onClick = {previous} disabled = {previousNum<1 ? "disabled" : ""}>previous</button>
          {pagesArray
            .filter(i => i>previousNum && i<=futureNum)
            .map(i => {
              return <span key = {i} className = {props.currentPage === i 
                ? classes.currentPage 
                : classes.no} onClick = {(e) => {props.onPageChanged(i)}} ><b>{i}&nbsp; </b></span>})}
        <button onClick = {future} disabled = {futureNum>pagesQuantity ? "disabled" : ""}>future</button>
      </div>
      {props.users.map( u => {return <div className = {classes.usersPage} key = {u.id}>
      <div className = {classes.usersName}>
        <div className = {classes.nameAndAva}>
          <NavLink to = {'/profile/' + u.id}>
            <img src={u.photos.small !== null ? u.photos.small : nophoto} alt = "smallPhoto"></img>
          </NavLink>
          {u.name}
        </div>
          <div>
          {u.description}
          </div>  
        <div>
          {u.followed
            ? <button disabled = {props.followingInProgress} 
                      onClick = {()=>{props.unfollowThunk(u.id)}}
                      value = {u.id}>unfollow</button> 
            : <button disabled = {props.followingInProgress} 
                      onClick = {()=>{props.AddNewFriend(u.name, u.id); 
                                      props.followThunk(u.id)}}
                      value = {u.id}>follow</button>                 
            }
        </div>
      </div>
    </div>})}
   </div>)
  }

export  default UsersPageWithHooks

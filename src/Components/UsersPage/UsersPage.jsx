import React from 'react';               
import classes from './UsersPage.module.css'
import * as axios from 'axios' 

class UsersPage extends React.Component {

  constructor (props) {
  super (props)
  }
  
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.usersInPage} `).then(response => {this.props.setUsers(response.data.items)
                         this.props.usersQuantity(response.data.totalCount)
                        }
           )
    }

  FollowingStatus = (value) => {
    this.props.changeFollowingStatus(value.target.value)
  } 
  onPageChanged = (page) => {
    this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page
                  }&count=${this.props.state.usersInPage} `).then(response => {this.props.setUsers(response.data.items)
         
                            }
               )
  }
  
  render = () => {
   
 let pagesArray = []
 let pagesQuantity = Math.ceil(this.props.state.usersQuantity/this.props.state.usersInPage);  
     for (let i = 1; i <= pagesQuantity; i++){
        pagesArray.push(i)
        }
  return <div> 
          <div>
            {pagesArray.map(i => {
            return <span className = {this.props.state.currentPage === i 
                ? classes.currentPage 
                : classes.no} onClick = { 
                (e) => {this.onPageChanged(i)}}>{i + " "}</span>})}  
          </div>
    
    {this.props.users.map( u => {return <div className = {classes.usersPage}>
     <img src={u.photos.small !== null ? u.photos.small : "https://clck.ru/Pbd5H"}></img>
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
          ? <button onClick = {this.FollowingStatus} value = {u.id}>unfollow</button>                            
          : <button onClick = {this.FollowingStatus} value = {u.id}>follow</button>                         
          }
      </div>
    </div>})}
  </div>
  }
}

export  default UsersPage

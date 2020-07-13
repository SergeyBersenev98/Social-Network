import React from 'react';
import classes from './OldPosts.module.css'
import {connect} from "react-redux"
import OldPosts from './OldPosts.jsx'



/*const OldPostsContainer = (props) => {
let PostsRender = props.PostsData.map((t) => {
  return(
    <div>
        <img src="https://i.pinimg.com/originals/ed/99/fd/ed99fd664f97c90a224ef435b8a71ba8.jpg"></img>
        {t.text}
      </div> 
  )
})

  return(
      <div className={classes.post}>
        {PostsRender}
      </div>
  )
  
  return (<OldPosts OldPostContainer = {OldPostContainer}/>)
}
*/
let f1 = (state) => {
  return {
    PostsRenderContainer : state.Profile.PostsData
  }
}

const OldPostsContainer = connect(f1)(OldPosts)

export default OldPostsContainer;


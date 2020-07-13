import React from 'react';
import classes from './OldPosts.module.css'
import OldPostsContainer from './OldPostsContainer.jsx'




const OldPosts = (props) => {
let PostsRender = props.PostsRenderContainer.map((t) => {
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
}

export default OldPosts;


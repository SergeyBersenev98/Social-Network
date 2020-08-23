import React from 'react';   
import classes from './Music.module.css'
import Twi from '../Common/loadingTwilight.gif'

class Music extends React.Component {
  componentDidMount(){
    document.body.lastChild.previousSibling.style.opacity = 0.8;
    document.body.lastChild.previousSibling.style.width = 320 + 'px'
    if (this.props.playerWasAdded === false) {
      let importCdn = document.createElement('script');
                      document.getElementById("root").appendChild(importCdn);
                      importCdn.setAttribute('src', 'https://apps.elfsight.com/p/platform.js')
          
  const isPlayerReady = () => {
    setTimeout(()=>{ 
      if (document.body.lastChild.firstChild !== null && 
          document.body.lastChild.previousSibling.style !== undefined){
            this.props.playerWasAddedAC();
          document.body.lastChild.firstChild.remove();
          document.body.lastChild.previousSibling.style.opacity = 0.8;  
          document.body.lastChild.previousSibling.style.height =      //height controling right bar 
            (Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight, 
            document.body.offsetHeight, document.documentElement.offsetHeight, 
            document.body.clientHeight, document.documentElement.clientHeight) - 129 + "px" )                       
    } else {isPlayerReady()}}, 500) 
  }
  isPlayerReady()

  } else {document.body.lastChild.previousSibling.style.display = "block";
          document.body.lastChild.previousSibling.style.opacity = 0.8;
          document.body.lastChild.style.display = "block";}
  }
  
componentWillUnmount(){
  if (this.props.rightbarVisability === false){
    document.body.lastChild.previousSibling.style.display = "none";
  } else {
    document.body.lastChild.previousSibling.style.opacity = 0.4;
    document.body.lastChild.previousSibling.style.width = 90 +'px';                       
   }
  if (this.props.visability === false){
    document.body.lastChild.style.display = "none"}
   }

changePlayerVisability = () => {this.props.changePlayerVisabilitydAC()};
changeRightbarVisability = () => {this.props.changeRightbarVisabilityAC()}

render(){ 
  return (
    <div>
      <div className = {classes.mainBorder}>
        {this.props.visability 
        ? <button onClick = {this.changePlayerVisability}>Newer remove player : true</button>
        : <button onClick = {this.changePlayerVisability}>Newer remove player : false</button>}

        {this.props.rightbarVisability 
        ? <button onClick = {this.changeRightbarVisability}>Newer remove rightbar : true</button>
        : <button onClick = {this.changeRightbarVisability}>Newer remove rightbar : false</button>}

        {this.props.playerWasAdded
        ? <div></div>
        : <div><img src = {Twi} alt = "loading"></img><div className = {classes.loading}>Player is loading...</div></div>}
      </div> 
        {this.props.playerWasAdded === false 
        ? <div className="elfsight-app-45e02ba0-aef0-4a28-be1d-14dbb13eb9b9"></div>
        : <div></div>}
    </div>  
  )
}}
export default Music



















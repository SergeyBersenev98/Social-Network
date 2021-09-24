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

              if (document.documentElement.clientWidth < 746){
                document.body.lastChild.previousSibling.style.position = "relative"
                document.body.lastChild.previousSibling.style.marginRight = "auto"
                document.body.lastChild.previousSibling.style.marginLeft = "auto"
                document.body.lastChild.previousSibling.style.height = 250 + "px";
                document.body.lastChild.previousSibling.style.marginTop = -document.documentElement.clientHeight + 500 + "px"
                document.body.lastChild.previousSibling.style.width = 80 + "%"
              }else{

          document.body.lastChild.previousSibling.style.height =   //height controling right bar 
            (Math.max(document.documentElement.clientHeight) - 129 + "px" )       
              }
            



    } else {isPlayerReady()}}, 1500) 
  }
  isPlayerReady()

  } else {document.body.lastChild.previousSibling.style.display = "block";
          document.body.lastChild.previousSibling.style.opacity = 0.8;
          document.body.lastChild.style.display = "block";}
  }
  
componentWillUnmount(){
  if (this.props.rightbarVisability === false || document.documentElement.clientWidth < 746){
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
        <div>Settings</div>
        {this.props.visability 
        ? <button onClick = {this.changePlayerVisability}>Never remove player : yes</button>
        : <button onClick = {this.changePlayerVisability}>Never remove player : no</button>}

        {this.props.rightbarVisability 
        ? <button onClick = {this.changeRightbarVisability}>Never remove rightbar : yes</button>
        : <button onClick = {this.changeRightbarVisability}>Never remove rightbar : no</button>}
<div className={classes.infoForEmployer}>
  <h6>Infos for employer</h6>
Music Player loads only once either for desktop, either for mobile version.
So its necessary to reload page to wiev it in another resolution</div>
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



















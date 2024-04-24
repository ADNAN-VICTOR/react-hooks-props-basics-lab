import React from 'react'
function Github(props){
    return (
     <a href={props.GitLink}>{props.GitText}</a>
    )
}
function Linkin(props){
    return (
     <a href={props.LinkinLink}>{props.LinkinText}</a>
    )
}
function Links(){
    return(
    <div>
    <h3>Links</h3>
    <Github GitLink="https://github.com/liza" GitText="https://github.com/liza"/>
    <Linkin linkinLink="https://www.linkedin.com/in/liza/" LinkinText="https://www.linkedin.com/in/liza/"/>
   </div>
    )
  }
 export default Links
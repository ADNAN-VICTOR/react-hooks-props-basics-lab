import React from "react";

function Links(props){
  return(
    <a href={props.link}>{props.text}</a>
  )
}



function Bio(props){
  return (
    <p>{props.Bio}</p>
  )
}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <Bio Bio={props.bio}/>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links link="https://github.com/liza" text="https://github.com/liza"/>
      <Links link="https://www.linkedin.com/in/liza/" text="https://www.linkedin.com/in/liza/"/>
    </div>
  );
}


export default About;

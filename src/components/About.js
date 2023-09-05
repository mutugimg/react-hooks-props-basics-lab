import React from "react";
import Links from "./Links";
import { useState } from "react";
function About(props) {
  const bioProp = (props.bio)};
  if(bioProp){
    return({<p>{props.bio}</p>}
 


    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <p>{true ? "Hello" : "Goodbye"}</h1>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github="https://github.com/liza" linkedin="https://www.linkedin.com/in/liza/"/>
     
    </div>
  );
}else{
  return ""
}


export default About;

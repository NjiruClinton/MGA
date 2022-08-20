import React from 'react'
import "./about.css"
import me from "./me.jpg"

export default function About() {
  return (
    <div className="about">
      
      <div className="left">
        <h1>Clinton Njiru</h1>
        <p>TECH & DESIGN IS MY PASSION</p>
        <div className="p1">
        <p>I am a full stack web and mobile developer and designer based in Nairobi, Kenya. I have a passion for creating beautiful and functional web and mobile applications. I am a self-taught developer and I am always looking to learn new technologies and languages. I started the blog so that I can document some of my open projects as well as teaching other people what they need to know. </p></div>
      </div>
      <div className="right">
        <img src={me} alt="clint" srcset="" />
      </div>
    </div>
  )
}

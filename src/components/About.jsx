import React from 'react'
import image from '../images/profile.png'

const About = () => {
  return (
    <div id="about-container">
      <h2 id="about-title">About Me</h2>
      <div id="about-text-pic-container">
      <p id="about-text">
      Hi! My name is <span id="name">Fabien</span>. I am a highly motivated individual and aspiring software engineer. I consider myself proficient in the MERN stack, but I am open to learning new technologies and methods that will make me a more effective developer. I discovered my passion while obtaining my undergrad at Texas State University and continued to expand my skill set by attending The University of Texas, Austin's Full-Stack Web Developer coding bootcamp. I embrace the process of trial and error that comes with software development, and I strive for consistent execution. I am eager to network with other software engineers to learn from, share, and colaborate on great ideas. 
      <br/> 
      <br/>
      I am currently building towards a software engineering position. Additionally, I am open to contract work and other opportunities to contribute to my portfolio. Please browse my portfolio and feel free to contact me with any feedback you may have.
      
      </p>
      <img id= "profile-pic" src={ image } alt="" />
      </div>
    </div>
  )
}

export default About
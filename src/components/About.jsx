import React from 'react'
import image from '../images/profile.png'

const About = () => {
  return (
    <div id="about-container">
      <h2 id="about-title">About Me</h2>
      <div id="about-text-pic-container">
      <p id="about-text">
      Hi! My name is <span id="name">Fabien</span>. I'm a highly motivated individual who has continued to pursue the software engineering path. I truly enjoy discovering new methods and technologies to create digital products. Through my college experience at Texas State University and coding bootcamp at The University of Texas, Austin, I have been exposed to the power and innovation coding possesses. I have learned to harness the power of coding through consistent execution and trial and error. I am eager to work with other like minded individuals to challenge, share and colaborate on unique ideas. 
      <br/> 
      <br/>
      I am currently looking for a software engineering position. Also, I am open to freelance work and would love to network and build connections. Enjoy my portfolio and feel free to contact me below! 
      
      </p>
      <img id= "profile-pic" src={ image } alt="" />
      </div>
    </div>
  )
}

export default About
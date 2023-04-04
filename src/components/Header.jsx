import React from 'react'
import image from '../images/reactatar.png';
import tIcon from '../images/twitter.png';
import lIcon from '../images/linkedin.png';
import gIcon from '../images/github.png';


const Header = () => {
  return (
    <header id="header">
      <h1 id="name-plate">Fabien Moreno</h1>
      <h2 id="role-title">Full-Stack Web Developer</h2>
    <img id="avatar" src= { image } alt="profile picture" />
      <nav id="navbar">
          <li className="nav-item"><a className="anchor-item" href="/about">About Me</a></li>
          <li className="nav-item"><a className="anchor-item" href="/portfolio">Portfolio</a></li>
          <li className="nav-item"><a className="anchor-item" href="/resume">Resume</a></li>
          <li className="nav-item"><a className="anchor-item" href="/contact">Contact</a></li>
      </nav>
    <a href="https://twitter.com/CodeFabien" target="_blank"><img id="tIcon" src= { tIcon } alt="twitter icon" /></a>
    <a href="https://www.linkedin.com/in/fabien-moreno/" target="_blank"><img id="lIcon" src= { lIcon } alt="linkedin icon" /></a>
    <a href="https://github.com/fabien1313" target="_blank"><img id="gIcon" src= { gIcon } alt="linkedin icon" /></a>

    </header>
    
  )
}

export default Header
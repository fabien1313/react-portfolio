import React from 'react'
import image from '../images/reactatar.png';
import background from '../images/background1.jpg';

const style = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
}

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
    </header>
    
  )
}

export default Header
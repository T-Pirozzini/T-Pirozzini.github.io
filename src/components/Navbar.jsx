import React from 'react'
import './Navbar.css'
import CodeLogo from '../assets/images/Code-Logo.png'
import { VscGithub } from 'react-icons/vsc'
import { SiMinutemailer } from 'react-icons/si'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { SiStrava } from 'react-icons/si'
import { SiDiscord } from 'react-icons/si'
import { SiSlack } from 'react-icons/si'
import { SiSteam } from 'react-icons/si'

export default function Navbar() {
  return (
    <div className="heading-main">      
      <div className="heading-welcome">       
      <a className='link' href="index.html">
        <img src={CodeLogo} className="logo" alt="logo" />
      <h1>Welcome to my Portfolio!</h1>
      </a>
      <p>Straight to the action!</p>
      <p>hover + right-click to access live demos & code below...</p>
      </div>
      <div className="social">
        <div className="social-title">
          <h2>Travis Pirozzini</h2>
          <h3>Full-Stack Web Developer</h3>
        </div>
        <p>Whether it is planting half a million trees, trail-racing on mountains, taking down an Ancient Blue Dragon in D&D, or learning to code - I seek the challenge.</p>
        <p>I am currently seeking my first full-time development role. Feel free to connect with me on your preferred social platform.</p>
        <div className="social-icons">
          <span><VscGithub /></span>
          <span><AiOutlineLinkedin /></span>
          <span><SiStrava /></span>
          <span><SiDiscord /></span>
          <span><SiSlack /></span>
          <span><SiSteam /></span>
          <span><SiMinutemailer /></span>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsStackOverflow } from 'react-icons/bs';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href='https://github.com/YockaFlocka'>
        <AiOutlineGithub />
        </a>
        <a href='https://www.linkedin.com/in/peter-yockey'>
        <AiFillLinkedin />
        </a>
        <a href='https://stackoverflow.com/users/18571849/peter-yockey'>
        <BsStackOverflow />
        </a>
      </div>
    </div>
  )
}

export default Footer;
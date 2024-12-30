import React from 'react'
import './header.css'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Header_social = () => {
  return (
    <div className="header_socials">
        <a href='#' target='_blank'><FaLinkedin className="icon"/></a>
        <a href='#' target='_blank'><FaGithub className="icon"/></a>
        <a href='#' target='_blank'><FaTwitterSquare className="icon"/></a>
        <a href='#' target='_blank'></a>
    </div>
  )
}

export default Header_social

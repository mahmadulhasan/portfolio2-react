import React from 'react'
import './header.css'
import Header_social from './header_social.js'
import CV from '../../assets/cv.pdf'
import Me from '../../assets/me.png'

const Header = () => {
  return (
    <>
    <header>
      <div className="container header_conteiner overflow-hidden"> 
        <h5>Hello I'm</h5>
        <h1>Mahmadul Hasan</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <div className="cta">
          <a href='#' download className="btn">Download CV</a>
          <a href='#contact' className="btn btn-primary">Lets Talk</a>
        </div>


        <Header_social/>

        <div className="me">
          <img src={Me} alt="me" />
        </div>
        
      </div>
    </header>
    </>
  );
}

export default Header

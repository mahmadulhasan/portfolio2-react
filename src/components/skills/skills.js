import React from 'react'
import './skill.css'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { FaPhp } from "react-icons/fa6";
import { TbBrandLaravel } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { TbBrandKotlin } from "react-icons/tb";
import { FaGlobe } from "react-icons/fa";

const Skills = () => {
  return (
    <>

      <section className="skill" id="skills">
        <h1>Skills</h1>
        <div className="skill-boxs">
          <div className="skill-box">
            <FaHtml5 className="icon"/>
            <h5>Html</h5>
          </div>
          <div className="skill-box">
            <IoLogoCss3 className="icon"/>
            <h5>CSS</h5>
          </div>
          <div className="skill-box">
            <IoLogoJavascript className="icon"/>
            <h5>JavaScript</h5>
          </div>
          <div className="skill-box">
            <FaBootstrap className="icon"/>
            <h5>Bootstrap</h5>
          </div>
          <div className="skill-box">
            <SiJquery className="icon"/>
            <h5>Jquery</h5>
          </div>
          <div className="skill-box">
            <FaReact className="icon"/>
            <h5>React</h5>
          </div>

          <div className="skill-box">
            <FaPhp className="icon"/>
            <h5>PHP</h5>
          </div>
          <div className="skill-box">
            <TbBrandLaravel className="icon"/>
            <h5>Laravel</h5>
          </div>
          <div className="skill-box">
            <FaGlobe className="icon"/>
            <h5>Full Stack Devolopment</h5>
          </div>

          <div className="skill-box">
            <FaPython className="icon"/>
            <h5>Python</h5>
          </div>

          <div className="skill-box">
            <TbBrandKotlin className="icon"/>
            <h5>Kotlin </h5>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills

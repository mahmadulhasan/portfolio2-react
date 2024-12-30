import React from "react";
import "./about.css";


import Meabout from '../../assets/me-about.jpg'
import { CiBookmarkPlus } from "react-icons/ci";
import { MdOutlinePeople } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";

const About = () => {
  return (
    <>
      <section className="about" id="about"> 
        <div className="top">
          <h5>Get To Know</h5>
          <h1>About Me</h1>
        </div>



        <div className="about-content">
          <div className="about-width">
            <div className="about-img ">
              <img src={Meabout} alt="meabout" className="img-fluid" />
            </div>
          </div>

          <div className="about-flex ">
            <h4>
              Hi I'm Mahmadul Hasan .____ <br></br>

              As a web developer with experience in front-end and back-end technologies, I am skilled in React, PHP, JavaScript, Laravel and MySQL. I create dynamic, responsive websites and applications, focusing on delivering high-quality, user-centric solutions. Currently, I am expanding my expertise by learning the MERN stack (MongoDB, Express, React, Node.js). My commitment to crafting innovative digital experiences drives me to continually enhance my technical skills and deliver impactful results.
            </h4>


            <div className="about-grid">
              <div className="about-box">
                <CiBookmarkPlus className="icon" />
                <h5>Experience</h5>
                <h5>1+ Year</h5>
              </div>
              <div className="about-box">
                <MdOutlinePeople className="icon" />
                <h5>Client</h5>
                <h5>10+</h5>
              </div>
              <div className="about-box">
                <AiOutlineProject className="icon" />
                <h5>Project</h5>
                <h5>10+</h5>
              </div>
            </div>

          </div>
        </div>
      </section>



    </>
  );
}

export default About;
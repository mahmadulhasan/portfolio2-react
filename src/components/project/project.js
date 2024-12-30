import React from 'react'
import './project.css'
import Project1 from '../../assets/project1.jpg'
import Project2 from '../../assets/project2.jpg'
import Project3 from '../../assets/project3.jpg'

const Project = () => {
  return (
    <section className="project" id="project">
        <h1>Some Projects</h1>
        <div className="project-sec">
            <div className="project-pic">
              <a href="#" target='_blank' >
              <img src={Project1} alt="Project1" /></a>
            </div>
            <div className="project-pic">
            <a href="#" target='_blank' >
            <img src={Project2} alt="Project1" /></a>
            </div>
            <div className="project-pic">
            <a href="#" target='_blank' >
            <img src={Project3} alt="Project1" /></a>
            </div>
        </div>
        
    </section>
  )
}

const projectPics = document.querySelectorAll('.project-pic');

projectPics.forEach((pic) => {
    pic.addEventListener('mouseenter', () => {
        projectPics.forEach((otherPic) => {
            if (otherPic !== pic) {
                otherPic.classList.add('dimmed'); // Dim others
            }
        });
        pic.classList.add('active'); // Highlight hovered
    });

    pic.addEventListener('mouseleave', () => {
        projectPics.forEach((otherPic) => {
            otherPic.classList.remove('dimmed'); // Remove dimming
        });
        pic.classList.remove('active'); // Remove highlight
    });
});

export default Project



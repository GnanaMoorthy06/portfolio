import React from 'react';
import './Experience.css';
import ExperienceImage from './experience.png'; // Replace with your image path
import { FaBriefcase } from 'react-icons/fa'; // Example icon

const Experience = () => {
  return (
    <div id='works' className="experience-page">
      <div className="left-exp">
        <img src={ExperienceImage} alt="Experience" className="experience-image" />
      </div>
      <div className="right-exp">
        <h2 className="experience-title">WORK EXPERIENCE</h2>
        <h3 className="sub-title">My Experience</h3>
        <p className="experience-description">
          Here is a brief description of my work experience. I have worked on several projects in different companies, delivering high-quality solutions.
        </p>
        <div className="experience-item">
          <div className="experience-logo">
            <FaBriefcase size={30} />
          </div>
          <div className="experience-details">
            <h4>Senior System Engineer</h4>
            <p>Codeefly <span>(2018-Running)</span></p>
            <h6>Responsible for leading a team of engineers to develop and maintain scalable systems.</h6>
          </div>
        </div>
        <div className="experience-item">
          <div className="experience-logo">
            <FaBriefcase size={30} />
          </div>
          <div className="experience-details">
            <h4>Software Developer</h4>
            <p>TechCorp <span>(2015-2018)</span></p>
            <h6>Developed and implemented software solutions for various clients in different industries.</h6>
          </div>
        </div>
        <div className="experience-item">
          <div className="experience-logo">
            <FaBriefcase size={30} />
          </div>
          <div className="experience-details">
            <h4>Junior Developer</h4>
            <p>Web Solutions <span>(2013-2015)</span></p>
            <h6>Assisted in the development of web applications and provided support for clients.</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

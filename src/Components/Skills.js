import React from 'react';
// import './Skills.css';
import './Skilled.css'

const Skills = () => {
  return (
    <div className="skills-page">
      <div className="skill-left">
        <h3>MY SKILL</h3>
        <h1>Growing Over <span>Times</span></h1>
        <p>One two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen ninteen twenty</p>
      </div>
      <div className="skill-right">
        <div className="skill-circle">
          <div className="circle" data-percentage="80">
            <span className="skill-name">Web Development</span>
            <span className="percentage">80%</span>
          </div>
        </div>
        <div className="skill-circle">
          <div className="circle" data-percentage="70">
            <span className="skill-name">Hardware Development</span>
            <span className="percentage">70%</span>
          </div>
        </div>
        <div className="skill-circle">
          <div className="circle" data-percentage="90">
            <span className="skill-name">Software Development</span>
            <span className="percentage">90%</span>
          </div>
        </div>
        {/* Add more skill circles here */}
        <div className="skill-circle">
          <div className="circle" data-percentage="75">
            <span className="skill-name">System Application</span>
            <span className="percentage">75%</span>
          </div>
        </div>
        <div className="skill-circle">
          <div className="circle" data-percentage="60">
            <span className="skill-name">Project management</span>
            <span className="percentage">60%</span>
          </div>
        </div>
        <div className="skill-circle">
          <div className="circle" data-percentage="85">
            <span className="skill-name">Data Administration</span>
            <span className="percentage">85%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
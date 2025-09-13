import React from 'react'
import { FaBriefcase } from 'react-icons/fa'; // Example icon
import EduImage from './education.png'
import './Education.css'

function Education() {
  return (
    <div className='Education-page'>
      <div className='left-edu'>
            <h3 className='Edu-title'>EDUCATION</h3>
            <h1 className='Edu-subtitle'>My Education</h1>
            <p className='Edu-description'> Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini hoye khbor nio na sit voluptatem accusantium dolore.</p>
            <div className='edu-item'>
                <div className='edu-logo'>
                    <FaBriefcase size={30} />
                </div>
                <div className='Edu-details'>
                        <h4>Masters in Computer Science</h4>
                        <p>New York University <span>(2012 - 2016)</span></p>
                        <h6>Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.</h6>
                </div>
            </div>

            <div className='edu-item'>
                <div className='edu-logo'>
                    <FaBriefcase size={30} />
                </div>
                <div className='Edu-details'>
                        <h4>Masters in Computer Science</h4>
                        <p>New York University <span>(2012 - 2016)</span></p>
                        <h6>Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.</h6>
                </div>
            </div>

            <div className='edu-item'>
                <div className='edu-logo'>
                    <FaBriefcase size={30} />
                </div>
                <div className='Edu-details'>
                        <h4>Masters in Computer Science</h4>
                        <p>New York University <span>(2012 - 2016)</span></p>
                        <h6>Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.</h6>
                </div>
            </div>

{/*             
            <div className='edu-item'>
                <div className='edu-logo'>
                    <FaBriefcase size={30} />
                </div>
                <div className='Edu-details'>
                        <h1>Masters in Computer Science</h1>
                        <h3>New York University <span>(2012 - 2016)</span></h3>
                        <p>Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.</p>
                </div>
            </div> */}


      </div>
      <div className='right-edu'>
        <img src={EduImage} alt="Education" className="education-image" />
      </div>
    </div>
  )
}

export default Education

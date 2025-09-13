import React from 'react';
import './About.css';
import ProfileImage from './PinkFLower.png'; 
import { FaDownload } from 'react-icons/fa'; 
import { FaSignature } from 'react-icons/fa'; 

const About = () => {
    
  return (
    <div id="about" className="about-page">
      <div className="left-sides">
        <img src={ProfileImage} alt="About Me" className="about-image" />
        <div className="download-cv">
           <FaDownload className="download-icon" />
           <div className="download-text">Download CV</div>
           {/* <span>Download CV</span> */}
        </div>
      </div>
      <div className="right-sides">
        <h3 className="about-title">ABOUT ME</h3>
        <h2 className="content-title">I Develop Systems that Works</h2>
        <p className="description">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="personal-details">
          <div className="lefts-details">
            <p> <b>Name </b> <span>James Smith</span></p>
            <p> <b>Age</b>  <span>29 Years</span></p>
            <p> <b>Occupation</b>  <span>System Engineer</span></p>
          </div>
          <div className="rights-details">
            <p><b>Phone</b>  <span>+123 456 7890</span></p>
            <p><b>Email</b>  <span>hello@thames.com</span></p>
            <p><b>Nationality</b>  <span>Bangladeshi</span></p>
          </div>
        </div>
        <div className="signature-section">
            <div className="sign-left">
                <FaSignature className="signature-icon" />
            </div>
            <div className="sign-right">
                <h1 className="signature-text">Bruce Wayne </h1>
                <h4 >Software Architect, Google Inc.</h4>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;











// import React from 'react';
// import './About.css';
// import ProfileImage from './PinkFLower.png'; 
// import { FaDownload } from 'react-icons/fa'; 
// import { FaSignature } from 'react-icons/fa'; 

// const About= () => {
//   return (
//     <div className="about-page">
//       <div className="left-side">
//         <img src={ProfileImage} alt="Profile" className="profile-image" />
//         <div className="download-cv">
//           <FaDownload className="download-icon" />
//           <span>Download CV</span>
//         </div>
//       </div>
//       <div className="right-side">
//         <h3 className="about-title">About me</h3>
//         <h4 className="content-title">I Develop systems that work</h4>
//         <p className="description">
//           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
//           Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totaeaque ipsa quae ab illo inventore 
//           veritatis et quasi architecto beatae vitae.
//         </p>
//         <div className="contact-info">
//           <div className="left-info">
//             <p><strong>Name:</strong> James Smith</p>
//             <p><strong>Age:</strong> 29 Years</p>
//             <p><strong>Occupation:</strong> System Engineer</p>
//           </div>
//           <div className="right-info">
//             <p><strong>Phone:</strong> +123 456 7890</p>
//             <p><strong>Email:</strong> hello@thames.com</p>
//             <p><strong>Nationality:</strong> Bangladeshi</p>
//           </div>
//         </div>
//         <div className="signature">
//           <FaSignature className="signature-icon" />
//           <p>Bruce Wayne - Software Architect, Google Inc.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;








// import React from 'react';
// import './About.css';
// import { FaDownload } from 'react-icons/fa';
// import { FaSignature } from 'react-icons/fa'; 

// const About = () => {
//   return (
//     <div className="about-page">
//       <div className="content">
//         <div className="image-container">
//           <img src="./PinkFLower.png" alt="Profile" /> {/* Update with your actual image path */}
//           <FaDownload className="download-icon" />
//         </div>
//         <div className="content-details">
//           <h3>About me</h3>
//           <div className="title">I Develop systems that work</div>
//           <div className="description">
//             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//             Oremque laudantium, totaeaque ipsa quae.
//           </div>
//           <div className="line-separator">
//             <div>
//               <p>Name - James Smith</p>
//               <p>Age - 29 Years</p>
//               <p>Occupation - System Engineer</p>
//             </div>
//             <div>
//               <p>Phone - +123 456 7890</p>
//               <p>Email - hello@thames.com</p>
//               <p>Nationality - Bangladeshi</p>
//             </div>
//           </div>
//           <div className="details-underline"></div>
//           <div className="signature">
//                 <FaSignature className="download-icon" />
//             <div className="signature-text">Bruce Wayne Software Architect, Google Inc.</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;
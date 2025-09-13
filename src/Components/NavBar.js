// import React from 'react';
// import './NavBar.css';

// const NavBar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <img src="path-to-your-logo.png" alt="Logo" />
//       </div>
//       <ul className="nav-links">
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#services">Services</a></li>
//         <li><a href="#works">Works</a></li>
//         <li><a href="#contact">Contact</a></li>
//         <li><a href="#blog">Blog</a></li>
//       </ul>
//       <button className="cv-button">
//         <a href="path-to-your-cv.pdf" className="download-cv" download>Download CV</a>
//       </button>
//     </nav>
//   );
// }

// export default NavBar;





import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <FontAwesomeIcon icon={faEnvelope} size="1x" color="white" />
        {/* <FontAwesomeIcon icon={byPrefixAndName.fas['envelope']/} /> */}
        {/* <FontAwesomeIcon icon={faEnvelope} /> */}
        <span className="author-name">gnanamoorthy131@gmail.com</span>
      </div>
      <div className="nav-container">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
        <button className="download-cv-button">
          <a href="GnanaMoorthy_Resume.pdf" download>Download CV</a>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;



// import React, { useState } from 'react';
// import './NavBar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';

// const NavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <FontAwesomeIcon icon={faUser} size="2x" color="white" />
//         <span className="author-name">GM</span>
//       </div>
//       <div className="nav-container">
//         <button className="hamburger" onClick={toggleMenu}>
//           <FontAwesomeIcon icon={faBars} size="lg" color="white" />
//         </button>
//         <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#services">Services</a></li>
//           <li><a href="#works">Works</a></li>
//           <li><a href="#contact">Contact</a></li>
//           <li><a href="#blog">Blog</a></li>
//         </ul>
//         <button className="download-cv-button">
//           <a href="path-to-your-cv.pdf" download>Download CV</a>
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;

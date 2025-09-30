
// import React, { useState, useEffect } from 'react';
// import './HomePage.css';
// import StarIcon from '@mui/icons-material/Star';
// import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

// const roles = ["Web Designer", "Freelancer", "Software Engineer"];

// const HomePage = () => {
//   const [currentRole, setCurrentRole] = useState(0);
//   const [displayedText, setDisplayedText] = useState('');
//   const [letterIndex, setLetterIndex] = useState(0);

//   useEffect(() => {
//     const typeWriterEffect = setTimeout(() => {
//       if (letterIndex < roles[currentRole].length) {
//         setDisplayedText((prev) => prev + roles[currentRole][letterIndex]);
//         setLetterIndex(letterIndex + 1);
//       } else {
//         setTimeout(() => {
//           setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
//           setDisplayedText('');
//           setLetterIndex(0);
//         }, 1000);
//       }
//     }, 100);

//     return () => clearTimeout(typeWriterEffect);
//   }, [letterIndex, currentRole]);

//   return (
//     <div className="homepage">
//       <div className="social-icons">
//         <FaFacebook className="social-icon" />
//         <FaTwitter className="social-icon" />
//         <FaLinkedin className="social-icon" />
//         <FaYoutube className="social-icon" />
//       </div>
//       <h1 className="intro">HELLO I'M</h1>
//       <div className="name-container">
//         <StarIcon className="glow-icon top" />
//         <h2 className="name">Gnana Moorthy D</h2>
//         <StarIcon className="glow-icon bottom" />
//       </div>
//       <h3 className="description">
//         A passionate  <span className="role">{displayedText}_</span>
//       </h3>
//       <div className="buttons">
//         <button className="say-hello-button">SAY HELLO</button>
//         <button className="about-me-button">ABOUT ME</button>
//       </div>
//     </div>
//   );
// }

// export default HomePage;









import React, { useState, useEffect } from 'react';
import './HomePage.css';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
// import SpaIcon from '@mui/icons-material/Spa';
// import StarIcon from '@mui/icons-material/Star';
// import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const roles = ["Full-stack Web Developer", "Freelancer"];

const HomePage = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const typeWriterEffect = setTimeout(() => {
      if (letterIndex < roles[currentRole].length) {
        setDisplayedText((prev) => prev + roles[currentRole][letterIndex]);
        setLetterIndex(letterIndex + 1);
      } else {
        setTimeout(() => {
          setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
          setDisplayedText('');
          setLetterIndex(0);
        }, 1000);
      }
    }, 100);

    return () => clearTimeout(typeWriterEffect);
  }, [letterIndex, currentRole]);


  return (
    <div id='home' className="homepage">
              {/* <StarIcon className="glow-icon top-right" /> */}
                            <AutoGraphIcon className="glow-icon top-right" />
      <div className="homepage-social-icons">
        <FaFacebook className="homepage-social-icon" />
        <FaTwitter className="homepage-social-icon" />
        <FaLinkedin className="homepage-social-icon" />
        <FaYoutube className="homepage-social-icon" />
      </div>
      {/* <div className='homepage-content slide-in'> */}


      <h1 className="intro homepage-content slide-in">HELLO I'M</h1>
      <div className="name-container">
        <AutoAwesomeIcon className="glow-icon top" />
        {/* <h2 className="name homepage-content slide-in">Gnana <span className="different-font">Moorthy</span></h2> */}
        <h2 className="name homepage-content slide-in">Gnana <span className="different-font">Morthy</span></h2>
        <AutoAwesomeIcon className="glow-icon bottom" />
      </div>
      <h3 className="description homepage-content slide-in">
        A passionate  <span className="role">{displayedText}_</span>
      </h3>
      <div className="buttons  slide-in">
        {/* <button className="say-hello-button">SAY HELLO</button>
        <button className="about-me-button">ABOUT ME</button> */}

        <a href="#contact">
          <button className="say-hello-button">SAY HELLO</button>
        </a>
        <a href="#about">
          <button className="about-me-button">ABOUT ME</button>
        </a>
      </div>
      {/* <StarIcon className="glow-icon bottom-left" /> */}
            <AutoGraphIcon className="glow-icon bottom-left" />
    </div>

  );
}

export default HomePage;
// import './App.css';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Content from './Components/Content';
// import Education from './Components/Education';
// import Experience from './Components/Experience';
// import HomePage1 from './Components/HomePage1';
// import NavBar from './Components/NavBar';
// import ScrollText from './Components/ScrollText';
// import Skills from './Components/Skills';
// // import Footer from './Components/Footer'
// import FooterPage from './Components/FooterPage'

// function App() {
//   return (
//     <>
//     <NavBar/>
//     <HomePage1/>
//     <Content/>
//     <About/>
//     <Experience/>
//     <Education/>
//     <ScrollText/>
//     <Skills/>
//     <Contact/>
//     {/* <Footer/> */}
//     <FooterPage/>
//     </>
//   );
// }

// export default App;

















import React, { useState, useEffect } from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Content from './Components/Content';
import Education from './Components/Education';
import Experience from './Components/Experience';
import HomePage1 from './Components/HomePage1';
import NavBar from './Components/NavBar';
import ScrollText from './Components/ScrollText';
import Skills from './Components/Skills';
// import Footer from './Components/Footer'
import FooterPage from './Components/FooterPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <NavBar />
      <HomePage1 />
      {/* <Content />
      <About />
      <Experience />
      <Education />
      <ScrollText />
      <Skills />
      <Contact /> */}
      {/* <Footer /> */}
      {/* <FooterPage /> */}

      {/* {showArrow && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} size="2x" />
        </div>
      )} */}
    </>
  );
}

export default App;

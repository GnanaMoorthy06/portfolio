// import React from 'react';
// import './FooterPage.css';

// function FooterPage() {
//   return (
//     <footer className="footer-section">
//       <div className="footer-container">
//         {/* Logo and Copyright */}
//         <div className="footer-column footer-logo">
//           <h1>Thames</h1>
//           <p>All rights reserved Codeefly © 2024</p>
//         </div>

//         {/* Newsletter */}
//         <div className="footer-column footer-newsletter">
//           <h3>Newsletter</h3>
//           <form>
//             <div className="newsletter-input-container">
//               <i className="fas fa-envelope"></i>
//               <input type="email" placeholder="Enter your email" />
//             </div>
//             <button type="submit">Subscribe</button>
//           </form>
//         </div>

//         {/* Follow Me */}
//         <div className="footer-column footer-follow">
//           <h3>Follow Me</h3>
//           <div className="footer-icons">
//             <div className="icon facebook"><i className="fab fa-facebook-f"></i></div>
//             <div className="icon twitter"><i className="fab fa-twitter"></i></div>
//             <div className="icon linkedin"><i className="fab fa-linkedin-in"></i></div>
//             <div className="icon instagram"><i className="fab fa-instagram"></i></div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default FooterPage;



















import React from 'react';
import './FooterPage.css';

function FooterPage() {
  return (
    <footer id='blog' className="footer-section">
      <div className="footer-container">
        {/* Logo and Copyright */}
        <div className="footer-column footer-logo">
          <h1>Thames</h1>
          <p>All rights reserved Codeefly © 2024</p>
        </div>

        {/* Newsletter */}
        <div className="footer-column footer-newsletter">
          <h3>Newsletter</h3>
          <form>
            <div className="newsletter-input-container">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Enter your email" />
            </div>
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Follow Me */}
        <div className="footer-column footer-follow">
          <h3>Follow Me</h3>
          <div className="footer-icons">
            <div className="icon facebook"><i className="fab fa-facebook-f"></i></div>
            <div className="icon twitter"><i className="fab fa-twitter"></i></div>
            <div className="icon linkedin"><i className="fab fa-linkedin-in"></i></div>
            <div className="icon instagram"><i className="fab fa-instagram"></i></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterPage;

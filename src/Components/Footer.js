// import React from 'react'
// import './Footer.css'

// function Footer() {
//   return (
//     <div>
//       <footer class="footer-section">
//   <div class="footer-container">
//     {/* <!-- Column 1: Logo and Copyright --> */}
//     <div class="footer-column footer-logo">
//       <h1>Thames</h1>
//       <p>All rights reserved Codeefly © 2024</p>
//     </div>

//     {/* <!-- Column 2: Newsletter --> */}
//     <div class="footer-column footer-newsletter">
//       <h3>Newsletter</h3>
//       <form>
//         <input type="email" placeholder="Enter your email" />
//         <button type="submit">Subscribe</button>
//       </form>
//     </div>

//     {/* <!-- Column 3: Follow Me --> */}
//     <div class="footer-column footer-follow">
//       <h3>Follow Me</h3>
//       <div class="footer-icons">
//         <i class="fab fa-facebook-f"></i>
//         <i class="fab fa-twitter"></i>
//         <i class="fab fa-linkedin-in"></i>
//         <i class="fab fa-instagram"></i>
//       </div>
//     </div>
//   </div>
// </footer>

//     </div>
//   )
// }

// export default Footer



















import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer className="footer-section">
        <div className="footer-container">
          {/* Group Logo and Follow Me together */}
          <div className="footer-logo-followme">
            {/* Column 1: Logo */}
            <div className="footer-column footer-logo">
              <h1>Thames</h1>
              <p>All rights reserved Codeefly © 2024</p>
            </div>

            {/* Column 3: Follow Me */}
            <div className="footer-column footer-follow">
              <h3>Follow Me</h3>
              <div className="footer-icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-instagram"></i>
              </div>
            </div>
          </div>

          {/* Column 2: Newsletter */}
          <div className="footer-column footer-newsletter">
            <h3>Newsletter</h3>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

import React from 'react';
import './Contact.css';
import '@fortawesome/fontawesome-free/css/all.css';


const Contact = () => {
  return (
    <div id='contact' className="contact-page">
      <div className="contact-header">
        <h3>Contact me</h3>
        <h1>Let's Start A New Project</h1>
      </div>
      <div className="contact-body">
        <div className="contact-left">
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i> {/* Location Icon */}
            <div>
              <h4>Location</h4>
              <p>20 Bordeshi, London, USA</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i> {/* Phone Icon */}
            <div>
              <h4>Phone</h4>
              <p>+1234567890</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i> {/* Email Icon */}
            <div>
              <h4>Email</h4>
              <p>hello@thames.co</p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <form>
            <div className="form-row">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Your Phone" />
              <input type="text" placeholder="Your Subject" />
            </div>
            <div className="form-row">
              <textarea placeholder="Start writing message here"></textarea>
            </div>
            <button className='contact-btn' type="submit">Submit Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

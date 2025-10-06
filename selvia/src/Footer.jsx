import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-column nav-column">
          <h3>Explore</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#explore">Gallery</a></li>
            <li><a href="#amenities">Amenities</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column contact-column">
          <h3>Get In Touch</h3>
          <p>Rruga e Dibrës, Tiranë, Albania</p>
          <p>Email: <a href="mailto:info@goldenapartment.com">keqi.kledi@gmail.com</a></p>
          <p>Phone: <a href="tel:+3556XXXXXXXX">+355 69 981 0385</a></p>
          <div className="social-links">
            <a href="#" aria-label="Link to Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Link to Facebook"><i className="fab fa-facebook-f"></i></a>
          </div>
        </div>

        <div className="footer-column booking-column">
          <h3>Book Now</h3>
          <p>Ready for your golden experience in Tirana?</p>
          <a 
            href="https://www.airbnb.com/hosting/listings/editor/926867756501940484/view-your-space" 
            className="footer-cta-button"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Check Availability
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Golden Center Apartment. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
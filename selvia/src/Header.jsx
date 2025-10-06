import React from "react";
import './Header.css';

function Header() {
    return (
      <header className="main-header">
        <div className="header-container">
          <a href="#home" className="site-title">Golden Center Apartment</a>
          <nav className="main-nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#explore">Explore</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }

export default Header
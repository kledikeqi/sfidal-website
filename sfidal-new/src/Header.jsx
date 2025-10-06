import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="main-header">
      
      {/* Logoja lidhet me Kreun */}
      <Link to="/" className="logo-link"> 
        <div className="logo-container">
          <img 
            src="/images/sfidal-logo.png" 
            alt="Sfidal sh.p.k Logo" 
            className="sfidal-logo" 
          />
          <span className="company-name">SFIDAL Sh.P.K</span>
        </div>
      </Link>
      
      <nav className="main-nav">
        {/* Linku Kreu shkon te Rruga "/" */}
        <Link to="/">Kreu</Link> 
        
        {/* Linku Rreth Nesh shkon te Rruga "/rreth-nesh" */}
        <Link to="/rreth-nesh">Rreth Nesh</Link> 
        
        {/* NDRYSHIMI KRYESOR: Shërbimet tani është një Link i pavarur */}
        <Link to="/sherbimet">Shërbimet</Link> 
        
        {/* Cilësia bëhet gjithashtu një Link i pavarur */}
        <Link to="/cilesia">Cilësia</Link>
        
        {/* Butoni Kontakt shkon te Faqja e Kontaktit të Detajuar */}
        <Link to="/kontakt" className="nav-cta">
          Kontaktoni
        </Link>
      </nav>
    </header>
  );
}

export default Header;
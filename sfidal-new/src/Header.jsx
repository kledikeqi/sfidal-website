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
      
      {/* Ky seksion fshihet plotësisht në Mobile nga Sfidal.scss */}
      <nav className="main-nav">
        <Link to="/">Kreu</Link> 
        <Link to="/rreth-nesh">Rreth Nesh</Link> 
        <Link to="/sherbimet">Shërbimet</Link> 
        <Link to="/cilesia">Cilësia</Link>
        <Link to="/kontakt" className="nav-cta">
          Kontaktoni
        </Link>
      </nav>

      {/* ⚠️ IKONA E MENYSË (SHFAQET VETËM NË MOBILE) */}
      {/* Në të ardhmen, klikimi do të hapë një Overlay Menu */}
      <button className="menu-toggle" aria-label="Hap Menynë">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
      </button>

    </header>
  );
}

export default Header;
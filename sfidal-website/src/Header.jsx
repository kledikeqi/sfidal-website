import React from 'react';
import { Link } from 'react-router-dom'; // Importojmë Link

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
        
        {/* Këto mbeten Anchor links brenda HomePage, pasi nuk janë faqe të reja */}
        <a href="/#services">Shërbimet</a> 
        <a href="/#quality">Cilësia</a>
        
        {/* Butoni Kontakt shkon te Faqja e Kontaktit të Detajuar */}
        <Link to="/kontakti-i-detajuar" className="nav-cta">
          Kontaktoni
        </Link>
      </nav>
    </header>
  );
}

export default Header;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sfidal.scss'; // Importo stilet

// Këtu duhet të përdorni rrugën e saktë të logos suaj
const SfidalLogo = "/images/sfidal-logo.png"; 

// Ikonat SVG (Menu dhe X)
const MenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);

const CloseIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Mbyll menynë
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Funksioni që hap/mbyll menynë
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Efekt për menaxhimin e scroll-it (headeri fiksohet) dhe bllokimin e body-së
  useEffect(() => {
    const handleScroll = () => {
      // Headeri bëhet i fiksuar pas 50px lëvizje
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Bllokon lëvizjen (scroll) e faqes kur menyja mobile është e hapur
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';

    return () => {
        window.removeEventListener('scroll', handleScroll);
        document.body.style.overflow = 'auto'; // Pastron stilin kur komponenti largohet
    }
  }, [isMenuOpen]);

  // Klasat ndryshojnë në varësi të scroll-it
  const headerClass = isScrolled ? "main-header scrolled" : "main-header";

  return (
    <>
      <header className={headerClass}>
        {/* Logoja lidhet me Kreun */}
        <Link to="/" className="logo-link" onClick={closeMenu}> 
            <img 
              src={SfidalLogo} 
              alt="Sfidal sh.p.k Logo" 
              className="sfidal-logo" 
            />
            <span className="company-name">SFIDAL Sh.P.K</span>
        </Link>
        
        {/* Navigimi Desktop */}
        <nav className="main-nav">
          <Link to="/" onClick={closeMenu}>Kreu</Link> 
          <Link to="/rreth-nesh" onClick={closeMenu}>Rreth Nesh</Link> 
          <Link to="/sherbimet" onClick={closeMenu}>Shërbimet</Link> 
          <Link to="/cilesia" onClick={closeMenu}>Cilësia</Link>
          <Link to="/kontakt" className="nav-cta" onClick={closeMenu}>
            Kontaktoni
          </Link>
        </nav>

        {/* Butoni i Menysë (Hamburger/X) */}
        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Mbyll Menynë" : "Hap Menynë"}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

      </header>
      
      {/* Menyja Mobile (Overlay) */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><Link to="/" onClick={closeMenu}>KREU</Link></li>
          <li><Link to="/rreth-nesh" onClick={closeMenu}>RRETH NESH</Link></li>
          <li><Link to="/sherbimet" onClick={closeMenu}>SHËRBIMET</Link></li>
          <li><Link to="/cilesia" onClick={closeMenu}>CILËSIA</Link></li>
          <li><Link to="/kontakt" className="nav-cta" onClick={closeMenu}>KONTAKTONI</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Header;
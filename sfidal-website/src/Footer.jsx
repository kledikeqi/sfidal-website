import React from 'react';
// Stilet merren nga Sfidal.scss

function Footer() {
  const currentYear = new Date().getFullYear();
  const address = "Durres Kruje, Lagja nr 2, Barabit"; // Vëndodhja e biznesit [cite: 4]
  
  return (
    <footer className="main-footer">
      <p>SFIDAL Sh.P.K. | © {currentYear}. Të gjitha të drejtat të rezervuara.</p>
      <p>{address} | Prodhim Këpucësh Fason. [cite: 30]</p>
    </footer>
  );
}

export default Footer;
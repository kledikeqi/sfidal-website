import React from 'react';
// Stilet do të merren nga Sfidal.scss

function DetailedContactPage() {
  return (
    <section className="contact-page-section">
      <div className="contact-info-card">
        <h1>Kontaktoni Sfidal Sh.P.K</h1>
        <p className="contact-intro">
          Për çdo kërkesë biznesi, partneritet ose detaje teknike, ju lutemi kontaktoni drejtpërdrejt personin përgjegjës.
        </p>
        
        <div className="contact-details-grid">
          
          <div className="contact-item">
            <span className="icon">👤</span>
            <h3>Pronari / Përgjegjësi</h3>
            <p>Hajdar Keqi</p>
          </div>
          
          <div className="contact-item">
            <span className="icon">📞</span>
            <h3>Telefoni</h3>
            <p>0682062798</p>
          </div>
          
          <div className="contact-item">
            <span className="icon">📧</span>
            <h3>Email</h3>
            <p>sfidalb@yahoo.it</p>
          </div>
        </div>
        
        {/* Butoni kthehet në homepage */}
        <a href="/" className="cta-button back-button">Kthehu në Kreu</a>
      </div>
    </section>
  );
}

export default DetailedContactPage;
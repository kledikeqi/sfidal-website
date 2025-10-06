import React from 'react';

function ContactForm() {
  // Në një projekt real, këtu do të shtonit logjikën e React-it
  // për të dërguar të dhënat e formularit në Backend.
  
  return (
    <div className="contact-form-container" id="contact">
      <h2>Kërkesë për Partneritet Fason</h2>
      <p className="contact-subtitle">
        Plotësoni të dhënat tuaja dhe ne do t'ju kontaktojmë brenda 24 orëve për të diskutuar kapacitetin dhe specifikat e porosisë suaj.
      </p>
      
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Emri i Kompanisë</label>
          <input type="text" id="name" name="name" placeholder="Emri i Kompanisë ose Personi Kontaktues" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email Adresa</label>
          <input type="email" id="email" name="email" placeholder="example@marka-juaj.com" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Telefoni</label>
          <input type="tel" id="phone" name="phone" placeholder="+355 XXX XXX XXX" />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Mesazhi / Përshkrimi i Kërkesës</label>
          <textarea id="message" name="message" rows="5" placeholder="P.sh.: Kërkojmë prodhimin fason të 10,000 palë këpucësh për sezonin pranverë/verë." required></textarea>
        </div>
        
        <button type="submit" className="cta-button submit-button">
          Dërgo Mesazhin
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
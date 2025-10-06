import React from 'react';
import ContactForm from './ContactForm'; // Importojmë formularin

function PartnershipFormPage() {
  return (
    // E përdorim ContactFormContainer për stilizimin e errët
    <section className="contact-form-container page-padding">
      <div className="form-page-wrapper">
        <h1 className="page-title">Filloni Partneritetin Tuaj me Sfidal Sh.P.K</h1>
        <p className="page-intro">
          Ne mirëpresim markat ndërkombëtare që kërkojnë cilësi dhe eksperiencë në prodhimin fason. Plotësoni formularin e mëposhtëm për të diskutuar specifikat e porosisë suaj.
        </p>
        
        {/* ContactForm tashmë ka stilim B2B dhe është i organizuar */}
        <ContactForm />
      </div>

      <a href="/" className="cta-button back-button">Kthehu në Kreu</a>
    </section>
  );
}

export default PartnershipFormPage;
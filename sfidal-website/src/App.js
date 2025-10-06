import React from 'react';
// 1. Importojmë elementet e Router-it
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 2. Importojmë komponentët e përbashkët
import Header from './Header';
import Footer from './Footer';
// Footer-i është hequr nga HomePage.jsx dhe thirret këtu

// 3. Importojmë Faqet
import HomePage from './HomePage';
import AboutPage from './AboutPage'; // Faqja e re
import DetailedContactPage from './DetailedContactPage'; // Faqja e re
import PartnershipFormPage from './PartnershipFormPage'; // Faqja e re

function App() {
  return (
    // 4. Kapsulojmë të gjithë aplikacionin në Router
    <Router>
      {/* Headeri vendoset jashtë Routes që të shfaqet në çdo faqe */}
      <Header />
      
      <main>
        {/* Këtu përcaktohen rrugët e navigimit */}
        <Routes>
          {/* Rruga e Kreut */}
          <Route path="/" element={<HomePage />} />
          
          {/* Rruga Rreth Nesh */}
          <Route path="/rreth-nesh" element={<AboutPage />} />
          
          {/* Rruga e Kontaktit të Detajuar */}
          <Route path="/kontakti-i-detajuar" element={<DetailedContactPage />} />

          <Route path="/diskutoni-partneritetin" element={<PartnershipFormPage />} />
        </Routes>
      </main>

      {/* Footer-i vendoset jashtë Routes që të shfaqet në çdo faqe */}
      <Footer />
    </Router>
  );
}

export default App;

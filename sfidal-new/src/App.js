import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// 1. Importo Stilet Kryesore
import './Sfidal.scss'; // Sigurohu që ky skedar ndodhet në src/

// 2. Importo Komponentët
import Header from './Header'; 
import Footer from './Footer'; 
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import DetailedContactPage from './DetailedContactPage';
import PartnershipFormPage from './PartnershipFormPage'; 
import ServicesPage from './ServicesPage';
import QualitySection from './QualitySection';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AdminLoginPage from './pages/AdminLoginPage';

// P.sh., QualitySection dhe ContactForm ndoshta përdoren brenda HomePage, por i listojmë këtu për siguri.

function App() {
  return (
    <Router>
      <Header /> 
      <main>
        <Routes>
          {/* Rrugët kryesore të navigimit */}
          <Route path="/" element={<HomePage />} />
          <Route path="/rreth-nesh" element={<AboutPage />} />
          <Route path="/kontakt" element={<DetailedContactPage />} />
          <Route path="/partneritet" element={<PartnershipFormPage />} />
          <Route path="/sherbimet" element={<ServicesPage />} />
          <Route path="/cilesia" element={<QualitySection />} />
          <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
          {/* Rrugët Admin */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/partneritet" element={<AdminDashboardPage />} />
          <Route path="*" element={<h2>404 - Faqja nuk u gjet.</h2>} />
          {/* Shto këtu çdo rrugë tjetër që është një faqe e pavarur */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

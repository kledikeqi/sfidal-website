import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// 1. import stilet kryesore
import './Sfidal.scss';

// 2. import komponentet
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

function App() {
  return (
    <Router>
      <Header /> 
      <main>
        <Routes>
          {/* rruget kryesore te navigimit */}
          <Route path="/" element={<HomePage />} />
          <Route path="/rreth-nesh" element={<AboutPage />} />
          <Route path="/kontakt" element={<DetailedContactPage />} />
          <Route path="/partneritet" element={<PartnershipFormPage />} />
          <Route path="/sherbimet" element={<ServicesPage />} />
          <Route path="/cilesia" element={<QualitySection />} />
          <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
          {/* rruget admin */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/partneritet" element={<AdminDashboardPage />} />
          <Route path="*" element={<h2>404 - Faqja nuk u gjet.</h2>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
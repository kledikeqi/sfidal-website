import React from 'react';
import './Sfidal.scss';
import Footer from './Footer';
import QualitySection from './QualitySection';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';
import ShoePrintBackground from './images/shoeprint.png';

function HomePage() {
  return (
    <main>
      {/* SEKSIONI 1: HERO - Prezantimi Profesional */}
      <section className="hero-section" style={{ 
        backgroundImage: `url(${ShoePrintBackground}), linear-gradient(to right, #212121, #1a1a1a)`,
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: 'center center, center center',
        backgroundSize: 'cover, cover'
        }}>
        <div className="hero-content">
          <h1>Partneri juaj i Besueshëm në Prodhimin e Këpucëve.</h1>
          <p>
            Sfidal sh.p.k është një kompani fason e specializuar në prodhimin e këpucëve të gjysmë të gatshme dhe të gatshme, me fokus te cilësia dhe eksporti. Ne ofrojmë eksperiencë dhe kapacitet për të përmbushur kërkesat e markave ndërkombëtare.
          </p>
          <Link 
            to="/diskutoni-partneritetin" 
            className="cta-button"
          >
            Diskutoni Partneritetin
          </Link>
        </div>
      </section>

      <QualitySection />

      {/* SEKSIONI 2: PROCESI TEKNOLOGJIK */}
      <section className="process-section">
        <h2>Procesi Teknologjik i Prodhimit</h2>
        <div className="process-grid">
          
          <div className="process-step">
            <span className="step-number">1</span>
            <h3>Reparti i Prestarisë</h3>
            <p>
              Përgatitja dhe kontrolli i lëkurës. Përdorim skema prerjeje për shfrytëzim maksimal, duke pasur parasysh edhe defektet natyrale të materialit. [cite: 36, 47, 56]
            </p>
          </div>

          <div className="process-step">
            <span className="step-number">2</span>
            <h3>Reparti i Qepjes dhe Aksesorëve</h3>
            <p>
              Faqet e prera kalojnë në qepje, duke krijuar artikullin sipas porosisë së klientit. Vendosen aksesorët përkatës dhe bëhet kontrolli përfundimtar. [cite: 38, 68, 69]
            </p>
          </div>
          
          <div className="process-step">
            <span className="step-number">3</span>
            <h3>Reparti i Montimit dhe Finiturës</h3>
            <p>
              Procesi i premontimit dhe futja në kallëp. Përfshin lyerjen me mastic dhe injektimin e shollave, duke e çuar produktin në fazën e tij përfundimtare. [cite: 40, 72, 76]
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}

export default HomePage;
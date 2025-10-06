import React from 'react';
import './Sfidal.scss'; 
import QualitySection from './QualitySection';
import { Link } from 'react-router-dom';

// Imazhi Placeholder (për të simuluar këpucën e shabllonit)
const SfidalHeroImage = "./images/sfidal-hero.jpg";


function HomePage() {
  return (
    <main>
      {/* SEKSIONI 1: HERO - Dizajni i Ri i Shabllonit (Baza e Bardhë + Gradient Diagonal) */}
      <section className="hero-wrapper">
        
        {/* Kolona e Majtë: Teksti dhe CTA */}
        <div className="hero-left">
          <h1>
            Partneri juaj i Besueshëm në Prodhimin e Këpucëve.
          </h1>
          <p>
            SFIDAL Sh.P.K. është lider fason i specializuar në prodhimin e këpucëve të gjysmë të gatshme dhe të gatshme, me fokus të theksuar te cilësia e eksportit. 
          </p>
          <Link 
            to="/partneritet" 
            className="hero-cta-icon" 
          >
            <span className="icon">➕</span>
            DISKUTONI PARTNERITETIN
          </Link>
        </div>

        {/* Kolona e Djathtë: Gradienti dhe Imazhi */}
        <div className="hero-right">
          {/* Vendoset gradienti diagonal këtu */}
          <div className="diagonal-bg"></div> 
          
          {/* Vendosni këtu imazhin tuaj të produktit më të mirë */}
          <img 
            src={SfidalHeroImage}
            alt="Produkti kryesor i Sfidal"
            className="hero-image"
          />
        </div>
      </section>


      {/* SEKSIONI 3: PROCESI TEKNOLOGJIK */}
      <section className="process-section">
        <h2>Procesi Teknologjik i Prodhimit</h2>
        <div className="process-grid">
          
          <div className="process-step">
            <span className="step-number">1</span>
            <h3>Reparti i Prestarisë</h3>
            <p>
              Përgatitja dhe kontrolli i lëkurës. Përdorim skema prerjeje për shfrytëzim maksimal, duke pasur parasysh edhe defektet natyrale të materialit.
            </p>
          </div>

          <div className="process-step">
            <span className="step-number">2</span>
            <h3>Reparti i Qepjes dhe Aksesorëve</h3>
            <p>
              Faqet e prera kalojnë në qepje, duke krijuar artikullin sipas porosisë së klientit. Vendosen aksesorët përkatës dhe bëhet kontrolli përfundimtar.
            </p>
          </div>
          
          <div className="process-step">
            <span className="step-number">3</span>
            <h3>Reparti i Montimit dhe Finiturës</h3>
            <p>
              Procesi i premontimit dhe futja në kallëp. Përfshin lyerjen me mastic dhe injektimin e shollave, duke e çuar produktin në fazën e tij përfundimtare.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}

export default HomePage;
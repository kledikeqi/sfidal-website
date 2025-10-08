import React from 'react';
import './Sfidal.scss'; 
import { Link } from 'react-router-dom';

// Imazhi Placeholder (për të simuluar këpucën e shabllonit)
// Kujdes: Sigurohuni që rruga "./images/sfidal-hero.jpg" të jetë e saktë
const SfidalHeroImage = "./images/sfidal-hero.jpg"; 

// Komponenti i Ikonës SVG (Për procesin)
const IconSvg = ({ children }) => (
  <div style={{ display: 'inline-block', marginRight: '15px', color: '#FF6E1D' }}>
    {children}
  </div>
);


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
            <h3>
              {/* Shtohet ikona për theks vizual */}
              <IconSvg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </IconSvg>
              Reparti i Prestarisë
            </h3>
            <p>
              Përgatitja dhe kontrolli i lëkurës. Përdorim skema prerjeje për shfrytëzim maksimal, duke pasur parasysh edhe defektet natyrale të materialit.
            </p>
          </div>

          <div className="process-step">
            <span className="step-number">2</span>
            <h3>
              {/* Shtohet ikona për theks vizual */}
              <IconSvg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 11l4.5-4.5M21 7.5l-4.5 4.5M10 20l-1.75-5.25L2 13 4 2h16l2 11-6.25 1.75L14 20l-4-4-4 4"/></svg>
              </IconSvg>
              Reparti i Qepjes dhe Aksesorëve
            </h3>
            <p>
              Faqet e prera kalojnë në qepje, duke krijuar artikullin sipas porosisë së klientit. Vendosen aksesorët përkatës dhe bëhet kontrolli përfundimtar.
            </p>
          </div>
          
          <div className="process-step">
            <span className="step-number">3</span>
            <h3>
              {/* Shtohet ikona për theks vizual */}
              <IconSvg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.75 6H2.25l-.75-3h20.5z"/><path d="M20 10l-1 9H5L4 10h16z"/><path d="M8 10v4M16 10v4"/></svg>
              </IconSvg>
              Reparti i Montimit dhe Finiturës
            </h3>
            <p>
              Procesi i premontimit dhe futja në kallëp. Përfshin lyerjen me mastic dhe injektimin e shollave, duke e çuar produktin në fazën e tij përfundimtare.
            </p>
          </div>

        </div>
      </section>

      {/* Nëse dëshironi të shfaqni seksionin e cilësisë, thërrisni <QualitySection /> në App.js */}
    </main>
  );
}

export default HomePage;
import React from 'react';
import { Link } from 'react-router-dom'; // Përdorim Link në vend të <a>

function AboutPage() {
  // URL-ja e Google Maps për embed
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1497.1009139045353!2d19.78854044555811!3d41.51822180556209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDMxJzA1LjYiTiAxOc40NydyMjAuN0XigJM!5e0!3m2!1sen!2sal!4v1664478888888!5m2!1sen!2sal";
  const mapClickUrl = "https://www.google.com/maps/search/?api=1&query=41.518222,19.789083&query_place_id=GQ9Q+7JP";

  return (
    <section className="about-page-section page-padding">
      <div className="about-content-wrapper">
        <h1 className="about-title">Rreth Aktivitetit të Sfidal Sh.P.K</h1>
        <p className="about-intro">
          Shoqëria "SFIDAL" sh.p.k. është regjistruar më **09/10/2009** pranë Qëndrës Kombëtare të Regjistrimit. Ne operojmë me N.I.P.T **K94609201S** dhe jemi specializuar në prodhimin fason të këpucëve me fokus te cilësia dhe eksporti.
        </p>

        <div className="activity-details card-style-new"> {/* Klasë e re për stilizim */}
          <h2 className="section-subtitle">Veprimtaria Kryesore</h2>
          <p>
            Objekti ynë i veprimtarisë përfshin: Import-Eksport të lëkurës, këpucëve, materialeve dhe makinerive të ndryshme për prodhimin e këpucëve. Përveç kësaj, ne merremi me prodhimin dhe riparimin e këpucëve të përfunduara, si dhe prerjen dhe qepjen e modeleve të ndryshme të konfeksioneve.
          </p>
        </div>
        
        {/* SEKSIONI I VENDNDODHJES DHE HARTËS */}
        <div className="location-section">
          <h2 className="section-subtitle">Adresa dhe Vendndodhja Fikse</h2>
          
          <div className="location-details-grid">
              
              <div className="text-details card-style-new"> {/* Klasë e re për stilizim */}
                  <h3>Detajet e Adresës</h3>
                  <p><strong>Adresa Postare:</strong> Durrës Krujë, Lagja Nr 2, Barabit.</p>
                  <p><strong>Pikë Referimi:</strong> Ndërtesë Private 2 Katëshe, pranë ish-godinës së Përpunimit të Drurit.</p>
                  <p><strong>Koordinatat GPS:</strong> 41°31'05.6"N 19°47'20.7"E</p>
                  <p><strong>Plus Code:</strong> GQ9Q+7JP Krujë, Shqipëria</p>
              </div>

              {/* HARTA INTERAKTIVE */}
              <a href={mapClickUrl} target="_blank" rel="noopener noreferrer" className="map-link-wrapper">
                  <div className="map-container">
                      <iframe 
                          src={mapEmbedUrl}
                          width="100%" 
                          height="450" 
                          style={{ border: 0 }} 
                          allowFullScreen="" 
                          loading="lazy" 
                          title="Vendndodhja e Sfidal shpk"
                      ></iframe>
                      {/* Shtojmë një mbulues (overlay) për të kapur klikimet */}
                      <div className="map-overlay">
                          <span>Klikoni për të Hapur Hartën</span>
                      </div>
                  </div>
              </a>
          </div>
        </div>

        {/* Butoni kthehet në homepage */}
        <Link to="/" className="cta-button back-button">Kthehu në Kreu</Link>
      </div>
    </section>
  );
}

export default AboutPage;

import React from 'react';

function QualitySection() {
  return (
    // E lidhim me linkun #quality nga Header-i
    <section className="quality-section" id="quality">
      <h2>Pse të Zgjidhni Sfidal Sh.P.K?</h2>
      <div className="features-grid">
        
        <div className="feature-card">
          <span className="icon-badge material-icon">⭐</span>
          <h3>Standarde & Cilësi</h3>
          <p>
            [cite_start]Ne përdorim vetëm materiale të ardhur nga **importi** dhe të **certifikuara**, duke garantuar cilësinë superiore të çdo pale këpuce[cite: 78]. [cite_start]Kapaciteti i subjektit është vërtetuar me operim si biznes **fason**[cite: 30].
          </p>
        </div>

        <div className="feature-card">
          <span className="icon-badge process-icon">🛠️</span>
          <h3>Proces i Kompletuar</h3>
          <p>
            [cite_start]Procesi ynë teknologjik kalon në etapa të detajuara: Reparti i Prestarisë, Qepjes, dhe Montimit, duke garantuar kontroll total mbi produktin[cite: 32, 36, 38, 40].
          </p>
        </div>

        <div className="feature-card">
          <span className="icon-badge export-icon">🌍</span>
          <h3>Eksperiencë në Eksport</h3>
          <p>
            [cite_start]Sfidal sh.p.k ka eksperiencë në **eksportimin** e këpucëve të gatshme dhe të gjysmë të gatshme [cite: 8][cite_start], duke përdorur **lëndë të parë të perpunuar kimikisht jashtë vendit**[cite: 78].
          </p>
        </div>

        <div className="feature-card">
          <span className="icon-badge experience-icon">👨‍🏭</span>
          <h3>Staf me Përvojë</h3>
          <p>
            [cite_start]Ne punësojmë punonjës me **përvojë dhe eksperiencë** në fushën e prodhimit të këpucëve[cite: 8], duke siguruar realizimin e saktë të modeleve sipas porosisë.
          </p>
        </div>
      </div>
    </section>
  );
}

export default QualitySection;
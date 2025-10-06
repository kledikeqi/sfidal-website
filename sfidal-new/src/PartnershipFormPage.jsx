import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Shtojmë lucide-react për ikona, nëse i keni përdorur në pjesë të tjera
import { Factory, Briefcase, Mail } from 'lucide-react'; 

// URL-ja e API-së së Backend-it (tani duke përdorur portën 5001)
const API_URL = 'http://localhost:5001/api/partneritet'; 

// Komponenti i thjeshtë i formularit, i përditësuar për API
function SimpleContactForm() {
  // Përdorim emrat e fushave që përputhen me Modelin tuaj Mongoose (companyName, contactPerson, email, message)
  const [formData, setFormData] = useState({
    contactPerson: '', // Më parë 'name'
    email: '',
    companyName: '', // Më parë 'company'
    message: '',
    requestType: 'NewProduction' // Shtojmë default, por mund të bëhet i zgjedhshëm
  });
  
  const [status, setStatus] = useState({ loading: false, success: null, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status.loading) return;

    // Krijojmë një kopje të të dhënave dhe i rregullojmë emrat e fushave 
    // (psh. name -> contactPerson, company -> companyName)
    const dataToSend = {
      contactPerson: formData.contactPerson,
      email: formData.email,
      companyName: formData.companyName,
      message: formData.message,
      requestType: formData.requestType, // Ose e shtojmë si input nëse keni nevojë për zgjedhje
      phone: '' // E lëmë bosh nëse nuk është fushë në këtë formë
    };

    // Validim minimal
    if (!dataToSend.contactPerson || !dataToSend.email || !dataToSend.companyName || !dataToSend.message) {
      setStatus({ loading: false, success: false, message: 'Ju lutem plotësoni të gjitha fushat e detyrueshme (*).' });
      return;
    }

    setStatus({ loading: true, success: null, message: 'Duke dërguar kërkesën...' });

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();

      if (response.ok) {
        // Suksesi
        setStatus({ loading: false, success: true, message: '✅ Kërkesa u dërgua! Do t\'ju kontaktojmë së shpejti.' });
        // Pastrimi
        setFormData({ contactPerson: '', email: '', companyName: '', message: '', requestType: 'NewProduction' }); 
      } else {
        // Gabim nga Backend (p.sh., Validimi Mongoose)
        setStatus({ loading: false, success: false, message: `❌ Dështoi: ${data.error || 'Gabim i panjohur.'}` });
      }
    } catch (error) {
      console.error('Network Error:', error);
      setStatus({ 
        loading: false, 
        success: false, 
        message: '❌ Gabim rrjeti. Sigurohuni që serveri Node.js po funksionon (port 5001).' 
      });
    }
  };

  if (status.success === true) {
    return (
      <div className="card-style-new" style={{ textAlign: 'center', backgroundColor: '#e9f8e9', color: '#1a1a1a' }}>
        <h3 style={{color: '#1a1a1a'}}>Faleminderit! Kërkesa u Dërgua me Sukses.</h3>
        <p>Ekipi i Sfidal Sh.P.K do t'ju kontaktojë brenda 48 orëve. Ju lutemi, kontrolloni emailin tuaj.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {/* Mesazhi i Statusit */}
      {status.message && (
        <div className={`mb-4 p-3 rounded font-medium ${status.success === false ? 'bg-red-100 text-red-700' : status.success === true ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
            {status.message}
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="contactPerson" className="form-label">Emri i Kontaktit *</label>
        <input 
          type="text" 
          id="contactPerson" 
          name="contactPerson" // NDRYSHUAR
          className="form-control" 
          value={formData.contactPerson} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="form-label">Emaili *</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          className="form-control" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="mb-4">
        <label htmlFor="companyName" className="form-label">Emri i Kompanisë *</label>
        <input 
          type="text" 
          id="companyName" 
          name="companyName" // NDRYSHUAR
          className="form-control" 
          value={formData.companyName} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="form-label">Përshkrimi i Projektit (Sasia/Lloji i Këpucës) *</label>
        <textarea 
          id="message" 
          name="message" 
          className="form-control" 
          rows="5" 
          value={formData.message} 
          onChange={handleChange} 
          required
        ></textarea>
      </div>
      
      {/* Fusha e fshehtë por e nevojshme Request Type */}
      <input type="hidden" name="requestType" value={formData.requestType} />

      <button type="submit" className="cta-button submit-button" disabled={status.loading}>
        {status.loading ? 'Duke Dërguar...' : 'Dërgo Kërkesën për Partneritet'}
      </button>
    </form>
  );
}

// Komponenti kryesor i faqes së Partneritetit
function PartnershipFormPage() {
  return (
    // Përdorim contact-form-container për stilizimin e përgjithshëm të faqes
    <section className="contact-form-container">
      
      <div className="form-page-wrapper">
        
        {/* Kolona 1: Hyrja dhe Titulli */}
        <div className="form-intro-content">
            <h1 className="page-title">
                Filloni Partneritetin Tuaj <span style={{color: '#FF6E1D'}}>Strategjik</span> me Sfidal Sh.P.K
            </h1>
            <p className="page-intro">
                Zgjidhni një partner fason i cili e vendos cilësinë dhe eksperiencën në qendër të procesit. Ne ofrojmë kapacitete prodhimi të avancuara për markat ndërkombëtare të këpucëve. Plotësoni formularin e kërkesës për të filluar diskutimet mbi specifikat e porosisë suaj.
            </p>
            
            <div style={{ padding: '1.5rem', borderLeft: '5px solid #FF6E1D', backgroundColor: '#f8f8f8', borderRadius: '5px' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 800 }}>Përfitoni:</h3>
                <p style={{ margin: 0, fontSize: '1rem', color: '#333' }}>
                    Standarde Eksporti EU, Eksperiencë 15+ Vjeçare dhe Garanci Cilësie Fason.
                </p>
            </div>
            
        </div>

        {/* Kolona 2: Formulari */}
        <div className="contact-form-wrapper">
            <h2 style={{ fontSize: '1.7rem', marginBottom: '2rem', textAlign: 'center', color: '#1a1a1a', fontWeight: 900 }}>Kërkesë Partneriteti</h2>
            <SimpleContactForm /> 
        </div>
        
      </div>

      {/* Butoni kthehet në homepage */}
      <Link to="/" className="cta-button back-button">Kthehu në Kreu</Link>
    </section>
  );
}

export default PartnershipFormPage;
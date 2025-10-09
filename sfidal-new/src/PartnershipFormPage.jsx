import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Building, MessageSquare, ArrowLeft, Loader, ShieldCheck, Zap, Globe, Users } from 'lucide-react'; 

// VËREJTJE: Endpoint-i i API-së së Backend-it (Pa ndryshuar)
const API_ENDPOINT = "/api/partneritet"; 

// Ikonë e Personalizuar
const User = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);


const PartnershipPage = () => {
    const [formData, setFormData] = useState({
        contactPerson: '',
        companyName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false); 
    const [error, setError] = useState(null); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); 
        setError(null);
        
        const dataToSend = {
            ...formData,
            requestType: 'NjoftimPaSpecifika' 
        };

        try {
            // Simulojmë dërgimin e API-së (Zëvendëso këtë me kodin tuaj aktual)
            // const response = await fetch(API_ENDPOINT, {...});
            // const data = await response.json();
            
            // Simulimi:
            await new Promise(resolve => setTimeout(resolve, 1500)); 
            const success = true; // Ndryshoje në false për të parë gabimin
            const data = { success: true };

            if (success) {
                setIsSubmitted(true);
                setFormData({ contactPerson: '', companyName: '', email: '', phone: '', message: '' }); 

            } else {
                setError(data.error || "Ndodhi një gabim në server gjatë dërgimit.");
                console.error("Backend Error:", data.error); 
            }
        } catch (err) {
            setError("Nuk mund të lidheshim me serverin. Kontrolloni lidhjen ose rrugën e API-së.");
            console.error("Network Error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    // Stili i rregulluar dhe i përmirësuar për fushën Input
    const inputClasses = "w-full p-3 rounded-xl shadow-sm pl-10"; 
    
    // Stili i ri i butonit CTA (Përdor klasën globale cta-button)
    const submitButtonClasses = "w-full cta-button mt-4 justify-center flex items-center disabled:opacity-50 disabled:cursor-not-allowed text-lg font-bold";

    // Layout-i i Suksesit
    if (isSubmitted) {
        return (
            <div className="contact-form-container">
                <div className="contact-form-wrapper max-w-lg mx-auto transform transition duration-500 hover:scale-[1.01] text-center">
                    <ShieldCheck size={48} className="text-orange-600 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Kërkesa u Dërgua me Sukses!</h2>
                    <p className="text-gray-600 mb-8">
                        Faleminderit që na kontaktuat. Ekipi ynë do t'ju kontaktojë brenda 48 orëve për të diskutuar specifikat e projektit tuaj fason.
                    </p>
                    <Link to="/" className="cta-button w-auto inline-flex items-center">
                        <ArrowLeft size={20} className="mr-2" /> Kthehu në Kreu
                    </Link>
                </div>
            </div>
        );
    }

    // Layout-i i Formës (Qendërzuar)
    return (
        <div className="contact-form-container">
            
            {/* Wrapper Qendërzues i Formës - Përdor klasat e reja të SCSS */}
            <div className="form-page-wrapper">
                
                <h1 className="page-title text-center">
                    Kërkesë për Partneritet Fason
                </h1>
                <p className="page-intro text-center">
                    Plotësoni detajet më poshtë dhe filloni diskutimin për bashkëpunimin strategjik.
                </p>

                {/* Forma e Kontaktit me Hije dhe Rrethim të Pastër */}
                <div className="contact-form-wrapper">
                    <form onSubmit={handleSubmit} className="space-y-6 contact-form">
                        
                        {/* Mesazhi i Gabimit */}
                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative" role="alert">
                                <strong className="font-bold">Gabim: </strong>
                                <span className="block sm:inline">{error}</span>
                            </div>
                        )}

                        {/* Emri dhe Kompania (Grid 2 Kolonë) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="contactPerson" className="input-label mb-1 block">Emri i Plotë</label>
                                <div className="relative">
                                    <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-600/70" />
                                    <input 
                                        type="text" 
                                        id="contactPerson" 
                                        name="contactPerson" 
                                        value={formData.contactPerson} 
                                        onChange={handleChange} 
                                        className={inputClasses}
                                        required 
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="companyName" className="input-label mb-1 block">Emri i Kompanisë / Brendit</label>
                                <div className="relative">
                                    <Building size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-600/70" />
                                    <input 
                                        type="text" 
                                        id="companyName" 
                                        name="companyName" 
                                        value={formData.companyName} 
                                        onChange={handleChange} 
                                        className={inputClasses}
                                        required 
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Email dhe Telefoni (Grid 2 Kolonë) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="email" className="input-label mb-1 block">Adresa E-mail</label>
                                <div className="relative">
                                    <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-600/70" />
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        className={inputClasses}
                                        required 
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="input-label mb-1 block">Numri i Telefonit (Opsionale)</label>
                                <div className="relative">
                                    <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-600/70" />
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        name="phone" 
                                        value={formData.phone} 
                                        onChange={handleChange} 
                                        className={inputClasses}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Mesazhi (Full Width) */}
                        <div>
                            <label htmlFor="message" className="input-label mb-1 block">Përshkrimi i Projektit</label>
                            <div className="relative">
                                <MessageSquare size={20} className="absolute left-3 top-4 text-orange-600/70" />
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="5"
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    className={`${inputClasses} resize-none`}
                                    required 
                                ></textarea>
                            </div>
                        </div>

                        {/* Butoni i Dërgimit */}
                        <button 
                            type="submit" 
                            className={submitButtonClasses}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader size={20} className="animate-spin mr-2" /> DUKE DËRGUAR...
                                </>
                            ) : (
                                "DËRGO KËRKESËN TANI"
                            )}
                        </button>
                    </form>
                    
                    {/* Butoni Kthehu në Kreu */}
                    <div className="text-center mt-6">
                        <Link to="/" className="text-gray-600 hover:text-orange-600 transition duration-150 inline-flex items-center text-sm font-medium">
                            <ArrowLeft size={16} className="mr-1" /> Kthehu në Kreu
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PartnershipPage;
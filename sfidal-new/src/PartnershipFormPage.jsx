import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Building, MessageSquare, ArrowLeft, Loader, ShieldCheck } from 'lucide-react'; 

// VËREJTJE: Endpoint-i i API-së së Backend-it (Pa ndryshuar)
const API_ENDPOINT = "/api/partneritet"; 

const PartnershipPage = () => {
    // Shteti i formularit - Fusha requestType është HEQUR
    const [formData, setFormData] = useState({
        contactPerson: '',
        companyName: '',
        email: '',
        phone: '',
        message: ''
        // requestType nuk është më këtu
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
        
        // Përgatisim të dhënat për dërgim. 
        // requestType do të jetë 'Default' ose 'Njoftim' nëse kërkohet nga Backend.
        const dataToSend = {
            ...formData,
            // Shtojmë një requestType default, pasi modeli juaj e kërkon. 
            // Nëse modeli lejon mungesën e requestType, thjesht hiqeni këtë rresht.
            requestType: 'NjoftimPaSpecifika' 
        };

        try {
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend) // Dërgojmë dataToSend
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setIsSubmitted(true);
                // Pastrimi i formës pas suksesit
                setFormData({ contactPerson: '', companyName: '', email: '', phone: '', message: '' }); 

            } else {
                // Këtu do të kapet gabimi nëse requestType Default nuk lejohet
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
    const inputClasses = "w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-600 focus:border-orange-600 transition duration-150 shadow-sm";
    
    // Stili i ri i butonit CTA
    const submitButtonClasses = "w-full cta-button-dark mt-4 justify-center flex items-center disabled:opacity-50 disabled:cursor-not-allowed";

    // Layout-i i Suksesit
    if (isSubmitted) {
        return (
            <div className="page-padding min-h-screen flex flex-col items-center justify-center text-center bg-gray-50">
                <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl max-w-lg mx-auto transform transition duration-500 hover:scale-[1.01]">
                    <ShieldCheck size={48} className="text-orange-600 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Kërkesa u Dërgua me Sukses!</h2>
                    <p className="text-gray-600 mb-8">
                        Faleminderit që na kontaktuat. Ekipi ynë do t'ju kontaktojë brenda 48 orëve.
                    </p>
                    <Link to="/" className="cta-button w-auto inline-flex items-center">
                        <ArrowLeft size={20} className="mr-2" /> Kthehu në Kreu
                    </Link>
                </div>
            </div>
        );
    }

    // Layout-i i Formës
    return (
        <div className="page-padding min-h-screen bg-gray-50 font-sans flex items-center justify-center">
            
            {/* Wrapper Qendërzues i Formës */}
            <div className="w-full max-w-xl mx-auto px-4 py-8 md:py-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-stone-800 text-center mb-4">
                    Kërkesë për Partneritet Fason
                </h1>
                <p className="text-lg text-gray-600 text-center mb-10">
                    Plotësoni detajet më poshtë dhe filloni diskutimin për bashkëpunimin strategjik.
                </p>

                {/* Forma e Kontaktit me Hije dhe Rrethim të Pastër */}
                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-100">
                    
                    {/* Mesazhi i Gabimit */}
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            <strong className="font-bold">Gabim: </strong>
                            <span className="block sm:inline">{error}</span>
                        </div>
                    )}

                    {/* Emri dhe Kompania (Grid 2 Kolonë) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="contactPerson" className="input-label">Emri i Plotë</label>
                            <div className="relative">
                                <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input 
                                    type="text" 
                                    id="contactPerson" 
                                    name="contactPerson" 
                                    value={formData.contactPerson} 
                                    onChange={handleChange} 
                                    className={`${inputClasses} pl-10`}
                                    placeholder="P.sh. Marku Gjikondi"
                                    required 
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="companyName" className="input-label">Emri i Kompanisë / Brendit</label>
                            <div className="relative">
                                <Building size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input 
                                    type="text" 
                                    id="companyName" 
                                    name="companyName" 
                                    value={formData.companyName} 
                                    onChange={handleChange} 
                                    className={`${inputClasses} pl-10`}
                                    placeholder="P.sh. Italian Shoes S.R.L."
                                    required 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Email dhe Telefoni (Grid 2 Kolonë) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="email" className="input-label">Adresa E-mail</label>
                            <div className="relative">
                                <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    className={`${inputClasses} pl-10`}
                                    placeholder="kontakt@kompaniajuaj.com"
                                    required 
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="input-label">Numri i Telefonit (Opsionale)</label>
                            <div className="relative">
                                <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone" 
                                    value={formData.phone} 
                                    onChange={handleChange} 
                                    className={`${inputClasses} pl-10`}
                                    placeholder="+355 xxx xxx xxx"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Mesazhi (Full Width) */}
                    <div>
                        <label htmlFor="message" className="input-label">Mesazhi / Përshkrimi i Projektit</label>
                        <div className="relative">
                            <MessageSquare size={20} className="absolute left-3 top-4 text-gray-400" />
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="4"
                                value={formData.message} 
                                onChange={handleChange} 
                                className={`${inputClasses} pl-10 resize-none`}
                                placeholder="Përshkruani llojin e këpucëve, materialet ose çdo specifikë tjetër."
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
                                <Loader size={20} className="animate-spin mr-2" /> Duke Dërguar...
                            </>
                        ) : (
                            "Dërgo Kërkesën"
                        )}
                    </button>
                </form>
                
                {/* Butoni Kthehu në Kreu */}
                <div className="text-center mt-8">
                    <Link to="/" className="text-gray-600 hover:text-orange-600 transition duration-150 inline-flex items-center text-sm font-medium">
                        <ArrowLeft size={16} className="mr-1" /> Kthehu në Kreu
                    </Link>
                </div>

            </div>
        </div>
    );
}

// Komponentet e nevojshme të ikonave (për të mos pasur gabime në React)
const User = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

export default PartnershipPage;
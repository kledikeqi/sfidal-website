import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Building, MessageSquare, ArrowLeft } from 'lucide-react'; 

const PartnershipPage = () => {
    // Shteti i formularit
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        capacity: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Këtu do të bëhej logjika e dërgimit të të dhënave (p.sh., me API)
        console.log("Forma u dërgua me të dhënat:", formData);

        // Simulojmë dërgimin e suksesshëm
        setIsSubmitted(true);
        // Këtu mund të shtohet logjika e pastrimit të formës nëse dëshirohet
    };

    // Stili i rregulluar dhe i përmirësuar për fushën Input
    const inputClasses = "w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition duration-150 shadow-sm";
    
    // Stili i ri i butonit CTA, i trashëguar nga SCSS, por me w-full këtu
    const submitButtonClasses = "w-full cta-button mt-4 justify-center flex items-center";

    if (isSubmitted) {
        return (
            <div className="page-padding min-h-screen flex flex-col items-center justify-center text-center bg-gray-50">
                <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl max-w-lg mx-auto transform transition duration-500 hover:scale-[1.01]">
                    <ShieldCheck size={48} className="text-orange-600 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Kërkesa u Dërgua me Sukses!</h2>
                    <p className="text-gray-600 mb-8">
                        Faleminderit që na kontaktuat. Ekipi ynë do të shqyrtojë kërkesën tuaj për kapacitet prodhimi dhe do t'ju kontaktojë brenda 48 orëve.
                    </p>
                    <Link to="/" className="cta-button w-auto inline-flex items-center">
                        <ArrowLeft size={20} className="mr-2" /> Kthehu në Kreu
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="page-padding min-h-screen bg-white font-sans">
            
            {/* Wrapper Qendërzues i Formës - Rregullon ngjeshjen dhe qendërzon */}
            <div className="max-w-xl mx-auto px-4 py-8 md:py-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-stone-800 text-center mb-4">
                    Kërkesë për Partneritet Fason
                </h1>
                <p className="text-lg text-gray-600 text-center mb-10">
                    Plotësoni detajet më poshtë për të diskutuar kapacitetet tona të prodhimit dhe standardet e cilësisë.
                </p>

                {/* Forma e Kontaktit - Përdor Grid për Layout të Organizuar */}
                <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100">
                    
                    {/* Emri dhe Kompania (Në një rresht në desktop, në kolonë në celular) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="input-label">Emri i Plotë</label>
                            <div className="relative">
                                <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    className={`${inputClasses} pl-10`}
                                    placeholder="P.sh. Marku Gjikondi"
                                    required 
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="company" className="input-label">Emri i Kompanisë / Brendit</label>
                            <div className="relative">
                                <Building size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input 
                                    type="text" 
                                    id="company" 
                                    name="company" 
                                    value={formData.company} 
                                    onChange={handleChange} 
                                    className={`${inputClasses} pl-10`}
                                    placeholder="P.sh. Italian Shoes S.R.L."
                                    required 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Email dhe Telefoni (Në një rresht në desktop, në kolonë në celular) */}
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

                    {/* Kapaciteti i Kërkuar (Dropdown) */}
                    <div>
                        <label htmlFor="capacity" className="input-label">Kapaciteti i Kërkuar Për Muaj (Palë Këpucë)</label>
                        <select 
                            id="capacity" 
                            name="capacity" 
                            value={formData.capacity} 
                            onChange={handleChange} 
                            className={inputClasses}
                            required
                        >
                            <option value="">Zgjidhni një opsion</option>
                            <option value="500-1000">500 - 1,000 palë</option>
                            <option value="1000-3000">1,000 - 3,000 palë</option>
                            <option value="3000-5000">3,000 - 5,000 palë</option>
                            <option value="5000+">Mbi 5,000 palë</option>
                        </select>
                    </div>

                    {/* Mesazhi */}
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
                    <button type="submit" className={submitButtonClasses}>
                        Dërgo Kërkesën
                    </button>
                </form>
                
                {/* Butoni Kthehu në Kreu - Qendërzuar në fund */}
                <div className="text-center mt-8">
                    <Link to="/" className="text-gray-600 hover:text-orange-600 transition duration-150 inline-flex items-center text-sm font-medium">
                        <ArrowLeft size={16} className="mr-1" /> Kthehu në Kreu
                    </Link>
                </div>

            </div>
        </div>
    );
}

// Komponenti User është i nevojshëm për funksionalitetin e ikonave
const User = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

// Komponenti ShieldCheck është i nevojshëm për funksionalitetin e ikonave
const ShieldCheck = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
    </svg>
);

export default PartnershipPage;
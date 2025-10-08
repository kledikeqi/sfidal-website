import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Ruler, Layers, ShieldCheck, ArrowRight, Zap, Globe, Users } from 'lucide-react'; 

const servicesData = [
    { icon: <Ruler size={36} className="text-white" />, title: "1. Zhvillimi i Modeleve (Prestarinë)", description: "Ne punojmë me dizajnerët tuaj për të kthyer prototipet në plane të gatshme për prodhim në shkallë. Kjo përfshin optimizimin e shkallëzimit dhe prerjen e mostrave të para.", details: ["Prototipizimi i shpejtë", "Optimizimi i përdorimit të materialit"], theme: 'orange-theme' }, // Zëvendësuam 'color' me 'theme'
    { icon: <Layers size={36} className="text-white" />, title: "2. Prodhimi Fason me Kapacitet", description: "Me makineri moderne dhe ekspertizë të lartë, garantojmë kapacitet të madh prodhimi me përpikëri dhe fokus te lëkura natyrale. Ne prodhojmë sipas standardeve Evropiane.", details: ["Kapacitet prodhimi fleksibël", "Zbatim i saktë i skedave teknike"], theme: 'dark-theme' },
    { icon: <ShieldCheck size={36} className="text-white" />, title: "3. Sigurimi i Standardeve të Cilësisë (QC)", description: "Çdo palë këpucë kalon në kontrolle rigoroze në çdo fazë. Ne sigurojmë që porosia juaj të plotësojë standardet më të larta të cilësisë evropiane.", details: ["Kontrolli i cilësisë në hyrje", "Inspektim në proces i çdo reparti"], theme: 'orange-theme' },
    { icon: <Truck size={36} className="text-white" />, title: "4. Logjistika dhe Eksporti në BE", description: "Ne thjeshtojmë procesin e eksportit. Përdorim regjimin e përpunimit aktiv dhe sigurojmë dërgimin e produktit të gatshëm në destinacionin final në kohë dhe pa probleme doganore.", details: ["Ambalazhimi profesional", "Dokumentacioni i plotë doganor"], theme: 'dark-theme' },
];

// Komponenti i thjeshtë i kartës, tani duke përdorur SCSS
const ServiceCard = ({ icon, title, description, details, theme }) => (
    <div className={`card-style-new service-card transition duration-500`}> 
        <div className={`service-card-header ${theme}`}>
            <div className="icon-container">
                {icon}
            </div>
            {/* Teksti tani merr ngjyrën nga klasa e temës */}
            <h3>{title}</h3> 
        </div>
        <div className="service-card-body">
            <p className="text-gray-700 mb-5 text-base">{description}</p>
            {/* Ul-ja merr stilin e ri nga SCSS */}
            <ul> 
                {details.map((detail, index) => (
                    <li key={index}>
                        <ArrowRight size={16} className="text-orange-600 mr-2 flex-shrink-0 mt-[3px]" />
                        <span className="font-medium">{detail}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const ServicesPage = () => {
  return (
    // Përdorim klasën SCSS 'page-padding'
    <div className="page-padding min-h-screen font-sans"> 
      
      {/* Seksioni i Hyrjes, Qendërzuar */}
      <header className="max-w-4xl mx-auto text-center mb-16 px-4">
        
        <h2>Procesi Fason, i Projektuar për Eksport</h2>
        
        <p className="text-xl text-gray-600 leading-relaxed mx-auto max-w-3xl mb-8">
          Sfidal Sh.P.K ofron një qasje të integruar, të ndarë në faza kritike që garantojnë cilësi dhe zbatim rigoroz të standardeve Evropiane. Ne jemi partneri juaj nga prototipi deri te dera e magazinës.
        </p>
        <Link to="/partneritet" className="cta-button">
            Kërko Kapacitetin Tonal të Prodhimit
        </Link>
      </header>

      {/* Seksioni i Kartave të Shërbimeve - Tani me klasën e re SCSS */}
      <div className="services-grid-wrapper"> 
        {servicesData.map((service, index) => (
            <ServiceCard 
                key={index} 
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
                details={service.details} 
                theme={service.theme} // Përdorim 'theme'
            />
        ))}
      </div>

      {/* Seksioni i Përgjegjshmërisë - Tani me klasën e re SCSS */}
      <div className="mt-24 pt-12 border-t border-gray-200 max-w-6xl mx-auto px-4">
        <h3 className="text-center">Angazhimi Mjedisor dhe Social</h3>
        <p className="text-center text-lg text-gray-600 mb-12">Ne shkojmë përtej cilësisë së produktit, duke garantuar përgjegjshmëri në mjedis dhe etikë pune.</p>

        <div className="commitment-grid">
            
            <div className="commitment-card">
                <Globe size={40} className="text-orange-600 mx-auto mb-3" />
                <h4 className="font-bold text-xl mb-2 text-stone-800">Mjedis dhe Mbetje</h4>
                <p className="text-gray-600 text-base">Mbetjet menaxhohen sipas standardeve, me kontrata të licencuara. Zero ndotje mjedisore direkte.</p>
            </div>
            
            <div className="commitment-card">
                <Users size={40} className="text-orange-600 mx-auto mb-3" />
                <h4 className="font-bold text-xl mb-2 text-stone-800">Siguria dhe Punësimi</h4>
                <p className="text-gray-600 text-base">Përdorim ventilim dhe izolim akustik. Punëdhënës me të drejta të plota sociale dhe kontrata të rregullta.</p>
            </div>
            
            <div className="commitment-card">
                <Zap size={40} className="text-orange-600 mx-auto mb-3" />
                <h4 className="font-bold text-xl mb-2 text-stone-800">Efikasiteti i Procesit</h4>
                <p className="text-gray-600 text-base">Përdorimi i sistemit të përpunimit aktiv (AP) për të optimizuar kostot dhe kohën e import-eksportit të materialeve.</p>
            </div>
        </div>

      </div>
      
    </div>
  );
}

export default ServicesPage;
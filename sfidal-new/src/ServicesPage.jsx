import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Ruler, Layers, ShieldCheck, ArrowRight, Zap, Globe, Users } from 'lucide-react'; 

const servicesData = [
    { icon: <Ruler size={36} className="text-white" />, title: "1. Zhvillimi i Modeleve (Prestarinë)", description: "Ne punojmë me dizajnerët tuaj për të kthyer prototipet në plane të gatshme për prodhim në shkallë. Kjo përfshin optimizimin e shkallëzimit dhe prerjen e mostrave të para.", details: ["Prototipizimi i shpejtë", "Optimizimi i përdorimit të materialit"], color: 'bg-orange-600' },
    { icon: <Layers size={36} className="text-white" />, title: "2. Prodhimi Fason me Kapacitet", description: "Me makineri moderne dhe ekspertizë të lartë, garantojmë kapacitet të madh prodhimi me përpikëri dhe fokus te lëkura natyrale. Ne prodhojmë sipas standardeve Evropiane.", details: ["Kapacitet prodhimi fleksibël", "Zbatim i saktë i skedave teknike"], color: 'bg-gray-800' },
    { icon: <ShieldCheck size={36} className="text-white" />, title: "3. Sigurimi i Standardeve të Cilësisë (QC)", description: "Çdo palë këpucë kalon në kontrolle rigoroze në çdo fazë. Ne sigurojmë që porosia juaj të plotësojë standardet më të larta të cilësisë evropiane.", details: ["Kontrolli i cilësisë në hyrje", "Inspektim në proces i çdo reparti"], color: 'bg-orange-600' },
    { icon: <Truck size={36} className="text-white" />, title: "4. Logjistika dhe Eksporti në BE", description: "Ne thjeshtojmë procesin e eksportit. Përdorim regjimin e përpunimit aktiv dhe sigurojmë dërgimin e produktit të gatshëm në destinacionin final në kohë dhe pa probleme doganore.", details: ["Ambalazhimi profesional", "Dokumentacioni i plotë doganor"], color: 'bg-gray-800' },
];

const ServiceCard = ({ icon, title, description, details, color }) => (
    // Përdorim klasën e dizajnuar për kartën card-style-new
    <div className="card-style-new flex flex-col overflow-hidden transition duration-500 hover:shadow-orange-300/50">
        <div className={`p-6 ${color} flex items-start space-x-4 rounded-t-xl`}>
            <div className="p-3 rounded-full bg-white bg-opacity-20 flex-shrink-0">
                {icon}
            </div>
            <h3 className="text-xl font-extrabold text-white leading-tight mt-1">{title}</h3>
        </div>
        <div className="p-6 flex-grow">
            <p className="text-gray-700 mb-5 text-base">{description}</p>
            <ul className="list-none space-y-3 text-gray-800 border-t pt-4 mt-2">
                {details.map((detail, index) => (
                    <li key={index} className="flex items-start text-sm">
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
    <div className="page-padding min-h-screen px-4 sm:px-8 lg:px-12 bg-gray-50 font-sans"> 
      
      {/* Seksioni i Hyrjes, i Qendërzuar si te Rreth Nesh */}
      <header className="max-w-4xl mx-auto text-center mb-16">
        
        {/* Përdorim tag-un <h2> që të marrë stilin nga Sfidal.scss */}
        <h2>Procesi Fason, i Projektuar për Eksport</h2>
        
        {/* Përdorim tag-un <p> që të marrë stilin nga Sfidal.scss */}
        <p className="text-xl text-gray-600 leading-relaxed mx-auto max-w-3xl">
          Sfidal Sh.P.K ofron një qasje të integruar, të ndarë në faza kritike që garantojnë cilësi dhe zbatim rigoroz të standardeve Evropiane. Ne jemi partneri juaj nga prototipi deri te dera e magazinës.
        </p>
        <Link to="/partneritet" className="cta-button">
            Kërko Kapacitetin Tonal të Prodhimit
        </Link>
      </header>

      {/* Seksioni i Kartave të Shërbimeve */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {servicesData.map((service, index) => (
            <ServiceCard 
                key={index} 
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
                details={service.details} 
                color={service.color}
            />
        ))}
      </div>

      {/* Seksioni i Përgjegjshmërisë */}
      <div className="mt-24 pt-12 border-t border-gray-200 max-w-6xl mx-auto text-center">
        <h3>Angazhimi Mjedisor dhe Social</h3>
        <p className="text-center text-lg text-gray-600 mb-12">Ne shkojmë përtej cilësisë së produktit, duke garantuar përgjegjshmëri në mjedis dhe etikë pune.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            <div className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-orange-600 text-center">
                <Globe size={40} className="text-orange-600 mx-auto mb-3" />
                <h4 className="font-bold text-xl mb-2 text-stone-800">Mjedis dhe Mbetje</h4>
                <p className="text-gray-600 text-base">Mbetjet menaxhohen sipas standardeve, me kontrata të licencuara. Zero ndotje mjedisore direkte.</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-orange-600 text-center">
                <Users size={40} className="text-orange-600 mx-auto mb-3" />
                <h4 className="font-bold text-xl mb-2 text-stone-800">Siguria dhe Punësimi</h4>
                <p className="text-gray-600 text-base">Përdorim ventilim dhe izolim akustik. Punëdhënës me të drejta të plota sociale dhe kontrata të rregullta.</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-orange-600 text-center">
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
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Factory, Users, CheckCircle, Leaf, Handshake } from 'lucide-react'; // Sigurojmë që ikonat janë importuar saktë

const QualitySection = () => {
    // Përdorim klasën SCSS 'page-padding'
    return (
        <div className="page-padding min-h-screen px-4 sm:px-8 lg:px-12 bg-gray-50 font-sans">
            
            {/* Headeri dhe Përshkrimi i Qendërzuar */}
            <header className="max-w-4xl mx-auto text-center mb-16">
                <Shield size={60} className="text-orange-600 mx-auto mb-4" />
                
                {/* <h2> merr stilin nga SCSS (qendërzohet) */}
                <h2>Angazhimi Rigoroz ndaj Cilësisë dhe Etikës</h2>
                
                <p className="text-xl text-gray-600 leading-relaxed mx-auto max-w-3xl">
                    Cilësia për Sfidal nuk është një opsion, por një standard. Ne zbatojmë sisteme të kontrollit të certifikuara dhe jemi të përkushtuar ndaj praktikave më të mira mjedisore dhe sociale në prodhimin fason.
                </p>
            </header>

            {/* Seksioni 1: Kontrolli i Procesit - Kartat e Dizenjuara dhe Të Qendërzuara */}
            <div className="max-w-6xl mx-auto mb-16">
                
                {/* NDRYSHIMI KRYESOR: Titulli i seksionit (h3) qendërzohet këtu */}
                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center border-b-2 border-orange-600/50 pb-2">Kontrolli i Cilësisë në Çdo Fazë</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Kartat tani kanë text-center */}
                    <div className="card-style-new text-center"> 
                        <CheckCircle size={40} className="text-orange-600 mx-auto mb-3" />
                        <h4 className="font-semibold text-xl mb-2 text-gray-900">QC në Hyrje (Input QC)</h4>
                        <p className="text-gray-600 text-base">Verifikimi i lëkurës dhe materialeve kundrejt specifikave të klientit. Asnjë material i pacertifikuar nuk kalon në prodhim.</p>
                    </div>

                    <div className="card-style-new text-center">
                        <Factory size={40} className="text-orange-600 mx-auto mb-3" />
                        <h4 className="font-semibold text-xl mb-2 text-gray-900">QC në Proces (In-Process QC)</h4>
                        <p className="text-gray-600 text-base">Inspektimi i rregullt i të gjitha fazave: prerja, qepja dhe montimi. Zbatim i saktë i skedave teknike.</p>
                    </div>
                    
                    <div className="card-style-new text-center">
                        <Handshake size={40} className="text-orange-600 mx-auto mb-3" />
                        <h4 className="font-semibold text-xl mb-2 text-gray-900">QC Final dhe Eksport</h4>
                        <p className="text-gray-600 text-base">Kontrolli i fundit i 100% të produktit të gatshëm (etiketimi, ambalazhimi) përpara ngarkimit për eksport.</p>
                    </div>
                </div>
            </div>

            {/* Seksioni 2: Përgjegjshmëria Etike dhe Mjedisore (Tani Qendërzohet) */}
            <div className="max-w-5xl mx-auto p-10 rounded-xl bg-white shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center border-b-2 border-gray-400/50 pb-2">Përgjegjshmëria Etike dhe Mjedisore</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    
                    {/* Heqim klasat e qendërzimit tek lista që teksti të jetë i lexueshëm */}
                    <div>
                        <Leaf size={32} className="text-orange-600 mb-3" />
                        <h4 className="font-extrabold text-xl mb-3 text-gray-900">Menaxhimi Mjedisor</h4>
                        <ul className="space-y-3 text-gray-700 list-disc pl-5">
                            <li>**Mbetjet e Kontraktuara:** Mbetjet grumbullohen dhe tërhiqen nga kompani të licencuara.</li>
                            <li>**Kontrolli i Ajrit:** Përdorimi i sistemeve të ventilimit me filtra për kapjen e pluhurave.</li>
                            <li>**Vlerësimi Mjedisor:** Operacionet tona janë në përputhje me kërkesat e VNM.</li>
                        </ul>
                    </div>

                    <div>
                        <Users size={32} className="text-orange-600 mb-3" />
                        <h4 className="font-extrabold text-xl mb-3 text-gray-900">Etika e Punës dhe Siguria</h4>
                        <ul className="space-y-3 text-gray-700 list-disc pl-5">
                            <li>**Siguria në Punë:** Aplikohen të gjitha masat mbrojtëse, përfshirë izolimin akustik.</li>
                            <li>**Punësimi i Rregullt:** Të gjithë punonjësit janë të punësuar me kontrata të rregullta.</li>
                            <li>**Ambienti i Punës:** Një mjedis i pastër, i ndriçuar dhe i ventiluar.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* CTA Final */}
            <div className='text-center mt-16'>
                <p className='text-xl text-gray-700 mb-4'>Jeni gati për një partner që i jep përparësi cilësisë dhe përgjegjshmërisë?</p>
                <Link to="/partneritet" className='cta-button'>
                    Fillo Partneritetin Tani
                </Link>
            </div>
            
        </div>
    );
};

export default QualitySection;
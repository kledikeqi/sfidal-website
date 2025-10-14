import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Factory, Users, CheckCircle, Leaf, Handshake } from 'lucide-react';

const QualitySection = () => {
    // Përdorim klasën SCSS 'page-padding'
    return (
        // HEQUR: px-4 nga ky div. SCSS do të menaxhojë paddingun anësor.
        <div className="page-padding min-h-screen font-sans">
            
            {/* KLASA E RE 'content-wrapper' qendërson të gjithë përmbajtjen */}
            <div className="content-wrapper">

                {/* Headeri dhe Përshkrimi i Qendërzuar */}
                <header className="max-w-4xl mx-auto text-center mb-16">
                    <Shield size={60} className="text-orange-600 mx-auto mb-4" />

                    {/* <h2> merr stilin nga SCSS (qendërzohet) */}
                    <h2>Angazhimi Rigoroz ndaj Cilësisë dhe Etikës</h2>

                    <p className="text-xl text-gray-600 leading-relaxed mx-auto max-w-3xl">
                        Cilësia për Sfidal nuk është një opsion, por një standard. Ne zbatojmë sisteme të kontrollit të certifikuara dhe jemi të përkushtuar ndaj praktikave më të mira mjedisore dhe sociale në prodhimin fason.
                    </p>
                </header>

                {/* Seksioni 1: Kontrolli i Procesit - Tani me klasën e re SCSS */}
                <div className="mb-16">

                    <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center border-b-2 border-orange-600/50 pb-2">Kontrolli i Cilësisë në Çdo Fazë</h3>

                    <div className="qc-grid">

                        {/* Kartat tani kanë stilin e ri SCSS */}
                        <div className="card-style-new">
                            <CheckCircle size={40} className="text-orange-600 mx-auto mb-3" />
                            <h4 className="font-semibold text-xl mb-2 text-gray-900">QC në Hyrje (Input QC)</h4>
                            <p className="text-gray-600 text-base">Verifikimi i lëkurës dhe materialeve kundrejt specifikave të klientit. Asnjë material i pacertifikuar nuk kalon në prodhim.</p>
                        </div>

                        <div className="card-style-new">
                            <Factory size={40} className="text-orange-600 mx-auto mb-3" />
                            <h4 className="font-semibold text-xl mb-2 text-gray-900">QC në Proces (In-Process QC)</h4>
                            <p className="text-gray-600 text-base">Inspektimi i rregullt i të gjitha fazave: prerja, qepja dhe montimi. Zbatim i saktë i skedave teknike.</p>
                        </div>

                        <div className="card-style-new">
                            <Handshake size={40} className="text-orange-600 mx-auto mb-3" />
                            <h4 className="font-semibold text-xl mb-2 text-gray-900">QC Final dhe Eksport</h4>
                            <p className="text-gray-600 text-base">Kontrolli i fundit i 100% të produktit të gatshëm (etiketimi, ambalazhimi) përpara ngarkimit për eksport.</p>
                        </div>
                    </div>
                </div>

                {/* Seksioni 2: Përgjegjshmëria Etike dhe Mjedisore */}
                <div className="ethical-commitment-section">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center border-b-2 border-gray-400/50 pb-2">Përgjegjshmëria Etike dhe Mjedisore</h3>

                    <div className="ethical-grid">

                        {/* Kolona 1: Mjedisi */}
                        <div>
                            <Leaf size={32} className="text-orange-600 mb-3" />
                            <h4 className="font-extrabold text-xl mb-3 text-gray-900">Menaxhimi Mjedisor</h4>
                            <ul className="space-y-3 text-gray-700 list-disc pl-5">
                                <li><span className="accent-text">Mbetjet e Kontraktuara:</span> Mbetjet grumbullohen dhe tërhiqen nga kompani të licencuara.</li>
                                <li><span className="accent-text">Kontrolli i Ajrit:</span> Përdorimi i sistemeve të ventilimit me filtra për kapjen e pluhurave.</li>
                                <li><span className="accent-text">Vlerësimi Mjedisor:</span> Operacionet tona janë në përputhje me kërkesat e VNM.</li>
                            </ul>
                        </div>

                        {/* Kolona 2: Etika */}
                        <div>
                            <Users size={32} className="text-orange-600 mb-3" />
                            <h4 className="font-extrabold text-xl mb-3 text-gray-900">Etika e Punës dhe Siguria</h4>
                            <ul className="space-y-3 text-gray-700 list-disc pl-5">
                                <li><span className="accent-text">Siguria në Punë:</span> Aplikohen të gjitha masat mbrojtëse, përfshirë izolimin akustik.</li>
                                <li><span className="accent-text">Punësimi i Rregullt:</span> Të gjithë punonjësit janë të punësuar me kontrata të rregullta.</li>
                                <li><span className="accent-text">Ambienti i Punës:</span> Një mjedis i pastër, i ndriçuar dhe i ventiluar.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CTA Final - Përdorimi i max-w-6xl mx-auto dhe text-center për qendërzim të sigurt */}
                <div className='text-center mt-16 max-w-6xl mx-auto'>
                    {/* Paragrafi qendërzohet brenda këtij divi. */}
                    <p className='text-xl text-gray-700 mb-4 max-w-xl mx-auto'>Jeni gati për një partner që i jep përparësi cilësisë dhe përgjegjshmërisë?</p>
                    <Link to="/partneritet" className='cta-button'>
                        Fillo Partneritetin Tani
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default QualitySection;

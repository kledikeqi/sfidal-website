import React from 'react'
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
// Zëvendësoni 'SfidalLogoWhite' me importin aktual të logos tuaj (versioni i bardhë)
import SfidalLogoWhite from './images/shoeprint.png'; // NDRYSHONI KËTË!

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-content">
                
                {/* Kolona 1: Logo dhe Përshkrimi */}
                <div>
                    {/* Sigurohuni që imazhi i logos (i bardhë) të jetë i importuar saktë */}
                    <img src={SfidalLogoWhite} alt="Sfidal Logo" className="footer-logo" />
                    <p className="text-gray-400 max-w-sm mb-4">
                        Prodhim fason i këpucëve për eksport. Angazhimi ynë: cilësi evropiane, standarde etike, dhe efikasitet maksimal.
                    </p>
                    <div className="flex space-x-3 mt-5">
                        {/* Mund të shtoni ikona sociale këtu */}
                        <a href="/" className="text-gray-500 hover:text-accent-orange transition"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35c-0.732 0-1.325 0.593-1.325 1.325v21.35c0 0.732 0.593 1.325 1.325 1.325h21.35c0.732 0 1.325-0.593 1.325-1.325v-21.35c0-0.732-0.593-1.325-1.325-1.325zM18.441 8.875c-0.573-0.573-1.332-0.887-2.144-0.887-1.666 0-3.045 1.488-3.045 3.328v6.784h-3.921v-10.456h3.693v1.616c0.528-0.99 1.834-2.112 4.098-2.112 2.768 0 4.881 1.808 4.881 5.706v6.864h-3.921v-6.784c0-0.908-0.016-2.074-1.264-2.074s-1.458 1.056-1.458 2.016v6.842h-3.921v-10.456h3.693v1.616c0.528-0.99 1.834-2.112 4.098-2.112 2.768 0 4.881 1.808 4.881 5.706v6.864h-3.921v-6.784c0-0.908-0.016-2.074-1.264-2.074s-1.458 1.056-1.458 2.016v6.842h-3.921v-10.456h3.693v1.616c0.528-0.99 1.834-2.112 4.098-2.112 2.768 0 4.881 1.808 4.881 5.706v6.864h-3.921v-6.784c0-0.908-0.016-2.074-1.264-2.074s-1.458 1.056-1.458 2.016v6.842h-3.921v-10.456h3.693v1.616c0.528-0.99 1.834-2.112 4.098-2.112 2.768 0 4.881 1.808 4.881 5.706v6.864h-3.921v-6.784c0-0.908-0.016-2.074-1.264-2.074s-1.458 1.056-1.458 2.016v6.842h-3.921v-10.456h3.693v1.616c0.528-0.99 1.834-2.112 4.098-2.112 2.768 0 4.881 1.808 4.881 5.706v6.864h-3.921v-6.784c0-0.908-0.016-2.074-1.264-2.074s-1.458 1.056-1.458 2.016v6.842h-3.921v-10.456h3.693v1.616c0.528-0.99 1.834-2.112 4.098-2.112 2.768 0 4.881 1.808 4.881 5.706v6.864h-3.921v-6.784c0-0.908-0.016-2.074-1.264-2.074s-1.458 1.056-1.458 2.016v6.842h-3.921v-10.456h3.693v1.616c0.528-0.99 1.834-2.112 4.098-2.112 2.768 0 4.881 1.808 4.881 5.706v6.864h-3.921v-6.784c0-0.908-0.016-2.074-1.264-2.074s-1.458 1.056-1.458 2.016v6.842h-3.921v-10.456h3.693v1.616c0.528-0.99 1.834-2.112 4.098-2.112 2.768 0 4.881 1.808 4.881 5.706v6.864h-3.921v-6.784c0-0.908-0.016-2.074-1.264-2.074s-1.458 1.056-1.458 2.016v6.842h-3.921v-10.456h3.693v1.616c0.528-0.99 1.834-2.112 4.098-2.112 2.768 0 4.881 1.808 4.881 5.706v6.864h-3.921v-6.784c0-0.908-0.016-2.074-1.264-2.074s-1.458 1.056-1.458 2.016v6.842h-3.921v-10.456h3.693v1.616c0.528-0.99 1.834-2.112 4.098-2.112 2.768 0 4.881 1.808 4.881 5.706v6.864h-3.921v-6.784c0-0.908-0.016-2.074-1.264-2.074s-1.458 1.056-1.458 2.016v6.842h-3.921v-10.456h3.693v1.616c0.528-0.99 1.834-2.112 4.098-2.112 2.768 0 4.881 1.808 4.881 5.706v6.864h-3.921v-6.784c0-0.908-0.016-2.074-1.264-2.074s-1.458 1.056-1.458 2.016v6.842h-3.921v-10.456h3.693v1.616c0.528-0.99 1.834-2.112 4.098-2.112 2.768 0 4.881 1.808 4.881 5.706v6.864h-3.921v-6.784c0-0.908-0.016-2.074-1.264-2.074s-1.458 1.056-1.458 2.016v6.842h-3.921v-10.456h3.693v1.616c0.528-0.99 1.834-2.112 4.098-2.112 2.768 0 4.881 1.808 4.881 5.706v6.864h-3.921v-6.784c0-0.908-0.016-2.074-1.264-2.074s-1.458 1.056-1.458 2.016v6.842h-3.921v-10.456h3.693v1.616c0-0.573-0.573-0.573-0.573-0.573zM14.77 12.133h-0.024c-0.428-0.428-1.07-0.742-1.846-0.742-1.396 0-2.528 1.132-2.528 2.528s1.132 2.528 2.528 2.528c0.776 0 1.418-0.314 1.846-0.742v0.024c0.428 0.428 1.07 0.742 1.846 0.742 1.396 0 2.528-1.132 2.528-2.528s-1.132-2.528-2.528-2.528c-0.776 0-1.418 0.314-1.846 0.742z"></path></svg></a>
                        {/* Mund të shtoni ikona të tjera këtu */}
                    </div>
                </div>

                {/* Kolona 2: Lidhje të Shpejta */}
                <div>
                    <h4>Lidhje të Shpejta</h4>
                    <ul>
                        <li><Link to="/rreth-nesh">Rreth Nesh</Link></li>
                        <li><Link to="/sherbimet">Shërbimet Fason</Link></li>
                        <li><Link to="/cilesia">Cilësia & Etika</Link></li>
                        <li><Link to="/partneritet">Fillo Partneritetin</Link></li>
                    </ul>
                </div>

                {/* Kolona 3: Detajet e Kontaktit */}
                <div>
                    <h4>Kontaktoni</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <MapPin size={20} className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                            <span>Lagja Nr. 2, Barabit, Ndërtesë Private 2 Katëshe, Durrës-Krujë</span>
                        </li>
                        <li className="flex items-center">
                            <Phone size={20} className="text-orange-600 mr-3 flex-shrink-0" />
                            <a href="tel:+355682062798">+355682062798</a>
                        </li>
                        <li className="flex items-center">
                            <Mail size={20} className="text-orange-600 mr-3 flex-shrink-0" />
                            <a href="mailto:sfidalb@yahoo.it">sfidalb@yahoo.it</a>
                        </li>
                    </ul>
                </div>

            </div>
            
            <div className="copyright">
                &copy; {new Date().getFullYear()} Sfidal Sh.P.K. Të gjitha të drejtat të rezervuara. Dizenjuar nga Kledi Keqi.
            </div>
        </footer>
    )
}

export default Footer;

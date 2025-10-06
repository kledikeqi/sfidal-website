import Partnership from '../models/Partnership.js';
import sendPartnershipNotification from '../utils/sendEmail.js'; 

// @desc    Krijon një kërkesë të re partneriteti
const createPartnership = async (req, res) => {
    try {
        // ⚠️ FIKSI KRITIK 1: Destrukturimi i të dhënave nga req.body
        const { companyName, contactPerson, email, phone, requestType, message } = req.body;

        // ⚠️ FIKSI KRITIK 2: Krijimi i objektit Partnership
        const newPartnership = new Partnership({
            companyName,
            contactPerson,
            email,
            phone,
            // Shpesh requestType nuk kalon nga Frontend, por le ta defaultojmë nëse mungon
            requestType: requestType || 'NewProduction', 
            message
        });

        // Ruajeni në MongoDB (Kjo tani duhet të funksionojë)
        const savedPartnership = await newPartnership.save();

        // Rikthejeni thirrjen e email-it
        sendPartnershipNotification(savedPartnership).catch(err => {
            console.error('❌ Dështoi dërgimi i email-it në sfond: ', err.message);
        }); 
        
        // Përgjigjuni Frontend-it menjëherë (Zhblloko React-in)
        res.status(201).json({
            success: true,
            message: 'Kërkesa për partneritet u dërgua me sukses!',
            data: savedPartnership
        });

    } catch (error) {
        // Gabimi i validimit të Mongoose
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ success: false, error: messages.join('. ') });
        }
        
        console.error('Gabim në ruajtjen e partneritetit (DB):', error.message);
        res.status(500).json({ success: false, error: 'Gabim i brendshëm i serverit.' });
    }
};

const getPartnershipRequests = async (req, res) => {
    try {
        // Gjen të gjitha dokumentet. Sorton sipas datës së krijimit (më i riu i pari).
        const requests = await Partnership.find().sort({ createdAt: -1 });

        // Kthen të dhënat me status 200 (OK)
        res.status(200).json({
            success: true,
            count: requests.length,
            data: requests
        });

    } catch (error) {
        console.error('Gabim gjatë marrjes së kërkesave:', error.message);
        res.status(500).json({ error: 'Dështoi marrja e të dhënave të partneritetit.' });
    }
}

export { createPartnership, getPartnershipRequests };
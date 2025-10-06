import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler'; // Për të menaxhuar gabimet asinkrone
import User from '../models/User.js';

// Krijoni një funksion asinkron për të mbrojtur rrugët
const protect = asyncHandler(async (req, res, next) => {
    let token;

    // 1. Kontrollo nëse kërkesa ka një header 'Authorization' dhe nëse është formatuar saktë (Bearer token)
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            // Merre tokenin duke hequr fjalën 'Bearer '
            token = req.headers.authorization.split(' ')[1];

            // 2. Verifiko tokenin me sekretin e ruajtur në .env
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // 3. Gjej përdoruesin nga ID-ja brenda tokenit (pa fjalëkalimin)
            req.user = await User.findById(decoded.id).select('-password');

            // 4. Vazhdo te funksioni tjetër (p.sh., getPartnershipRequests)
            next();
        } catch (error) {
            console.error('Gabim në verifikimin e tokenit:', error.message);
            res.status(401);
            throw new Error('Nuk jeni autorizuar, tokeni dështoi.');
        }
    }

    // Nëse tokeni mungon
    if (!token) {
        res.status(401);
        throw new Error('Nuk jeni autorizuar, tokeni mungon.');
    }
});

// Funksioni për të siguruar që vetëm Admin-i mund të vazhdojë
const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next(); // Admin, vazhdo
    } else {
        res.status(401);
        throw new Error('Nuk jeni autorizuar si Administrator.');
    }
};

export { protect, admin };
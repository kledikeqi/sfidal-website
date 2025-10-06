import User from '../models/User.js';
// Krijojmë një funksion për të gjeneruar JWT
import generateToken from '../utils/generateToken.js'; 

// @desc    Regjistron një përdorues të ri
// @route   POST /api/users
// @access  Public (Përdoret një herë për adminin fillestar)
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Kontrollo nëse ekziston tashmë një përdorues me këtë email
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ 
                message: 'Përdoruesi me këtë email tashmë ekziston.' 
            });
        }

        // Krijoni një përdorues të ri
        const user = await User.create({
            name,
            email,
            password,
            // ⚠️ Për shkak se është regjistrimi i parë, e bëjmë Admin automatikisht
            isAdmin: true, 
        });

        if (user) {
            // Pas krijimit, gjeneroni një token për të hyrë menjëherë
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                // Gjeneroni token-in dhe dërgojeni në Frontend
                token: generateToken(user._id), 
            });
        } else {
            res.status(400).json({ message: 'Të dhëna të pavlefshme të përdoruesit.' });
        }
    } catch (error) {
        console.error('Gabim në regjistrim:', error);
        res.status(500).json({ message: 'Gabim i brendshëm i serverit gjatë regjistrimit.' });
    }
};

const authUser = async (req, res) => {
    const { email, password } = req.body;

    // Gjej përdoruesin sipas email-it
    const user = await User.findOne({ email });

    // ⚠️ Krahasoni Fjalëkalimin
    // 'matchPassword' është metoda e shtuar në userSchema (server/models/User.js)
    if (user && (await user.matchPassword(password))) {
        // Hyrja e suksesshme! Kthejeni tokenin e ri.
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            // Gjenero tokenin dhe dërgoja Frontend-it
            token: generateToken(user._id),
        });
    } else {
        res.status(401).json({ message: 'Email ose fjalëkalim i pavlefshëm.' });
    }
};

export { registerUser, authUser };
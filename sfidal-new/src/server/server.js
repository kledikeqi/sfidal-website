// 1. Importimi i Librarive Themelore dhe shtesat për 'type: module'
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url'; // SHTESA E RE: Për të rregulluar __dirname

// Importimi i Rrugëve dhe Middleware
import partnershipRoutes from './routes/partnership.js';
import userRoutes from './routes/userRoutes.js'; 
// Importimi i Error Handler
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// PËRCAKTIMI I __dirname për 'type: module' (Ky është thelbësor!)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Konfiguro dotenv për të ngarkuar variablat e mjedisit nga .env
dotenv.config();

// 2. Inicializimi i App-it
const app = express();
const PORT = process.env.PORT || 5001;
const MONGODB_URI = process.env.MONGODB_URI;

// 3. Konfigurimi i Databazës
const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Lidhja me MongoDB u realizua me sukses!');
    } catch (error) {
        console.error('❌ Dështoi lidhja me MongoDB:', error.message);
        process.exit(1);
    }
};

// 4. Lidhja me DB dhe Pastaj nisim Serverin
connectDB(); 

// 5. Middlewares (Konfigurimet e Serverit)
app.use(cors()); 
app.use(express.json()); // Përpunon JSON-in nga req.body

// 6. Rrugët e API-së
app.use('/api/partneritet', partnershipRoutes);
app.use('/api/users', userRoutes); 

// 7. ⚠️ KONFIGURIMI I VENDOSJES (DEPLOYMENT LOGIC)
// Kemi përcaktuar __dirname më lart, nuk ka nevojë për path.resolve() shtesë.

if (process.env.NODE_ENV === 'production') {
    
    // Rruga për në folderin 'build' të React-it.
    // Nga src/server shkojmë dy hapa prapa te sfidal-new dhe hyjmë te build.
    const buildPath = path.join(__dirname, '..', '..', 'build');

    // A. Cakto folderin e ndërtuar (build) si folder statik
    app.use(express.static(buildPath));

    // B. Për çdo rrugë GET që nuk është API, kthe index.html
    // Kjo i lejon React Router të marrë kontrollin.
    // FIXI KRYESOR: Përdorim app.get('/*', ...) për të shmangur gabimin e PathError
    app.use((req, res, next) => {
        // Shmang API routes, kalon te next() nese eshte thirrje API
        if (req.url.startsWith('/api')) {
            return next();
        }
        
        // Përndryshe, shërben skedarin index.html
        if (req.method === 'GET') {
            res.sendFile(path.resolve(buildPath, 'index.html'));
        } else {
            next(); // Lejon metodat tjera (POST, PUT, DELETE) të shkojnë në 404
        }
    });

} else {
    // Modaliteti i Zhvillimit
    app.get('/', (req, res) => {
        res.send('Sfidal API Server - Running në modalitetin Zhvillim');
    });
}
// ⚠️ FUNDI I LOGJIKËS SË DEPLOYMENT

app.use(notFound); // Kap rrugët që nuk ekzistojnë
app.use(errorHandler); // Trajton të gjitha gabimet

// 8. Serveri (Niset pas lidhjes me DB)
app.listen(PORT, () => {
    console.log(`🚀 Serveri po dëgjon në portën http://localhost:${PORT} në modalitetin ${process.env.NODE_ENV}`);
});
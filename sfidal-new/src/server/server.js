// 1. Importimi i Librarive Themelore
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';

// Importimi i Rrugëve dhe Middleware
import partnershipRoutes from './routes/partnership.js';
import userRoutes from './routes/userRoutes.js'; 
// Importimi i Error Handler (supozojmë se do ta shtojmë më vonë)
// import { notFound, errorHandler } from './middleware/errorMiddleware.js'; 

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
// Përdorim path.resolve() për të siguruar shtegun e saktë në të gjitha sistemet
const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
    
    // A. Cakto folderin e ndërtuar (build) si folder statik
    // 'sfidal-new' është folderi i React-it, ku krijohet 'build'
    app.use(express.static(path.join(__dirname, '/sfidal-new/build')));

    // B. Për çdo rrugë GET që nuk është API, kthe index.html
    // Kjo i lejon React Router të marrë kontrollin
    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'sfidal-new', 'build', 'index.html'))
    );
} else {
    // ⚠️ Modaliteti i Zhvillimit: Shërbe mesazh të thjeshtë
    app.get('/', (req, res) => {
        res.send('Sfidal API Server - Running në modalitetin Zhvillim');
    });
}
// ⚠️ FUNDI I LOGJIKËS SË DEPLOYMENT

// 8. Serveri (Niset pas lidhjes me DB)
app.listen(PORT, () => {
    console.log(`🚀 Serveri po dëgjon në portën http://localhost:${PORT} në modalitetin ${process.env.NODE_ENV}`);
});
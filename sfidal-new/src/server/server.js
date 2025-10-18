// 1. importi i librarive themelore dhe shtesat per 'type: module'
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

// import i rrugeve dhe middleware
import partnershipRoutes from './routes/partnership.js';
import userRoutes from './routes/userRoutes.js'; 
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// percaktimi i __dirname per 'type: module' (Ky është thelbësor!)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// konfiguron dotenv per te ngarkuar variablat e mjedisit nga .env
dotenv.config();

// 2. inicializimi i App-it
const app = express();
const PORT = process.env.PORT || 5001;
const MONGODB_URI = process.env.MONGODB_URI;

// 3. konfigurimi i Databazes
const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Lidhja me MongoDB u realizua me sukses!');
    } catch (error) {
        console.error('❌ Dështoi lidhja me MongoDB:', error.message);
        process.exit(1);
    }
};

// 4. lidhja me DB dhe pastaj nisim serverin
connectDB(); 

// 5. middlewares (konfigurimet e serverit)
app.use(cors()); 
app.use(express.json()); // perpunon JSON-in nga req.body

// 6. rruget e API-s
app.use('/api/partneritet', partnershipRoutes);
app.use('/api/users', userRoutes); 

// 7. konfigurimi i vendosjes (DEPLOYMENT LOGIC)
// kemi percaktuar __dirname me lart , nuk ka nevoje per path.resolve() shtese.

if (process.env.NODE_ENV === 'production') {
    
    // rruga per ne folderin 'build' te React-it.
    // nga src/server shkojme dy hapa prapa te sfidal-new dhe hyjme te build.
    const buildPath = path.join(__dirname, '..', '..', 'build');

    // A. caktojm folderin e ndertuar (build) si folder statik
    app.use(express.static(buildPath));

    // B. per çdo rruge GET qe nuk eshte API , kthe index.html
    // kjo i lejon React Router te marre kontrollin.
    // FIXI KRYESOR: perdorim app.get('/*', ...) per te shmangur gabimin e PathError
    app.use((req, res, next) => {
        // shmang API routes, kalon te next() nese eshte thirrje API
        if (req.url.startsWith('/api')) {
            return next();
        }
        
        // perndryshe , sherben skedarin index.html
        if (req.method === 'GET') {
            res.sendFile(path.resolve(buildPath, 'index.html'));
        } else {
            next(); // lejon metodat tjera (POST, PUT, DELETE) te shkojne ne 404
        }
    });

} else {
    // modaliteti i zhvillimit
    app.get('/', (req, res) => {
        res.send('Sfidal API Server - Running në modalitetin Zhvillim');
    });
}
// FUNDI I LOGJIKËS SE DEPLOYMENT

app.use(notFound); // kap rruget qe nuk ekzistojne
app.use(errorHandler); // trajton te gjitha gabimet

// 8. serveri (niset pas lidhjes me DB)
app.listen(PORT, () => {
    console.log(`🚀 Serveri po dëgjon në portën http://localhost:${PORT} në modalitetin ${process.env.NODE_ENV}`);
});
import express from 'express';
// ⚠️ Hapi 2A: Importoni të dy Kontrolluesit
import { createPartnership, getPartnershipRequests } from '../controllers/partnershipController.js'; 
import { protect, admin } from '../middleware/authMiddleware.js'; // <-- IMPORTIMI I MIDDLEWARE PËR AUTORIZIM

const router = express.Router();

// 1. Rruga POST (për dërgimin e formularit - ekziston)
router.post('/', createPartnership);

// ⚠️ Hapi 2B: SHTONI RRUGËN GET (për marrjen e të dhënave)
router.get('/', protect, admin, getPartnershipRequests);

export default router;
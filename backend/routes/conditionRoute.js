import express from 'express';
import { checkSymptoms } from '../controllers/conditionController';

const router = express.Router();

// POST /api/symptoms
router.post('/check', checkSymptoms);

export default router;

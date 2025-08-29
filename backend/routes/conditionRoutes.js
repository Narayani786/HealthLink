import express from 'express';
import { checkSymptoms } from '../controllers/conditionController.js';
const router = express.Router();

router.post('/conditions/check', checkSymptoms); // POST /api/conditions/check
export default router;


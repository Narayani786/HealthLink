import express from 'express';
import { checkSymptoms } from '../controllers/conditionController';
const router = express.Router();

router.post('/check', checkSymptoms); // POST /api/conditions/check
export default router;


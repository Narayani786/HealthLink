import express from 'express';
import { getDoctors } from '../controllers/doctorController.js';

const router = express.Router();

router.get('/:specialization', getDoctors);

export default router;

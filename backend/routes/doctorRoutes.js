import express from 'express';
import { getDoctorsBySpecialization } from '../controllers/doctorController.js';
const router = express.Router();

router.get('/:specialization', getDoctorsBySpecialization); // GET /api/doctors/Cardiologist
export default router;

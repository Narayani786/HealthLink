import express from 'express';
import { getDoctorsBySpecialization, getDoctorById } from '../controllers/doctorController.js';

const router = express.Router();

router.get('/doctors/:specialization', getDoctorsBySpecialization); // GET /api/doctors/Cardiologist
router.get('/doctors/:id', getDoctorById);


export default router;

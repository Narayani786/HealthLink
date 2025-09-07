import express from 'express';
import { getDoctorsBySpecialization, getDoctorById } from '../controllers/doctorController.js';

const router = express.Router();

router.get('/doctors/specialization/:specialization', getDoctorsBySpecialization); // GET /api/doctors/Cardiologist
router.get('/doctors/id/:id', getDoctorById);


export default router;

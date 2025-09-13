import express from 'express';
import { getDoctorsBySpecialization, getDoctorById } from '../controllers/doctorController.js';

const router = express.Router();

router.get('/specialization/:specialization', getDoctorsBySpecialization); // GET /api/doctors/Cardiologist
router.get('/:id', getDoctorById);


export default router;

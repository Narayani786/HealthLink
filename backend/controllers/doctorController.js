import { findDoctorBySpecialization } from '../models/doctorModel.js';

export async function getDoctorsBySpecialization(req, res) {
  try {
    const { specialization } = req.params;
    const rows = await findDoctorBySpecialization(specialization);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'No doctors for this specialization' });
    }
    return res.json(rows);
  } catch (err) {
    console.error('getDoctorsBySpecialization error:', err);
    return res.status(500).json({ message: 'server error' });
  }
}


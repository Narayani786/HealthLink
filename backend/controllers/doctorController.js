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

export const getDoctorById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query("SELECT * FROM doctors WHERE id = ?", [id]);

    if(rows.length === 0) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


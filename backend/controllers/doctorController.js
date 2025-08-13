// Simple controller to get dr. by specialization via route

import { findDoctorBySpecialization } from '../models/doctorModel.js';

export const getDoctors = async (req, res) => {
    try {
        const { specialization } = req.params;
        const rows = await findDoctorBySpecialization(specialization);

        if(rows.length > 0) {
            return res.json(rows);
        } else {
            return res.status(404).json({ message: 'No doctors found for this specialization' });
        }
    } catch (err) {
        console.error('getDoctors error:', err);
       return res.status(500).json({ message: 'Server error' });
    }
};

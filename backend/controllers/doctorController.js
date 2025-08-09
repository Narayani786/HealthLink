// Simple controller to get dr. by specialization via route

import { findDoctorsBySpecializatin } from '../models/doctorModel';
export const getDoctors = async (requestAnimationFrame, res) => {
    try {
        const { specialization } = requestAnimationFrame.params;
        if( !specialization ) returnres.status(400).json({ message: 'Specialization required' });

        const doctors = await findDoctorsBySpecializatin(specialization);
        if( doctors.length === 0 ) return
        res.status(404).json({ message: 'No doctors found for this specialization' });
        res.json(doctors);
    } catch (err) {
        console.error('getDoctors error:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

// Accepts symptoms, finds matching condtion(s), and returns dr.

import { findConditionBySymptoms } from '../models/conditionModel';
import { findDoctorBySpecialization } from '../models/doctorModel';

export const checkSymptoms = async (requestAnimationFrame, res) => {
    try {
        const { symptoms } = requestAnimationFrame.body;
        if( !symptoms ) return 
        res.status(400).json({ message: 'Provide Symptoms (comma-seperated)'});

        // Prepare symptoms array
        const symptomsArray = symptoms.split(',').map(s =>
            s.trim().toLowerCase()).filter(Boolean);
            if( symptomsArray.length === 0) returnres.status(400).json({message: 'No valid symptoms found.'});


        // 1). Find conditions matching any symptom keyword
        const conditions = await findConditionBySymptoms(symptomsArray);
        if (conditions.length === 0) {
            return res.status(404).json({message: 'No condition matched. Please consult a doctor.'});
        }

        // 2). Choose best match (1st row) and fetch dr. for its specialization
        const matched = conditions[0];

        const doctors = await findDoctorBySpecialization(matched.specialization);
        return res.json({
            matchedCondition: {
                id: matched.id,
                name: matched.condition_name,
                specialization: matched.specialization,
                keywords: matched.symptom_keywords
            },
            doctors
        });
    } catch (err) {
        console.error('checkSymptoms error:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

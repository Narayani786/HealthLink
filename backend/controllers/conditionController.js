 import { findConditionBySymptoms } from '../models/conditionModel.js';

 export const checkSymptoms = async (req, res) => {
    try {
        console.log('Incoming body:', req.body);

        const { symptoms } = req.body;

        const rows = await findConditionBySymptoms(symptoms);
        console.log('Query results:', rows);
        if(rows.length > 0) {
            return res.json({ specialization: rows[0].specialization });
        } else {
            return res.status(404).json({ message: 'No matching specialization found' });
        }
    } catch (error) {
        console.error('Error checking symptoms:', error);
        return res.status(500).json({ message: 'Server error' });
    }
 };
 
import { findConditionBySymptoms } from '../models/conditionModel';

export async function checkSymptoms(req, res) {
  try {
    const { symptoms } = req.body; // expecting a string like "fever"
    if (!symptoms || !String(symptoms).trim()) {
      return res.status(400).json({ message: 'symptoms is required' });
    }

    const rows = await findConditionBySymptoms(symptoms);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'No matching condition' });
    }

    // choose the first match for now
    const top = rows[0];
    return res.json({
      condition: top.condition_name,
      specialization: top.specialization,
      matches: rows
    });
  } catch (err) {
    console.error('checkSymptoms error:', err);
    return res.status(500).json({ message: 'server error' });
  }
}

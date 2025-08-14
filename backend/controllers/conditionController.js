import { findConditionBySymptoms } from '../models/conditionModel.js';

export const checkSymptoms = async (req, res) => {
  try {
    const { symptoms } = req.body;

    if (!symptoms || symptoms.length === 0) {
      return res.status(400).json({ message: "Symptoms are required" });
    }

    const conditions = await findConditionBySymptoms(symptoms);

    console.log('DB results:', conditions);

    return res.status(200).json(conditions);
  } catch (err) {
    console.error("Error in checkSymptoms:", err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};
import { pool } from '../config/db.js';

export async function findConditionBySymptoms(symptoms) {
  // Accept a plain string from the frontend
  const term = `%${String(symptoms || '').trim()}%`;
  const [rows] = await pool.query(
    'SELECT id, condition_name, specialization FROM conditions WHERE symptom_keywords LIKE ?',
    [term]
  );
  return rows;
}

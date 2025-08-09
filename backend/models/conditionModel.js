// symptom -> condition mapping stored in DB

import db from './db.js';

export const findConditionBySymptoms = async (symptomsArray) => {
    const placeholders = symptomsArray.map(() =>
    'LOWER(symptom_keywords) LIKE ?').join(' OR ');
    const sql = `SELECT * FROM conditions WHERE ${placeholders} ORDER BY id LIMIT 10:`;
    const params = symptomsArray.map(s => `% ${s.trim().toLowerCase()}%`);
    const [rows] = await db.query(sql, params);
    return rows;
};

// symptom -> condition mapping stored in DB

import db from './db.js';

export const findConditionBySymptoms = async (symptom) => {
    const [rows] = await db.execute(
        'SELECT specialization FROM conditions WHERE symptoms LIKE ? LIMIT 1', [`%${symptom}`]
    );
    return rows;
};

import db from './db.js';

export const findConditionBySymptoms = async (symptoms) => {
  try {

    console.log('Searching in DB for:', symptoms);

    const [rows] = await db.query(
      "SELECT * FROM conditions WHERE symptoms LIKE ?",
      [`%${symptoms}%`]
    );
    return rows;
  } catch (err) {
    console.error("Error in findConditionBySymptoms:", err);
    throw err;
  }
};
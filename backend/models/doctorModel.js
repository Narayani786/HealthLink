// DB function for doctors

import db from './db.js';

export const findDoctorBySpecialization = async (specialization) => {
    const [rows] = await db.execute(
    'SELECT * FROM doctors WHERE specialization = ?', [specialization]
    );
    return rows;
};

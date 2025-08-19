// DB function for doctors

import db from '../config/db.js';

export const findDoctorBySpecialization = async (specialization) => {
    const [rows] = await db.query(
        'SELECT * FROM doctors WHERE specialization = ?', [specialization]
    );
    return rows;
};

// DB function for doctors

import db from './db';

export const findDoctorBySpecialization = async (specialization) => {
    const sql = 'SELECT id, name, specialization, contact_no AS contact FROM doctors WHERE specialization = ?';
    const [rows] = await db.query(sql, [specialization]);
    return rows;
};

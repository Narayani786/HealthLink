import { pool } from '../config/db';

export async function findDoctorBySpecialization(specialization) {
  const [rows] = await pool.query(
    'SELECT id, name, specialization, contact_no FROM doctors WHERE specialization = ?',
    [specialization]
  );
  return rows;
}
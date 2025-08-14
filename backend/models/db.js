// MySQL connection 

import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

(async () => {
    try{
        const connection = await pool.getConnection();
        console.log('MySQL connected successfully!');
        connection.release();
    } catch (err) {
        console.error('MySQL connection failed!', err.message);
    }
})();

export default pool;

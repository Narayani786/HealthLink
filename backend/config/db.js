import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

const connectDB = () => {
    connection.connect((err) => {
        if(err) 
            console.error('MySQL connection Failed:', err);
            else console.log('Connected to MySQL');
    });
};

export { connection };
export default connectDB;

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/db';
import symptomRoute from './routes/symptomRoute';
import doctorRoute from './routes/doctorRoute';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(expree.json());

connectDB;

app.use('/api/symptoms', symptomRoute);
app.use('/api/doctors', doctorRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


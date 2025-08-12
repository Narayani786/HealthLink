import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import conditionRoutes from './routes/conditionRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';

dotenv.config();

const app = express();

// enable cors for all req
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use('/api/conditions', conditionRoutes);
app.use('/api/doctors', doctorRoutes);

app.get('/', (req, res) => {
    res.send('HealthLink Backend running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

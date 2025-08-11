import express from 'express';
import dotenv from 'dotenv';
import conditionRoutes from './routes/conditionRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';

dotenv.config();

const app = express();
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

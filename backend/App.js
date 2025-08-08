import express from 'express';
import dotenv from 'dotenv';
import conditionRoute from './routes/conditionRoute';
import doctorRoute from './routes/doctorRoute';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/conditions', conditionRoute);
app.use('/api/doctors', doctorRoute);

app.get('/', (req, res) => {
    res.send('HealthLink Backend running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

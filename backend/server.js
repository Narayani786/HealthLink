import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import conditionRoutes from './routes/conditionRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';

dotenv.config();
const app = express();

app.use(cors({ origin: 'http://localhost:5173' })); // your Vite dev URL
app.use(express.json());

app.use('/api', conditionRoutes);

app.use('/api/doctors', doctorRoutes);
//app.use('/api/doctors/:id', doctorRoutes);

app.get('/', (req, res) => res.send('HealthLink backend running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

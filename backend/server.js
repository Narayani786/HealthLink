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

/*app.get('/api/doctors/:specialization', (req, res) => {
    const specialization = req.params.specialization;
    de.query(
        "SELECT * FROM doctors WHERE specialization = ?",
        [specialization],
        (err, results) => {
            if(err) return res.status(500).json(err);
            if(results.length === 0) return
            res.status(404).json({ msg: 'No doctors found'});
            res.json(results);
        }
    );
});


app.get('/api/doctors/:id', (req, res) => {
    const id = req.params.id;
    db.query(
        "SELECT * FROM doctors WHERE id = ?", [id], (err, results) => {
            if(err) return res.status(500).json(err);
            if(results.length === 0) return 
            res.status(404).json({ msg: 'Doctor not found' });
            res.json(results[0]);
        }
    );
});*/

app.get('/api/doctors/:specialization', doctorRoutes);
app.get('/api/doctors/:id', doctorRoutes);

app.get('/', (req, res) => res.send('HealthLink backend running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

import express from 'express';
import cors from 'cors';
import pool from './db.js';
import patientsRoutes from './routes/patientsRoutes.js';
import appointmentsRoutes from './routes/appointmentsRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', patientsRoutes);
app.use('/api', appointmentsRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
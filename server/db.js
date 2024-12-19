import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Check if the connection is successful
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to the database');
    }
});

export default pool;
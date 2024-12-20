import pool from '../db.js';

// Create a new patient
export const createPatient = async (patient) => {
    const { name, age, gender, contact, email, patient_info } = patient;

    // Check if the email already exists
    const emailCheck = await pool.query('SELECT * FROM patients WHERE email = $1', [email]);
    if (emailCheck.rows.length > 0) {
        throw new Error('Email already exists');
    }

    const result = await pool.query(
        'INSERT INTO patients (name, age, gender, contact, email, patient_info) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [name, age, gender, contact, email, patient_info]
    );
    return result.rows[0];
};

// Get all patients
export const getPatients = async () => {
    const result = await pool.query('SELECT * FROM patients');
    return result.rows;
};

// Get a patient by ID
export const getPatientById = async (id) => {
    const result = await pool.query('SELECT * FROM patients WHERE patient_id = $1', [id]);
    return result.rows[0];
};

// Update a patient by ID
export const updatePatient = async (id, patient) => {
    const { name, age, gender, contact, email, patient_info } = patient;
    const result = await pool.query(
        'UPDATE patients SET name = $1, age = $2, gender = $3, contact = $4, email = $5, patient_info = $6 WHERE patient_id = $7 RETURNING *',
        [name, age, gender, contact, email, patient_info, id]
    );
    return result.rows[0];
};

// Delete a patient by ID
export const deletePatient = async (id) => {
    const result = await pool.query('DELETE FROM patients WHERE patient_id = $1 RETURNING *', [id]);
    return result.rows[0];
};

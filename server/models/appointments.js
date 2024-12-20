import pool from '../db.js';

// Create a new appointment
export const createAppointment = async (appointment) => {
    const { patient_id, appointment_date, notes } = appointment;

    // Check if the patient exists
    const patientResult = await pool.query(
        'SELECT * FROM patients WHERE patient_id = $1',
        [patient_id]
    );

    if (patientResult.rows.length === 0) {
        throw new Error(`Patient with ID ${patient_id} does not exist.`);
    }

    // If patient exists, proceed to create the appointment
    const result = await pool.query(
        'INSERT INTO appointments (patient_id, appointment_date, notes) VALUES ($1, $2, $3) RETURNING *',
        [patient_id, appointment_date, notes]
    );
    return result.rows[0];
};

// Get all appointments
export const getAppointments = async () => {
    const result = await pool.query('SELECT * FROM appointments');
    return result.rows;
};

// Get an appointment by ID
export const getAppointmentById = async (id) => {
    const result = await pool.query('SELECT * FROM appointments WHERE appointment_id = $1', [id]);
    return result.rows[0];
};

// Update an appointment by ID
export const updateAppointment = async (id, appointment) => {
    const { patient_id, appointment_date, notes } = appointment;

    // Check if the patient exists
    const patientResult = await pool.query(
        'SELECT * FROM patients WHERE patient_id = $1',
        [patient_id]
    );

    if (patientResult.rows.length === 0) {
        throw new Error(`Patient with ID ${patient_id} does not exist.`);
    }

    const result = await pool.query(
        'UPDATE appointments SET patient_id = $1, appointment_date = $2, notes = $3 WHERE appointment_id = $4 RETURNING *',
        [patient_id, appointment_date, notes, id]
    );
    return result.rows[0];
};

// Delete an appointment by ID
export const deleteAppointment = async (id) => {
    const result = await pool.query('DELETE FROM appointments WHERE appointment_id = $1 RETURNING *', [id]);
    return result.rows[0];
};

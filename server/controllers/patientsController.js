import {
    createPatient,
    getPatients,
    getPatientById,
    updatePatient,
    deletePatient
} from '../models/patients.js';

export const createPatientController = async (req, res) => {
    const { name, age, condition, gender, date_of_birth, email } = req.body;

    // Validate required fields
    if (!name || !age || !condition || !gender || !date_of_birth || !email) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const newPatient = await createPatient(req.body);
        res.status(201).json({ message: 'Patient created successfully', patient: newPatient });
    } catch (err) {
        if (err.message === 'Email already exists') {
            res.status(400).json({ error: err.message });
        } else {
            res.status(500).json({ error: err.message });
        }
    }
};

export const getPatientsController = async (req, res) => {
    try {
        const patients = await getPatients();
        res.status(200).json({ message: 'Patients retrieved successfully', patients });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getPatientByIdController = async (req, res) => {
    try {
        const patient = await getPatientById(req.params.id);
        if (patient) {
            res.status(200).json({ message: 'Patient retrieved successfully', patient });
        } else {
            res.status(404).json({ error: 'Patient not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updatePatientController = async (req, res) => {
    const { name, age, condition, gender, date_of_birth, email } = req.body;

    // Validate required fields
    if (!name || !age || !condition || !gender || !date_of_birth || !email) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const updatedPatient = await updatePatient(req.params.id, req.body);
        if (updatedPatient) {
            res.status(200).json({ message: 'Patient updated successfully', patient: updatedPatient });
        } else {
            res.status(404).json({ error: 'Patient not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deletePatientController = async (req, res) => {
    try {
        const deletedPatient = await deletePatient(req.params.id);
        if (deletedPatient) {
            res.status(200).json({ message: 'Patient deleted successfully', patient: deletedPatient });
        } else {
            res.status(404).json({ error: 'Patient not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
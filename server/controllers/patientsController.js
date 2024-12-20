import {
    createPatient,
    getPatients,
    getPatientById,
    updatePatient,
    deletePatient
} from '../models/Patients.js';

export const createPatientController = async (req, res) => {
    const { name, age, gender, contact, email, patient_info } = req.body;

    // Validate required fields
    if (!name || !age || !gender || !contact || !email || !patient_info) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const newPatient = await createPatient(req.body);
        res.status(201).json({ message: 'Patient created successfully', patient: newPatient });
    } catch (err) {
        if (err.message === 'Email already exists') {
            return res.status(400).json({ error: err.message });
        } else {
            return res.status(500).json({ error: err.message });
        }
    }
};

export const getPatientsController = async (req, res) => {
    try {
        const patients = await getPatients();
        res.status(200).json(patients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getPatientByIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const patient = await getPatientById(id);
        if (!patient) {
            return res.status(404).json({ error: 'Patient not found' });
        }
        res.status(200).json(patient);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updatePatientController = async (req, res) => {
    const { id } = req.params;
    const { name, age, gender, contact, email, patient_info } = req.body;

    // Validate required fields
    if (!name || !age || !gender || !contact || !email || !patient_info) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const updatedPatient = await updatePatient(id, req.body);
        if (!updatedPatient) {
            return res.status(404).json({ error: 'Patient not found' });
        }
        res.status(200).json({ message: 'Patient updated successfully', patient: updatedPatient });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deletePatientController = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPatient = await deletePatient(id);
        if (!deletedPatient) {
            return res.status(404).json({ error: 'Patient not found' });
        }
        res.status(200).json({ message: 'Patient deleted successfully', patient: deletedPatient });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
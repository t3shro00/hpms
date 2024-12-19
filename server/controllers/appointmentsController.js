import {
    createAppointment,
    getAppointments,
    getAppointmentById,
    updateAppointment,
    deleteAppointment
} from '../models/appointments.js';

export const createAppointmentController = async (req, res) => {
    const { patient_id, appointment_date, notes } = req.body;

    // Validate required fields
    if (!patient_id) {
        return res.status(400).json({ error: 'Patient ID is required' });
    }
    if (!appointment_date) {
        return res.status(400).json({ error: 'Appointment date is required' });
    }
    if (!notes) {
        return res.status(400).json({ error: 'Notes are required' });
    }

    try {
        const newAppointment = await createAppointment(req.body);
        res.status(201).json({ message: 'Appointment created successfully', appointment: newAppointment });
    } catch (err) {
        if (err.message === 'Appointment time is already taken') {
            res.status(400).json({ error: err.message });
        } else {
            res.status(500).json({ error: err.message });
        }
    }
};

export const getAppointmentsController = async (req, res) => {
    try {
        const appointments = await getAppointments();
        res.status(200).json({ message: 'Appointments retrieved successfully', appointments });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getAppointmentByIdController = async (req, res) => {
    try {
        const appointment = await getAppointmentById(req.params.id);
        if (appointment) {
            res.status(200).json({ message: 'Appointment retrieved successfully', appointment });
        } else {
            res.status(404).json({ error: 'Appointment not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateAppointmentController = async (req, res) => {
    const { patient_id, appointment_date, notes } = req.body;

    // Validate required fields
    if (!patient_id) {
        return res.status(400).json({ error: 'Patient ID is required' });
    }
    if (!appointment_date) {
        return res.status(400).json({ error: 'Appointment date is required' });
    }
    if (!notes) {
        return res.status(400).json({ error: 'Notes are required' });
    }

    try {
        const updatedAppointment = await updateAppointment(req.params.id, req.body);
        if (updatedAppointment) {
            res.status(200).json({ message: 'Appointment updated successfully', appointment: updatedAppointment });
        } else {
            res.status(404).json({ error: 'Appointment not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteAppointmentController = async (req, res) => {
    try {
        const deletedAppointment = await deleteAppointment(req.params.id);
        if (deletedAppointment) {
            res.status(200).json({ message: 'Appointment deleted successfully', appointment: deletedAppointment });
        } else {
            res.status(404).json({ error: 'Appointment not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
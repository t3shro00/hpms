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

    try {
        const newAppointment = await createAppointment(req.body);
        res.status(201).json({ message: 'Appointment created successfully', appointment: newAppointment });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getAppointmentsController = async (req, res) => {
    try {
        const appointments = await getAppointments();
        res.status(200).json(appointments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getAppointmentByIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const appointment = await getAppointmentById(id);
        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }
        res.status(200).json(appointment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateAppointmentController = async (req, res) => {
    const { id } = req.params;
    const { patient_id, appointment_date, notes } = req.body;

    // Validate required fields
    if (!patient_id) {
        return res.status(400).json({ error: 'Patient ID is required' });
    }
    if (!appointment_date) {
        return res.status(400).json({ error: 'Appointment date is required' });
    }

    try {
        const updatedAppointment = await updateAppointment(id, req.body);
        if (!updatedAppointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }
        res.status(200).json({ message: 'Appointment updated successfully', appointment: updatedAppointment });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteAppointmentController = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedAppointment = await deleteAppointment(id);
        if (!deletedAppointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }
        res.status(200).json({ message: 'Appointment deleted successfully', appointment: deletedAppointment });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// ./src/apiServices.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api'; // Adjust the base URL as needed

export const createPatient = async (patient) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/patients`, patient);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getPatients = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/patients`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getPatientById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/patients/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const updatePatient = async (id, patient) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/patients/${id}`, patient);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const deletePatient = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/patients/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Similarly, create functions for appointments
export const createAppointment = async (appointment) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/appointments`, appointment);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getAppointments = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/appointments`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getAppointmentById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/appointments/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const updateAppointment = async (id, appointment) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/appointments/${id}`, appointment);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const deleteAppointment = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/appointments/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
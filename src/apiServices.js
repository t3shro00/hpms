// ./src/apiServices.js
import axios from "axios";

// Adjust the base URL to match your server configuration
const API_BASE_URL = "http://localhost:3001/api";

// Patient-related API services
export const createPatient = async (patient) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/patients`, patient);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getPatients = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/patients`);
    return response.data;
  } catch (error) {
    console.error("Error fetching patients:", error);
    throw error.response?.data || error.message;
  }
};

export const getPatientById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/patients/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const updatePatient = async (id, patient) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/patients/${id}`, patient);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const deletePatient = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/patients/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Appointment-related API services
export const createAppointment = async (appointment) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/appointments`,
      appointment
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getAppointments = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/appointments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching appointments:", error);
    throw error.response?.data || error.message;
  }
};

export const getAppointmentById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/appointments/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const updateAppointment = async (id, appointment) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/appointments/${id}`, appointment);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const deleteAppointment = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/appointments/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

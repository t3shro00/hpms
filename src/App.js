'use client';

import { useState, useEffect } from 'react';
import AddPatient from './components/AddPatient';
import AppointmentDetails from './components/AppointmentDetails';
import AppointmentForm from './components/AppointmentForm';
import PatientDetail from './components/PatientDetail';
import PatientList from './components/PatientList';

import {
  getPatients,
  createPatient,
  getAppointments,
  createAppointment,
} from './apiServices';

export default function HospitalPatientManagement() {
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [view, setView] = useState('list');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPatients();
    fetchAppointments();
  }, []);

const fetchPatients = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getPatients();
        setPatients(response || []); // Handle nested data appropriately
      } catch (error) {
        setError('Failed to fetch patients.');
        console.error('Error fetching patients:', error);
      } finally {
        setLoading(false);
      }
    };
  
  

  const fetchAppointments = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getAppointments();
      setAppointments(response || []); // Handle nested structure or missing data
      console.log('Fetched appointments:', response);
    } catch (error) {
      setError('Failed to fetch appointments.');
      console.error('Error fetching appointments:', error);
    } finally {
      setLoading(false);
    }
  };
  

  const addPatient = async (patient) => {
    setError(null);
    try {
      const newPatient = await createPatient(patient);
      setPatients((prev) => [...prev, newPatient]);
      setView('list');
    } catch (error) {
      setError('Failed to add patient.');
      console.error('Error adding patient:', error);
    }
  };

  const addAppointment = async (appointment) => {
    setError(null);
    try {
      const newAppointment = await createAppointment(appointment);
      setAppointments((prev) => [...prev, newAppointment]);
      setView('list');
    } catch (error) {
      setError('Failed to add appointment.');
      console.error('Error adding appointment:', error);
    }
  };

  const selectPatient = (patient) => {
    setSelectedPatient(patient);
    setView('details');
  };

  const selectAppointment = (appointment) => {
    setSelectedAppointment(appointment);
    setView('appointmentDetails');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Hospital Patient Management</h1>
      <div className="mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={() => setView('list')}
        >
          Patient List
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mr-2"
          onClick={() => setView('add')}
        >
          Add Patient
        </button>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded"
          onClick={() => setView('appointment')}
        >
          Schedule Appointment
        </button>
      </div>

      {error && <div className="text-red-500 mb-4">{error}</div>}
      {loading && <div>Loading...</div>}

      {!loading && view === 'list' && (
        <PatientList
          patients={patients}
          appointments={appointments}
          onSelectPatient={selectPatient}
          onSelectAppointment={selectAppointment}
        />
      )}
      {!loading && view === 'add' && <AddPatient addPatient={addPatient} setView={setView} />}
      {!loading && view === 'details' && selectedPatient && (
        <PatientDetail patient={selectedPatient} />
      )}
      {!loading && view === 'appointment' && (
        <AppointmentForm patients={patients} onSubmit={addAppointment} />
      )}
      {!loading && view === 'appointmentDetails' && selectedAppointment && (
        <AppointmentDetails
          appointment={selectedAppointment}
          patient={patients.find((p) => p.id === selectedAppointment.patientId)}
        />
      )}
    </div>
  );
}

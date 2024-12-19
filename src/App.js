'use client';

import { useState } from 'react';
import AddPatient from './components/AddPatient';
import AppointmentDetails from './components/AppointmentDetails';
import AppointmentForm from './components/AppointmentForm';
import PatientDetails from './components/PatientDetail'; // Fixed import
import PatientList from './components/PatientList'; // Ensure file exists


export default function HospitalPatientManagement() {
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [view, setView] = useState('list');

  const addPatient = (patient) => {
    const newPatient = { ...patient, id: patients.length + 1 };
    setPatients([...patients, newPatient]);
    setView('list');
  };

  const selectPatient = (patient) => {
    setSelectedPatient(patient);
    setView('details');
  };

  const addAppointment = (appointment) => {
    const newAppointment = { ...appointment, id: appointments.length + 1 };
    setAppointments([...appointments, newAppointment]);
    setView('list');
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
      {view === 'list' && (
        <PatientList
          patients={patients}
          appointments={appointments}
          onSelectPatient={selectPatient}
          onSelectAppointment={selectAppointment}
        />
      )}
      {view === 'add' && <AddPatient onAddPatient={addPatient} />}
      {view === 'details' && selectedPatient && (
        <PatientDetails patient={selectedPatient} />
      )}
      {view === 'appointment' && (
        <AppointmentForm patients={patients} onAddAppointment={addAppointment} />
      )}
      {view === 'appointmentDetails' && selectedAppointment && (
        <AppointmentDetails
          appointment={selectedAppointment}
          patient={patients.find((p) => p.id === selectedAppointment.patientId)}
        />
      )}
    </div>
  );
}

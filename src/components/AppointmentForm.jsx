import React, { useState } from 'react';

export default function AppointmentForm({ patients, onSubmit }) {
  const [patientId, setPatientId] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!patientId) {
      setError('Patient ID is required');
      return;
    }
    if (!appointmentDate) {
      setError('Appointment date is required');
      return;
    }

    // Clear error and submit the form
    setError('');
    onSubmit({ patient_id: patientId, appointment_date: appointmentDate, notes });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Schedule Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <label htmlFor="patient" className="block mb-1">
            Patient:
          </label>
          <select
            id="patient"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="">Select a patient</option>
            {patients.map((patient) => (
              <option key={patient.patient_id} value={patient.patient_id}>
                {patient.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="appointmentDate" className="block mb-1">
            Appointment Date:
          </label>
          <input
            type="datetime-local"
            id="appointmentDate"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="notes" className="block mb-1">
            Notes:
          </label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Schedule
        </button>
      </form>
    </div>
  );
}

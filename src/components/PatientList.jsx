import React from 'react';

export default function PatientList({
  patients,
  appointments,
  onSelectPatient,
  onSelectAppointment,
}) {
  console.log('PatientList Received Patients:', patients); // Check if the patients are passed correctly
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Patient List</h2>
      {Array.isArray(patients) && patients.length === 0 ? (
        <p>No patients found.</p>
      ) : (
        <ul className="space-y-4">
          {Array.isArray(patients) &&
            patients
              .sort((a, b) => b.patient_id - a.patient_id) // Sort patients in descending order by patient_id
              .map((patient) => (
                <li key={patient.patient_id} className="bg-gray-100 p-4 rounded">
                  <div
                    className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                    onClick={() => onSelectPatient(patient)}
                  >
                    <h3 className="font-bold">{patient.name}</h3>
                    <p>Age: {patient.age}</p>
                    <p>
                      <strong>Patient Info:</strong> {patient.patient_info || 'No additional information'}
                    </p>
                  </div>
                  <div className="mt-2">
                    <h4 className="font-semibold">Appointments:</h4>
                    {Array.isArray(appointments) &&
                    appointments.filter((a) => a.patient_id === patient.patient_id).length === 0 ? (
                      <p>No appointments scheduled.</p>
                    ) : (
                      <ul className="ml-4">
                        {Array.isArray(appointments) &&
                          appointments
                            .filter((a) => a.patient_id === patient.patient_id)
                            .sort((a, b) => new Date(b.appointment_date) - new Date(a.appointment_date)) // Sort appointments in descending order by appointment_date
                            .map((appointment) => (
                              <li
                                key={appointment.appointment_id}
                                className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                                onClick={() => onSelectAppointment(appointment)}
                              >
                                <p>
                                  <strong>Date:</strong> {new Date(appointment.appointment_date).toLocaleString()}
                                </p>
                                <p>
                                  <strong>Notes:</strong> {appointment.notes || 'No notes available'}
                                </p>
                              </li>
                            ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
        </ul>
      )}
    </div>
  );
}

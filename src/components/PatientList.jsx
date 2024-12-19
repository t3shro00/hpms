import React from 'react';

export default function PatientList({
    patients,
    appointments,
    onSelectPatient,
    onSelectAppointment,
}) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Patient List</h2>
            {patients.length === 0 ? (
                <p>No patients found.</p>
            ) : (
                <ul className="space-y-4">
                    {patients.map((patient) => (
                        <li key={patient.patient_id} className="bg-gray-100 p-4 rounded">
                            <div
                                className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                                onClick={() => onSelectPatient(patient)}
                            >
                                <h3 className="font-bold">{patient.name}</h3>
                                <p>Age: {patient.age}</p>
                                <p>Condition: {patient.condition}</p>
                            </div>
                            <div className="mt-2">
                                <h4 className="font-semibold">Appointments:</h4>
                                {appointments.filter((a) => a.patient_id === patient.patient_id).length === 0 ? (
                                    <p>No appointments scheduled.</p>
                                ) : (
                                    <ul>
                                        {appointments
                                            .filter((a) => a.patient_id === patient.patient_id)
                                            .map((appointment) => (
                                                <li
                                                    key={appointment.appointment_id}
                                                    className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                                                    onClick={() => onSelectAppointment(appointment)}
                                                >
                                                    <p>Date: {new Date(appointment.appointment_date).toLocaleString()}</p>
                                                    <p>Notes: {appointment.notes}</p>
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
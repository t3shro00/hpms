import React from "react";


export default function PatientDetail({ patient }) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Patient Details</h2>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-bold text-xl mb-2">{patient.name}</h3>
          <p>
            <strong>ID:</strong> {patient.id}
          </p>
          <p>
            <strong>Age:</strong> {patient.age}
          </p>
          <p>
            <strong>Condition:</strong> {patient.condition}
          </p>
        </div>
      </div>
    );
  }
  
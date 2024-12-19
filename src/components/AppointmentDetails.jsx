export default function AppointmentDetails({ appointment, patient }) {
    if (!patient) {
      return <div>Patient not found for this appointment.</div>;
    }
  
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Appointment Details</h2>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-bold text-xl mb-2">Appointment for {patient.name}</h3>
          <p>
            <strong>Date:</strong> {appointment.date}
          </p>
          <p>
            <strong>Time:</strong> {appointment.time}
          </p>
          <p>
            <strong>Reason:</strong> {appointment.reason}
          </p>
          <h4 className="font-semibold mt-4">Patient Information:</h4>
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
  
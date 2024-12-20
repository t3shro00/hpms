import React, { useState } from 'react';

const AddPatient = ({ addPatient, setView }) => {
  const [patient, setPatient] = useState({
    name: '',
    age: '',
    gender: '',
    contact: '',
    patient_info: '',
    email: ''
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({
      ...patient,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Simple validation: ensure all fields are filled
    if (!patient.name || !patient.age || !patient.contact || !patient.email || !patient.gender) {
      setError('Please fill in all the fields.');
      setLoading(false);
      return;
    }

    // Call the addPatient function passed as prop to add the patient to the backend
    try {
      await addPatient(patient);
      setPatient({ name: '', age: '', gender: '', contact: '', patient_info: '', email: '' }); // Reset form
      setView('list'); // Switch to the patient list view
    } catch (error) {
      setError('Failed to add patient.');
      console.error('Error adding patient:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add New Patient</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={patient.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Age:</label>
          <input
            type="number"
            name="age"
            value={patient.age}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Gender:</label>
          <select
            name="gender"
            value={patient.gender}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Contact:</label>
          <input
            type="text"
            name="contact"
            value={patient.contact}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={patient.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Patient Info:</label>
          <textarea
            name="patient_info"
            value={patient.patient_info}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          {loading ? 'Adding Patient...' : 'Add Patient'}
        </button>
      </form>
    </div>
  );
};

export default AddPatient;

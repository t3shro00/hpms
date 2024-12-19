import React, { useState } from 'react';

const AddPatient = ({ addPatient, setView }) => {
  const [patient, setPatient] = useState({
    name: '',
    age: '',
    condition: '',
    gender: '',
    date_of_birth: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPatient(patient);
    setView('list');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add New Patient</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={patient.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Name"
            required
          />
        </div>
        <div>
          <label htmlFor="age" className="block mb-1">
            Age:
          </label>
          <input
            type="number"
            name="age"
            value={patient.age}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Age"
            required
          />
        </div>
        <div>
          <label htmlFor="condition" className="block mb-1">
            Condition:
          </label>
          <input
            type="text"
            name="condition"
            value={patient.condition}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Condition"
            required
          />
        </div>
        <div>
          <label htmlFor="gender" className="block mb-1">
            Gender:
          </label>
          <input
            type="text"
            name="gender"
            value={patient.gender}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Gender"
            required
          />
        </div>
        <div>
          <label htmlFor="date_of_birth" className="block mb-1">
            Date of Birth:
          </label>
          <input
            type="date"
            name="date_of_birth"
            value={patient.date_of_birth}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Date of Birth"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={patient.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Email"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Patient
        </button>
      </form>
    </div>
  );
};

export default AddPatient;

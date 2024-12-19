DROP TABLE IF EXISTS appointments;
DROP TABLE IF EXISTS patients;

CREATE TABLE patients (
    patient_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    condition VARCHAR(255),
    gender VARCHAR(10),
    date_of_birth DATE,
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE appointments (
    appointment_id SERIAL PRIMARY KEY,
    patient_id INT REFERENCES patients(patient_id),
    appointment_date TIMESTAMP,
    notes TEXT
);

INSERT INTO patients (name, age, condition, gender, date_of_birth, email) VALUES
('John Doe', 45, 'Hypertension', 'Male', '1979-05-15', 'john.doe@example.com'),
('Jane Smith', 32, 'Diabetes', 'Female', '1992-08-22', 'jane.smith@example.com'),
('Alice Johnson', 28, 'Asthma', 'Female', '1996-03-10', 'alice.johnson@example.com'),
('Bob Brown', 50, 'Arthritis', 'Male', '1974-11-05', 'bob.brown@example.com');

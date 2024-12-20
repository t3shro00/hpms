-- Drop tables if they already exist
DROP TABLE IF EXISTS appointments;
DROP TABLE IF EXISTS patients;

-- Create the ENUM type for gender
CREATE TYPE gender_type AS ENUM ('male', 'female', 'other');

-- Create the patients table
CREATE TABLE patients (
    patient_id SERIAL PRIMARY KEY,   -- SERIAL for auto-increment patient ID in PostgreSQL
    name VARCHAR(255) NOT NULL,       -- Patient's full name
    age INT NOT NULL,                 -- Patient's age
    gender gender_type NOT NULL,      -- Use the custom ENUM type for gender
    contact VARCHAR(15) NOT NULL,     -- Patient's contact number
    email VARCHAR(255) NOT NULL UNIQUE, -- Patient's email address
    patient_info TEXT,                -- New field for additional patient information
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Date and time when the record was created
);


-- Create the appointments table
CREATE TABLE appointments (
    appointment_id SERIAL PRIMARY KEY,  -- Use SERIAL for auto-increment appointment ID in PostgreSQL
    patient_id INT,                    -- Foreign key to the patients table
    appointment_date TIMESTAMP,        -- Appointment date and time
    notes TEXT,                        -- Notes for the appointment
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id)  -- Linking the patient_id to the patients table
);

-- Insert sample data into the patients table
INSERT INTO patients (name, age, gender, contact, email) VALUES
('John Doe', 45, 'male', '123-456-7890', 'john.doe@example.com'),
('Jane Smith', 32, 'female', '987-654-3210', 'jane.smith@example.com'),
('Alice Johnson', 28, 'female', '555-666-7777', 'alice.johnson@example.com'),
('Bob Brown', 50, 'male', '888-999-0000', 'bob.brown@example.com');

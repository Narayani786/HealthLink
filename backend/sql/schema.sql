-- run once to create DB/TABLES

CREATE DATABASE IF NOT EXISTS healthlink;
USE healthlink;

-- Conditions: symptom_keywords is a comma-seperated string of keywords (simple matching) 
CREATE TABLE IF NOT EXISTS conditions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    symptom_keywords VARCHAR(255) NOT NULL,
    condition_name VARCHAR(255) NOT NULL,
    specialization VARCHAR(255) NOT NULL
);

-- Doctors table
CREATE TABLE IF NOT EXISTS doctors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    specialization VARCHAR(255) NOT NULL,
    contact_no VARCHAR(50) NOT NULL
);

-- sample seed data - run after schema

USE healthlink;

-- Insert sample conditions
INSERT INTO conditions (symptom_keywords, condition_name, specialization)
VALUES
('fever, headache, fatigue', 'Viral Fever', 'General Physician'),
('chest pain, shortness of breath, sweating', 'Heart Attack', 'Cardiologist'),
('skin rash, itching, redness', 'Eczema', 'Dermatologist'),
('joint pain, swelling, stiffness', 'Arthritis', 'Orthopedic Surgeon'),
('persistent sadness, loss of interest, fatigue', 'Depression', 'Psychiatrist'),
('ear pain, hearing loss, ringing', 'Ear Infection', 'ENT Specialist'),
('abdominal pain, diarrhea, vomiting', 'Gastroenteritis', 'Gastroenterologist'),
('blurred vision, eye pain, redness', 'Conjunctivitis', 'Ophthalmologist'),
('high blood sugar, frequent urination, thirst', 'Diabetes', 'Endocrinologist'),
('frequent headaches, nausea, sensitivity to light', 'Migraine', 'Neurologist'),
('cough, difficulty breathing, wheezing', 'Asthma', 'Pulmonologist'),
('toothache, swelling, bleeding gums', 'Dental Infection', 'Dentist'),
('fever, cough, chest pain', 'Pneumonia', 'Pulmonologist'),
('painful urination, frequent urination', 'Urinary Tract Infection', 'Urologist'),
('irregular heartbeat, dizziness, fainting', 'Arrhythmia', 'Cardiologist'),
('scaly skin patches, itching', 'Psoriasis', 'Dermatologist'),
('fracture, severe bone pain, swelling', 'Bone Fracture', 'Orthopedic Surgeon'),
('memory loss, confusion, difficulty speaking', 'Stroke', 'Neurologist'),
('anxiety, restlessness, rapid heartbeat', 'Anxiety Disorder', 'Psychiatrist'),
('loss of appetite, yellow skin, fatigue', 'Hepatitis', 'Gastroenterologist'),
('sneezing, runny nose, itchy eyes', 'Allergic Rhinitis', 'ENT Specialist'),
('ear ringing, dizziness, hearing loss', 'Meniere’s Disease', 'ENT Specialist'),
('eye strain, headaches, blurred vision', 'Refractive Error', 'Ophthalmologist'),
('dry mouth, excessive thirst, fatigue', 'Type 2 Diabetes', 'Endocrinologist'),
('persistent cough, weight loss, night sweats', 'Tuberculosis', 'Pulmonologist'),
('bleeding gums, tooth decay', 'Gingivitis', 'Dentist'),
('lower back pain, leg numbness', 'Sciatica', 'Orthopedic Surgeon'),
('rapid heartbeat, shortness of breath', 'Tachycardia', 'Cardiologist'),
('skin blisters, burning sensation', 'Shingles', 'Dermatologist'),
('trouble sleeping, daytime fatigue', 'Insomnia', 'Psychiatrist');



-- Insert doctors
INSERT INTO doctors (name, specialization, contact_no) VALUES
('Dr. Meera Sharma', 'General Physician', '9876543210'),
('Dr. Rajiv Malhotra', 'Cardiologist', '9876543211'),
('Dr. Priya Menon', 'Dermatologist', '9876543212'),
('Dr. Arjun Kapoor', 'Orthopedic Surgeon', '9876543213'),
('Dr. Nisha Verma', 'Psychiatrist', '9876543214'),
('Dr. Vinay Rathi', 'ENT Specialist', '9876543215'),
('Dr. Kavita Singh', 'Gastroenterologist', '9876543216'),
('Dr. Rohit Sinha', 'Ophthalmologist', '9876543217'),
('Dr. Pooja Jain', 'Endocrinologist', '9876543218'),
('Dr. Aditya Bhat', 'Neurologist', '9876543219'),
('Dr. Smita Rao', 'Pulmonologist', '9876543220'),
('Dr. Kunal Desai', 'Dentist', '9876543221'),
('Dr. Shalini Nair', 'Urologist', '9876543222')
('Dr. Kavita Sharma', 'Cardiologist', '9123456780'),
('Dr. Rajesh Verma', 'Cardiologist', '9812345678'),
('Dr. Sneha Kapoor', 'Neurologist', '9988776655'),
('Dr. Vivek Nair', 'Neurologist', '9876123450'),
('Dr. Priya Iyer', 'Neurologist', '9001122334'),
('Dr. Ananya Rao', 'Dermatologist', '9112233445'),
('Dr. Suresh Gupta', 'Dermatologist', '9877001122'),
('Dr. Pooja Bansal', 'Dermatologist', '9322114455'),
('Dr. Karan Singh', 'Orthopedic Surgeon', '9009988776'),
('Dr. Meera Chawla', 'Orthopedic Surgeon', '9822334455'),
('Dr. Alok Deshmukh', 'Orthopedic Surgeon', '9765432100'),
('Dr. Rahul Joshi', 'General Physician', '9811223344'),
('Dr. Neha Malhotra', 'General Physician', '9922334455'),
('Dr. Ajay Patil', 'General Physician', '9733112299'),
('Dr. Sunita Menon', 'ENT Specialist', '9876541200'),
('Dr. Abhay Kulkarni', 'ENT Specialist', '9900123456'),
('Dr. Ramesh Sethi', 'ENT Specialist', '9812340987'),
('Dr. Jyoti Bhatt', 'Pediatrician',, '9933445566'),
('Dr. Anil Sood', 'Pediatrician', '9876109876'),
('Dr. Harsha Nair', 'Pediatrician', '9822113344');

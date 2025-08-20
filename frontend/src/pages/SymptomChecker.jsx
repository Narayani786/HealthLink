import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkSymptoms } from '../services/doctorServices';

export default function SymptomChecker() {
  const [symptoms, setSymptoms] = useState('');
  const navigate = useNavigate();

  const handleCheck = async () => {
    if (!symptoms.trim()) return alert('Please enter your symptoms');
    try {
      const data = await checkSymptoms(symptoms); // we send a STRING
      navigate(`/doctors/${data.specialization}`); // go to doctor list by specialization
    } catch (err) {
      console.error('Error checking symptoms:', err);
      alert('No match or server error.');
    }
  };

  return (
    <div>
      <h2>Symptom Checker</h2>
      <input
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
        placeholder="e.g. fever, headache"
      />
      <button onClick={handleCheck}>Check</button>
    </div>
  );
}

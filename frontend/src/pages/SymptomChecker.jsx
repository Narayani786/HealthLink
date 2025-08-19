import React, { useState } from 'react';
import { checkSymptoms } from '../services/doctorServices';

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = async () => {
    try {
      const symptomsArray = symptoms.split(',').map(s => s.trim());
      const data = await checkSymptoms(symptomsArray);
      setResult(data.condition);
    } catch (err) {
      console.error('Error checking symptoms:', err);
    }
  };

  return (
    <div>
      <input
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
        placeholder="Enter your symptoms"
      />
      <button onClick={handleCheck}>Check</button>
      {result && <div>Condition: {result[0]?.name}</div>}
    </div>
  );
};

export default SymptomChecker;

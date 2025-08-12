import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SymptomChecker() {
    const [symptoms, setSymptoms] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleCheck = async () => {
        if (!symptoms.trim()) {
            alert('Please enter your symptoms');
            return;
        }
        try {
            setLoading(true);
            const response = await fetch('/api/symptoms/check', {
                method: 'POST',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify({ symptoms })
            });

            const data = await response.json();
            setLoading(false);

            if (response.ok && data.specialization) {
                // Go to dr list page with spec in URL
                navigate(`/doctors/${data.specialization}`);
            } else {
                alert(data.message || 'No matching specialization found');
            }
        } catch (error) {
            console.error('Error checking symptoms:', error);
            setLoading(false);
            alert('Server error. Please try again later.');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Symptom Checker</h2>
            <textarea
            rows='4'
            style={{ width: '100%', padding: '8px' }}
            value={symptoms}
            onChange={(e) =>
                setSymptoms(e.target.value)}
                placeholder='Describe your symptoms...'
            />
            <br/>
            <button onClick={handleCheck}>
                {loading ? 'Checking...' : 'Find Specialist'}
            </button>
        </div>
    );
}






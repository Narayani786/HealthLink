import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);  // send search query back to parent component
    };

    return (
        <div style={{ display: 'flex', gap: '10px' }}>
        <input 
        type='text'
        placeholder="Search by symptom, condition, specialization or doctor name..."
        value={query}
        onChange={handleInputChange}
        style={{
            padding: '8px',
            width: '100%',
            maxWidth: '300px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '4px',
        }}
        />
        <button onClick={() => onSearch(query)}
            style={{ padding: '8px 12px' }}>
                Search
                </button>
    </div>
    );
}

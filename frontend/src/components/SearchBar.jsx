import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);  // send search query back to parent component
    };

    return (
        <input 
        type='text'
        placeholder="Search doctors..."
        value={query}
        onChange={handleSearch}
        style={{
            padding: '8px',
            width: '100%',
            maxWidth: '300px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '4px',
        }}
        />
    );
}

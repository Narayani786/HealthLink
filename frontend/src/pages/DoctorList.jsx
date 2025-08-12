import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import { getDoctors, getSpecializations, getConditions } from '../services/doctorServices.js';

export default function DoctorList() {
    const [doctors, setDoctors] = useState([]);
    const [allDoctors, setAllDoctors] = useState([]);
    const [specializations, setSpecializations] = useState([]);
    const [conditions, setConditions] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const doctorData = await getDoctors();
                const specializationData = await getSpecializations();
                const conditionsData = await getConditions();

                setDoctors(doctorData);
                setAllDoctors(doctorData);
                setSpecializations(specializationData);
                setConditions(conditionsData);
            } catch (err) {
                console.error('Error loading data:', err);
            }
        }
        fetchData();
    }, []);

    const handleSearch = (query) => {
        const lowerQuery = query.toLowerCase();

        // Search in conditions
        const matchedConditions = conditions.filter((cond) =>
        cond.name.toLowerCase().includes(lowerQuery)
    );

        // Search in specializations
        const matchedSpecializations = specializations.filter((spec) =>
    spec.name.toLowerCase().includes(lowerQuery)
    );

        // If query matches a spec -> filter drs
        let matchedDoctors = [];
        if (matchedSpecializations.length > 0) {
            matchedDoctors = allDoctors.filter((doc) =>
            matchedSpecializations.some((spec) =>
            spec.name.toLowerCase() === doc.specializations.toLowerCase()
        ));
    }

        // If no spec matched directly , maybe query is a dr. name
        if (matchedDoctors.length === 0) {
            matchedDoctors = allDoctors.filter((doc) =>
            doc.name.toLowerCase().includes(lowerQuery)
        );
    }

        // Set results
        setSearchResults({
            conditions: matchedConditions,
            specializations: matchedSpecializations,
            doctors: matchedDoctors,
        });

        // Show only dr. list in main view
        setDoctors(matchedDoctors);
    };


    return (
        <div>
            <h1>Find a Doctor</h1>
            <SearchBar onSearch={handleSearch}/>

            {/* Show matched cond or spec if any */}
            {searchResults.conditions?.length > 0 && (
                <div> 
                    <h3>Matched Conditions:</h3>
                    <ul>
                        {searchResults.conditions.amp((c) => (
                            <li key={c._id}>{c.name}</li>
                        ))}
                    </ul>
                </div>
            )}

            {searchResults.specializations?.length > 0 && (
                <div>
                    <h3>Matched Specializations:</h3>
                    <ul>
                        {searchResults.specializations.map((s) => (
                            <li key={s._id}>{s.name}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Doctors List */}
            <div>
                <h3>Doctors:</h3>
                {doctors.length > 0 ? (
                    doctors.map((doc) => (
                        <div key={doc._id}>
                            <h4>{doc.name}</h4>
                            <p>{doc.specializations}</p>
                            <p>{doc.location}</p>
                        </div>
                    ))
                ) : (
                    <p>No Doctors Found.</p>
                )}
            </div>
        </div>
    );
}

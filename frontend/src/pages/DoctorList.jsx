import { useEffect, useState } from "react";
import { getDoctors } from '../services/doctorServices.js';
import DoctorCard from '../components/DoctorCard.jsx';
import SearchBar from "../components/SearchBar.jsx";

export default function DoctorList() {
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);

    useEffect(() => {
        getDoctors().then((data) => {
            setDoctors(data);
            setFilteredDoctors(data);
        });
    }, []);

    const handleSearch = (query) => {
        const filtered = doctors.filter((doc) =>
        doc.name.toLowerCase().includes(query.toLowerCase()) ||
        doc.specialization.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDoctors(filtered);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Doctors List</h2>
            <SearchBar onSearch={handleSearch} />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {filteredDoctors.map((doc) => (
                    <DoctorCard key={doc.id} doctor={doc} />
                ))}
            </div>
        </div>
    );
}

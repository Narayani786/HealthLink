import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getDoctorById } from '../services/doctorService.js';

export default function DoctorDetails() {
    const { id } = useParams();
    const [doctor, setDoctor] = useState(null);

    useEffect(() => {
        getDoctorById(id).then(setDoctor);
    }, [id]);

    if(!doctor) return
    <p>Loading...</p>;

    return (
        <div style={{ padding: '20px' }}>
            <h2>{doctor.name}</h2>
            <p>Specialization: {doctor.specialization}</p>
            <p>Experience: {doctor.experience}</p>
            <p>Contact: {doctor.contact}</p>
        </div>
    );
}



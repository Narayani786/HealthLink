import { useEffect, useState } from "react";
import { getDoctors } from '../services/doctorServices.js';
import DoctorCard from '../components/DoctorCard.jsx';

export default function DoctorList() {
    const [doctor, setDoctor] = useState([]);

    useEffect(() => {
        getDoctors().then(setDoctor);
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Doctors List</h2>
            <div style={{ display: 'flex', flexWeap: 'wrap' }}>
                {doctor.map((doc) => (
                    <DoctorCard key={doc.id} doctor={doc} />
                ))}
            </div>
        </div>
    );
}

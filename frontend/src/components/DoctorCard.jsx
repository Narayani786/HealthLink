import { Link } from 'react-router-dom';

 export default function DoctorCard({ doctor }) {
    return (
        <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
            <h3>{doctor.name}</h3>
            <p>Specialization: {doctor.specialization}</p>
            <p>Experience: {doctor.experience}</p>
            <Link to={`/doctors/${doctor.id}`}>View Details</Link>
        </div>
    );
}

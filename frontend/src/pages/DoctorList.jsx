import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDoctorsBySpecialization } from "../services/doctorService";
import SearchBar from "../components/SearchBar"; // ✅ Import SearchBar

const DoctorList = () => {
  const { specialization } = useParams();
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctorsBySpecialization(specialization);
        setDoctors(data);
        setFilteredDoctors(data); // ✅ Show all doctors initially
      } catch (err) {
        console.error("Error fetching doctors:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, [specialization]);

  if (loading) {
    return <p>Loading doctors...</p>;
  }

  if (doctors.length === 0) {
    return <p>No doctors found for {specialization}</p>;
  }

  const handleSearch = (query) => {
    const result = doctors.filter(
      (doc) =>
        doc.name.toLowerCase().includes(query.toLowerCase()) ||
        doc.specialization.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDoctors(result);
  };

  return (
    <div>
      <h2>Doctors specialized in {specialization}</h2>

      {/* ✅ Search bar */}
      <SearchBar onSearch={handleSearch} />

      <ul>
        {filteredDoctors.map((doc) => (
          <li
            key={doc.id}
            onClick={() => navigate(`/doctor/${doc.id}`)} // ✅ Navigate to doctor details
            style={{ cursor: "pointer", margin: "10px 0" }}
          >
            <strong>{doc.name}</strong> - {doc.specialization}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;

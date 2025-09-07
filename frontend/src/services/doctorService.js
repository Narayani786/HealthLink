import axios from 'axios';
import { API_URL } from '../config.js';


// get dr by spec
export const getDoctorsBySpecialization = async (specialization) => {
  const res = await axios.get(`${API_URL}/doctors/specialization/${specialization}`
  );
  return res.data;
}

// get single dr by id
export const getDoctorById = async (id) => {
    const res = await axios.get(`${API_URL}/doctors/id/${id}`);
    return res.data;
};


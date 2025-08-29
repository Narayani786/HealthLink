import axios from 'axios';
import { API_URL } from '../config';


// get dr by spec
export const getDoctorsBySpecialization = async (specialization) => {
  const res = await axios.get(`${API_URL}/doctors/${specialization}`
  );
  return res.data;
}

// get single dr by id
export const getDoctorById = async (id) => {
    const res = await axios.get(`${API_URL}/doctors/${id}`);
    return res.data;
};


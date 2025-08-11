import axios from 'axios';
import { API_URL } from '../config';

// fetch all dr from backend 
export const getDoctors = async () => {
    const res = await axios.get(`${API_URL}/doctors`);
    return res.data;
};

// fetch single dr details by ID
export const getDoctorById = async (id) => {
    const res = await axios.get(`${API_URL}/doctors/${id}`);
    return res.data;
};

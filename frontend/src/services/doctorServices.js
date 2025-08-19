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

export const getSpecializations = async () => {
    const res = await axios.get(`${API_URL}/doctors/specializations`);
    return res.data;
};

export const getConditions = async () => {
    const res = await axios.get(`${API_URL}/conditions`);
    return res.data;
};


export const checkSymptoms = async (symptoms) => {
  try {
    const res = await axios.post(`${API_URL}/conditions/check`, { symptoms });
    return res.data;
  } catch (error) {
    console.error("Error in checkSymptoms service:", error);
    throw error;
  }
};

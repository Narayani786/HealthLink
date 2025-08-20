import axios from 'axios';
import { API_URL } from '../config';


export const getConditions = async () => {
    const res = await axios.get(`${API_URL}/conditions`);
    return res.data;
};

export const checkSymptoms = async (symptoms) => {
  const res = await axios.post(`${API_URL}/conditions/check`, { symptoms });
  return res.data;
};

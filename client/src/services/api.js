import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const getTasks = () => axios.get(`${API_URL}/tasks`);
export const createTask = (task) => axios.post(`${API_URL}/tasks`, task);
export const updateTask = (id, updates) =>
  axios.put(`${API_URL}/tasks/${id}`, updates);

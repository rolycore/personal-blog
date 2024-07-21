// src/api/apiClient.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api', // Asegúrate de que esta URL sea correcta
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;

// src/api/auth.js
import apiClient from './apiClient';

export const login = (credentials) => apiClient.post('/users/login/', credentials);
export const register = (userData) => apiClient.post('/users/register/', userData);

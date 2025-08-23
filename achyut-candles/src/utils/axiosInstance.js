// src/utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      alert('Session expired. Please log in again.');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

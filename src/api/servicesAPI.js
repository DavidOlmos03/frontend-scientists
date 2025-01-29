// api/services.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api', // BaseURL in the axios instance, this is a vite configuration
  timeout: 5000,
});

// Interceptors for the requests
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Error in the request:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;

// api/services.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api', // Usamos el prefijo del proxy configurado en Vite
  timeout: 5000,
});

// Puedes añadir interceptores si es necesario
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Error en la respuesta:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;

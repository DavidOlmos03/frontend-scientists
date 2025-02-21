import { defineStore } from "pinia";
import { ref } from "vue";
import axiosInstance from "../api/servicesAPI";

export const usePredictionStore = defineStore('prediction', ()=>{
    const prediction = ref({});

    const fetchPrediction = async (area, description) => {
        try {
            const response = await axiosInstance.post('predictions/predict', { area, description }); // Service URL
            prediction.value = response.data;
        } catch (error) {
            console.error('Error fetching data:',  error.response || error);    
        }
    }
    return {
        prediction,
        fetchPrediction,
    }
});
import { defineStore } from "pinia";
import { ref } from "vue";
import axiosInstance from "../api/servicesAPI";

export const useAreasStore = defineStore('areas', ()=>{
    const areas = ref([]);

    const fetchAreas = async () => {
        try {
            const response = await axiosInstance.get('areas'); // Service URL
            areas.value = response.data;
        } catch (error) {
            console.error('Error fetching data:',  error.response || error);
        }
    }

    return {
        areas,
        fetchAreas,
    }
});
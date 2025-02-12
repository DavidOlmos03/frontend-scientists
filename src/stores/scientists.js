import { ref } from 'vue';
import { defineStore } from "pinia";
import axiosInstance from '../api/servicesAPI';

export const useScientistsStore = defineStore('scientists', ()=>{
  const scientists = ref([]);
  const scientistsByArea = ref([]);
  const scientist = ref({});

    // Function to fetch data from the API
    const fetchScientists = async () => {
      try {
        const response = await axiosInstance.get('scientists'); // Service URL
        scientists.value = response.data;
      } catch (error) {
        console.error('Error fetching data:',  error.response || error);
      }
    };

    const fetchScientistsByArea = async (area) => {
      try {
        const response = await axiosInstance.get(`scientists/area/${area}`); // Service URL
        scientistsByArea.value = response.data;
      } catch (error) {
        console.error('Error fetching data:',  error.response || error);
      }
    };
    
    const fetchScientist = async (id) => {
      try {
        const response = await axiosInstance.get(`scientists/${id}`); // Service URL
        scientist.value = response.data;
      } catch (error) {
        console.error('Error fetching data:',  error.response || error);
      }
    };



    return {
      scientists,
      fetchScientists,
      scientistsByArea,
      fetchScientistsByArea,
      scientist,
      fetchScientist,
    }
});
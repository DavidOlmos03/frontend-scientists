import { ref } from 'vue';
import { defineStore } from "pinia";
import axiosInstance from '../api/servicesAPI';

export const useScientistsStore = defineStore('scientists', ()=>{
  const scientists = ref([]);
  const scientistsByArea = ref([]);
  const scientist = ref({});

    /**
     * @async
     * @returns {Array} - Array of scientists
     */
    const fetchScientists = async () => {
      try {
        const response = await axiosInstance.get('scientists'); // Service URL
        scientists.value = response.data;
      } catch (error) {
        console.error('Error fetching data:',  error.response || error);
      }
    };

    /**
     * @async
     * @param {number} area - The area ID
     * @returns {Array} - Array of scientists by area
     */
    const fetchScientistsByArea = async (area) => {
      try {
        const response = await axiosInstance.get(`scientists/area/${area}`); // Service URL
        scientistsByArea.value = response.data;
      } catch (error) {
        console.error('Error fetching data:',  error.response || error);
      }
    };
    
    /**
     * @async
     * @param {Integer} id - The scientist ID
     * @returns {Object} - Scientist
     */
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
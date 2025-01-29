import { ref, onMounted, computed } from 'vue';
import { defineStore } from "pinia";
import axiosInstance from '../api/servicesAPI';

export const useScientistsStore = defineStore('scientists', ()=>{
  const scientists = ref([]);
    // Function to fetch data from the API
    const fetchScientists = async () => {
      try {
        const response = await axiosInstance.get('scientists'); // Service URL
        console.log('Response data from the Store:', response.data); // Debug
        scientists.value = response.data;
      } catch (error) {
        console.error('Error fetching data:',  error.response || error);
      }
    };
    
    return {
      scientists,
      fetchScientists,
    }
});
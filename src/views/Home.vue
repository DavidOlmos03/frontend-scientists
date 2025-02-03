<script setup>

import Card from '@/components/Card.vue';
import { useScientistsStore } from '../stores/scientists';
import { onMounted, watch, computed } from 'vue';

const scientistsStore = useScientistsStore();
// const { fetchScientists, scientists } = scientistsStore;
const scientists = computed(() => scientistsStore.scientists);
const fetchScientists = scientistsStore.fetchScientists;

// watch(
//   () => scientistsStore.scientists,
//   (newScientists) => {
//     console.log('Scientists updated:', newScientists); // Debug
//   }
// );

onMounted(() => {
    fetchScientists();
    // console.log('Scientists in store:', scientistsStore.scientists); // Debug
  });
</script>

<template>
  <div class="bg-white dark:bg-slate-800">
    <h1 class="text-5xl font-extrabold uppercase text-indigo-600 text-center mb-6 shadow-lg py-7 mt-10 dark:text-white bg-gray-800 rounded-3xl">
      Scientists
    </h1>
    
    <Card
      :scientists = "scientists"
    />
  </div>
</template>



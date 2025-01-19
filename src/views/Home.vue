<script setup>

import Card from '@/components/Card.vue';
import { useScientistsStore } from '../stores/scientists';
import { onMounted, watch } from 'vue';

const scientistsStore = useScientistsStore();
const { fetchScientists, scientists } = scientistsStore;

watch(
  () => scientistsStore.scientists,
  (newScientists) => {
    console.log('Scientists updated:', newScientists); // Debug
  }
);

onMounted(() => {
    fetchScientists();
    console.log('Scientists in store:', scientistsStore.scientists); // Debug
  });
</script>

<template>
  <div class="bg-white dark:bg-slate-800 ">
    <h1 class="text-5xl font-extrabold text-indigo-500 text-center mb-6 shadow-lg py-7 mt-10 dark:text-white">
      Scientists
    </h1>
    
    <Card 
      :scientists = "scientists"
    />
  </div>
</template>



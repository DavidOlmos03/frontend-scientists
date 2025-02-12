<script setup>

import Card from '@/components/Card.vue';
import { useScientistsStore } from '../stores/scientists';
import { useAreasStore } from '../stores/areas';

import { onMounted, watch, computed } from 'vue';
import BarChart from '@/components/BarChart.vue'

const scientistsStore = useScientistsStore();
const scientists = computed(() => scientistsStore.scientists);
const fetchScientists = scientistsStore.fetchScientists;

const areasStore = useAreasStore();
const areas = computed(() => areasStore.areas);
const fetchAreas = areasStore.fetchAreas;

onMounted(() => {
    fetchScientists();
    fetchAreas();
  });
</script>

<template>
  <div class="bg-white dark:bg-slate-800">
    <h1 class="text-5xl font-extrabold uppercase text-indigo-600 text-center mb-6 shadow-lg py-7 mt-10 dark:text-white bg-gray-800 rounded-3xl">
      Scientists
    </h1>
    <div 
      class="w-1/2 h-96 bg-gray-100 rounded-3xl mx-auto hover:shadow-lg my-5"
    >
      <BarChart :labels="areas" />
    </div>
    <Card
      :scientists = "scientists"
    />
  </div>
</template>



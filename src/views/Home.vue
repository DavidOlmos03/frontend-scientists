<script setup>

import Card from '@/components/Card.vue';
import Title from '@/components/Title.vue';

import { useScientistsStore } from '../stores/scientists';
import { useAreasStore } from '../stores/areas';

import { onMounted, watch, computed } from 'vue';
import BarChart from '@/components/BarChart.vue'
import PieChart from '@/components/PieChart.vue'

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
    <Title title="Scientists" :subtitle="scientists.length + ' scientists'" />
    <div class="grid grid-cols-3 gap-4 mb-5 mx-10">
      <div 
        class="col-span-2 h-96 bg-gray-100 rounded-3xl hover:shadow-lg my-5"
        v-animateonscroll="{ enterClass: 'animate-fadeinright', leaveClass: 'animate-fadeoutright' }"
      >
        <BarChart 
          :labels="areas" 
        />
      </div>
      <div 
        class="h-96 bg-gray-100 rounded-3xl hover:shadow-lg my-5 mx-auto"
        v-animateonscroll="{ enterClass: 'animate-fadeinleft', leaveClass: 'animate-fadeoutleft' }"
      >
        <PieChart 
          class="mx-auto"
          :labels="areas" 
        />
      </div>
    </div>
    <Card
      :scientists = "scientists"
    />
  </div>
</template>



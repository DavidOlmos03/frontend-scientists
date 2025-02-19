<script setup>

import Card from '@/components/Card.vue';
import Title from '@/components/Title.vue';
import { useScientistsStore } from '../../stores/scientists';
import { onMounted, computed } from 'vue';

const scientistsStore = useScientistsStore();
const scientists = computed(() => scientistsStore.scientists);
const fetchScientists = scientistsStore.fetchScientists;


onMounted(() => {
    fetchScientists();
  });
</script>

<template>
  <div class="bg-white dark:bg-slate-800 ">
    <Title title="Library" :subtitle="scientists.length + ' scientists'" />
    
    <Card 
      :scientists = "scientists"
    />
  </div>
</template>
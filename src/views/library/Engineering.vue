<script setup>
	import Card from '@/components/Card.vue';
	import { useScientistsStore } from '../../stores/scientists';
	import { onMounted, computed } from 'vue';

	const scientistsStore = useScientistsStore();

	const scientistsByArea = computed(() => scientistsStore.scientistsByArea);
	const fetchScientistsByArea = scientistsStore.fetchScientistsByArea;
	onMounted(() => {
		const area = 3;
		fetchScientistsByArea(area);
	});
</script>
<template>
	<div class="bg-white dark:bg-slate-800 ">
    <h1 class="text-5xl font-extrabold uppercase text-indigo-600 text-center mb-6 shadow-lg py-7 mt-10 dark:text-white bg-gray-800 rounded-3xl">
      Scientists from Engineering
    </h1>
    
    <Card
      :scientists = "scientistsByArea"
    />
  </div>
</template>

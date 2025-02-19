<script setup>
	import Card from '@/components/Card.vue';
	import Title from '@/components/Title.vue';
	import { useScientistsStore } from '../../stores/scientists';
	import { onMounted, computed } from 'vue';

	const scientistsStore = useScientistsStore();

	const scientistsByArea = computed(() => scientistsStore.scientistsByArea);
	const fetchScientistsByArea = scientistsStore.fetchScientistsByArea;
	onMounted(() => {
		const area = 4;
		fetchScientistsByArea(area);
	});
</script>
<template>
	<div class="bg-white dark:bg-slate-800 ">
	<Title title="Others" :subtitle="scientistsByArea.length + ' scientists'" />
    
    <Card
      :scientists = "scientistsByArea"
    />
  </div>
</template>

<script setup>
    import { ref, watch } from 'vue'
    import { Bar } from 'vue-chartjs'
    import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
    import { useScientistsStore } from '../stores/scientists';
    import { arrayAreaNames, arrayScientistsByArea } from '../helpers/scientists';
    import { onMounted, computed } from 'vue';
    import { data } from 'autoprefixer';

    ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
    
    const props = defineProps({
        labels:{
            type: Array,
            required: true,
        }
        });

    // !!! One possible solution for the area names load is to use computed function
    const chartOptions = ref({
    responsive: true,
    plugins: {
        legend: {
            display: true
        }
    }
    })

    const chartData = computed(() => ({
        labels: arrayAreaNames(props.labels),
        datasets: [{ data: scientistsCount.value,
            backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#FF6E40']
    }]
    }));


    
    const scientistsCount = ref([]);

    watch(() => props.labels, async (newLabels) => {
        if (newLabels.length > 0) {
            scientistsCount.value = await arrayScientistsByArea(newLabels);
        } else {
            scientistsCount.value = [];
        }
    }, { immediate: true }); 

</script>

<template>
    <Bar :data="chartData" :options="chartOptions" />
</template>
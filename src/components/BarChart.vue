<script setup>
    import { ref } from 'vue'
    import { Bar } from 'vue-chartjs'
    import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
    import { useScientistsStore } from '../stores/scientists';
    import { arrayAreaNames } from '../helpers/scientists';
    import { onMounted, computed } from 'vue';
import { data } from 'autoprefixer';

    ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

    // !!! One possible solution for the area names load is to use computed function
    const chartOptions = ref({
    responsive: true,
    plugins: {
        legend: {
        display: true
        }
    }
    })

    const props = defineProps({
        dataSet: {
            type: Array,
            required: true,
        },
        labels:{
            type: Array,
            required: true,
        }
        });

    onMounted(() => {
        arrayAreaNames(props.labels);
        console.log("labels",props.labels);
    });

    const chartData = ref({
    labels: arrayAreaNames(props.labels),
    datasets: [{ data: [40, 20, 12, 10],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'] }]
    })
</script>

<template>
    <Bar :data="chartData" :options="chartOptions" />
</template>
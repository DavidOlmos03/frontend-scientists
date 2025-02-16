<script setup>
    import { ref, watch, computed } from 'vue'
    import { Pie } from 'vue-chartjs'
    import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'
    import { arrayAreaNames, arrayScientistsByArea } from '../helpers/scientists';

    ChartJS.register(Title, Tooltip, Legend, ArcElement)

    const props = defineProps({
        labels: {
            type: Array,
            required: true,
        }
    });

    const chartOptions = ref({
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Scientists by area',
                position: 'top'
            }
        }
    });

    const scientistsCount = ref([]);

    watch(() => props.labels, async (newLabels) => {
        if (newLabels.length > 0) {
            scientistsCount.value = await arrayScientistsByArea(newLabels);
        } else {
            scientistsCount.value = [];
        }
    }, { immediate: true });

    const chartData = computed(() => ({
        labels: arrayAreaNames(props.labels),
        datasets: [{
            data: scientistsCount.value,
            backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#FF6E40', '#7E57C2', '#26A69A']
        }]
    }));

</script>

<template>
    <Pie :data="chartData" :options="chartOptions" />
</template>

<script setup>
    import { useScientistsStore } from '../../stores/scientists';
    import { onMounted, computed } from 'vue';
    import { useRoute } from 'vue-router';
    

    const route = useRoute(); 
    const scientistsStore = useScientistsStore();
    const scientist = computed(() => scientistsStore.scientist);
    const fetchScientist = scientistsStore.fetchScientist;

    onMounted(() => {
        const id = route.params.id;
        fetchScientist(id);
    });
</script>

<template>
   <div class="flex gap-[2%] flex-wrap content-start p-4 bg-gray-800 rounded-lg shadow-lg mt-10 py-10">
    <!-- Scientist Name -->
    <div class="w-full h-[5%] mb-3 bg-gray-600 text-white text-center p-2 rounded-md shadow-md md:h-[7%] lg:h-[8%] uppercase text-xl font-bold">
        {{ scientist.name }}
    </div>

    <div class="flex flex-col sm:flex-row w-full gap-4">
        <!-- Photo -->
        <div class="w-full sm:w-1/4 bg-gray-600 text-white flex items-center justify-center p-4 rounded-md shadow-md">
            <img 
                class="w-full h-full object-cover rounded-md shadow-inner"
                v-if="scientist && scientist.name"
                :src="`/src/assets/imgs/${scientist.name.replace(/ /g, '_')}.jpg`" 
                alt="Scientist image" 
            >
        </div>

        <!-- Content -->
        <div class="grow bg-gray-600 text-white p-4 rounded-md shadow-md sm:flex-1">
            {{ scientist.description }}
        </div>
    </div>

    <!-- Footer -->
    <div class="w-full h-[5%] mt-3 bg-gray-600 text-white text-center p-2 rounded-md shadow-md md:h-[7%] lg:h-[8%] uppercase">
        {{ scientist.area === 1 ? 'Mathematics' : scientist.area === 2 ? 'Physics' : scientist.area === 3 ? 'Engineering' : 'Other' }} - @{{ scientist.creator ? scientist.creator : 'unknown' }}
    </div>
</div>

</template> 
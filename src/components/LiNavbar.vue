<script setup>
    import { defineProps } from 'vue';

    defineProps({
        area:{
            type: String,
            required: true,
        }
    });
</script>
<template>
    <li>
        <router-link 
            :to="area === 'library' ? '/library' : `/library/${area}`" 
            class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <div class="font-semibold uppercase">{{ area }}</div>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{ area }} data from scientists.</span>
        </router-link>
    </li>
</template>
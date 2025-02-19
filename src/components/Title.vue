<script setup>
    defineProps({
        title: {
            type: String,
            default: "Title"
        },
        subtitle: {
            type: String,
            default: "Subtitle"
        }
    })
</script>
<template>
    <div class="flex flex-col items-center justify-center mb-6 shadow-lg py-7 mt-10 dark:text-white bg-gray-800 rounded-3xl">
        <h1 class="text-5xl font-extrabold text-center text-red-600/100 dark:text-white uppercase extrabold">{{ title }}</h1>
        <h2 class="text-2xl font-bold text-center text-red-600/70 dark:text-white">{{ subtitle }}</h2>
    </div>
</template>
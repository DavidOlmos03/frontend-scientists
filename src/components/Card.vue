<script setup>
import { ref , onMounted} from 'vue'

const count = ref(0)

import { defineProps } from 'vue';

defineProps({
  scientists: {
    type: Array,
    required: true,
  },
});
</script>

<template>
    <div v-if="scientists.length > 0" class="grid grid-cols-12 gap-4">
      <div
        v-for="(scientist, index) in scientists"
        :key="index"
        class="rounded border md:shadow w-full overflow-hidden md:flex col-span-6 bg-gray-800"
      >
        <div class="md:w-1/4">
          <a href="#">
            <img
              class="object-cover h-full w-full"
              src="https://raw.githubusercontent.com/vuetailwind/storage/master/cards/card-2.jpg"
              alt="scientist image"
            />
          </a>
        </div>
  
        <div class="md:w-3/4 max-w-full px-4 py-4">
          <div class="text-xs text-white font-medium">
            <a href="#" class="uppercase hover:underline text-white">
              {{ scientist.area }}
            </a>
            <span class="mx-1">&bull;</span>
            <span class="text-white">{{ scientist.birthday }}</span>
          </div>
  
          <h3 class="font-semibold text-white my-2 hover:underline text-lg">
            <a href="#">{{ scientist.name }}</a>
          </h3>
  
          <div class="mb-4 w-full text-white">
            {{ scientist.description }}
          </div>
  
          <div class="flex items-center justify-between">
            <div
              class="text-sm inline-flex items-center text-white"
            >
              <a href="#">
                <img
                  class="w-8 h-8 rounded-full inline-block mr-2"
                  src="https://raw.githubusercontent.com/vuetailwind/storage/master/avatars/avatar-boy-1.jpg"
                  alt="scientist avatar"
                />
              </a>
              by
              <a href="#" class="ml-1 hover:underline">{{ scientist.creator }}</a>
            </div>
  
            <div class="text-right">
              <a href="#" class="py-2 text-indigo-600 text-xs uppercase hover:underline"
                >Read More <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading scientists...</p>
    </div>
</template>
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

const visibleCount = ref(6);

const loadMore = ()=>{
  visibleCount.value += 6;
}

</script>

<template>
    <div v-if="scientists.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="(scientist, index) in scientists.slice(0, visibleCount)"
        :key="index"
        class="rounded-lg border md:shadow w-full overflow-hidden md:flex bg-gray-800 opacity-90 hover:opacity-100 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
        v-animateonscroll="{ enterClass: 'animate-flipup', leaveClass: 'animate-fadeout' }"
        >
        <div class="md:w-1/4 hover:scale-110 transition-transform duration-300 ease-in-out">
          <router-link :to="`/library/scientist/${scientist.id}`">
            <img
              class="object-cover h-full w-full"
              :src="`/src/assets/imgs/${scientist.name.replace(/ /g, '_')}.jpg`"
              alt="Scientist image"
            />
          </router-link>
        </div>
  
        <div class="md:w-3/4 max-w-full px-4 py-4">
          <div class="text-xs text-white font-medium">
            <router-link :to="scientist.area == 1 ? '/library/mathematics' : scientist.area == 2 ? '/library/physics' : scientist.area == 3 ? '/library/engineering' : '/library/others'"
              class="uppercase hover:underline text-white">
              {{ scientist.area === 1 ? 'Mathematics' : scientist.area === 2 ? 'Physics' : scientist.area === 3 ? 'Engineering' : 'Other' }}
            </router-link>
            <span class="mx-1">&bull;</span>
            <span class="text-white">{{ scientist.birthday }}</span>
          </div>
  
          <h3 class="font-semibold text-white my-2 hover:underline text-lg">
            <router-link :to="`/library/scientist/${scientist.id}`">
              {{ scientist.name }}
            </router-link>
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
                  src="/src/assets/imgs/avatar.jpeg"
                  alt="scientist avatar"
                />
              </a>
              by
              <a href="#" class="ml-1 hover:underline font-bold">{{ scientist.creator.name }}</a>
            </div>
  
            <div class="text-right">
              <router-link :to="`/library/scientist/${scientist.id}`" class="py-2 text-indigo-600 text-xs uppercase hover:underline hover:text-white hover:font-bold">
                Read More <span>&rarr;</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading scientists...</p>
    </div>
    <!-- Load more button -->
    <div v-if="visibleCount < scientists.length" class="flex justify-center mt-10">
      <button
        @click="loadMore"
        class="bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm uppercase hover:bg-indigo-700 transition-all duration-300"
      >
        Load more
      </button>
    </div>
</template>
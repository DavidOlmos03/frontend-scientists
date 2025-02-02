<script setup>
  import { RouterView } from 'vue-router';
  import NavBar from '@/components/NavBar.vue';
  import Footer from '@/components/Footer.vue';

</script>


<template>
  <div id="app" class="p-4 px-6 lg:px-8">
    <header class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <NavBar />
    </header>

    <!-- View rendered based on the route -->
     <div class="pt-10 shadow-md px-4">
       <RouterView />
     </div>

    <!-- Footer -->
     <div class="shadow-md">
       <Footer />
     </div>
  </div>
</template>



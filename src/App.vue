<script setup>
  import { RouterView } from 'vue-router';
  import NavBar from '@/components/NavBar.vue';
  import Footer from '@/components/Footer.vue';

</script>


<template>
  <div id="app" class="p-4 px-6 lg:px-8">
    <header>
      <NavBar />
    </header>

    <!-- View rendered based on the route -->
    <RouterView />

    <!-- Footer -->
     <div>
       <Footer />
     </div>
  </div>
</template>

<!-- <script>
export default {
  name: 'App',
};
</script> -->



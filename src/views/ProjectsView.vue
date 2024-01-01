<template>
  <div class="backgrnd border-2 border-blue-500 pt-14 ml-10 w-3/4 rounded-t-large relative">
    <h1 class="ml-1 font-nunito text-lg absolute top-0 left-2">My pet-projects</h1>
    <div>
      <!-- здесь будут карточки проектов -->
      <Projects />
    </div>
    <div class="absolute top-0 right-0">
      <Navbar />
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Projects from '../components/Projects.vue'
</script>

<style lang="scss" scoped>
.backgrnd{
  background-color: #428ffa33;
}
</style>

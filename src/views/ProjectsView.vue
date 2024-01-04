<template>
  <div class=" bg-gradient-to-br from-slate-200 to-blue-300 border-2 border-blue-500 pt-14 ml-10 w-3/4 rounded-t-large relative">
    <h1 class=" text-5xl font-medium font-nunito absolute top-5 left-7">My pet-projects</h1>
    <div class="mt-10">
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

</style>

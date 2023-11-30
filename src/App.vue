<template>
  <div class="flex mx-20 " >
    
    <SideCard />
    <RouterView/>
    <Navbar />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import SideCard from './components/SideCard.vue';
</script>

<style lang="scss" scoped></style>

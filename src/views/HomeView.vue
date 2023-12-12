<script setup>
import Navbar from '../components/Navbar.vue';

const name = 'Nikita'
</script>

<template>
  <main class="pt-14 ml-10 w-3/4 rounded-t-large bg-slate-600 relative">
    <h1 class="-mt-8">HEllo! My name is {{ name }}</h1>
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsa libero aliquid at incidunt non ex, cupiditate dolor! Tempore quis dolorem officiis repellat aspernatur deleniti natus ab, ullam beatae illo?</p>
    </div>
    <div class="absolute top-0 right-0">
      <Navbar /> 
    </div>
  </main>
</template>

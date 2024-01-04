<script setup>
import Navbar from '../components/Navbar.vue'

const name = 'Nikita'
</script>

<template>
  <main class="bg-gradient-to-br from-slate-200 h-[90vh] to-blue-300 border-2 border-blue-500 pt-14 ml-10 w-3/4 rounded-t-large  relative">
    <h1 class="-mt-8">HEllo! My name is {{ name }}</h1>
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsa libero aliquid at
        incidunt non ex, cupiditate dolor! Tempore quis dolorem officiis repellat aspernatur
        deleniti natus ab, ullam beatae illo?
      </p>
    </div>
    <div class="absolute top-0 right-0">
      <Navbar />
    </div>
  </main>
</template>
<style>

</style>

<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex h-fit p-3 mt-2 border-sky-950 ">
    <ul class="flex space-x-4">
      <!-- <li>
        <RouterLink
          class="px-4 py-2 border-2 border-blue-500 rounded-full hover:bg-blue-400 hover:text-white hover:transition-all hover:duration-1000 dark:text-white"
          to="/"
        >
          Home
        </RouterLink>
      </li> -->
      <li>
        <RouterLink
          class="px-4 py-2 border-2 rounded-full hover:transition-all hover:duration-1000 shadow hover:shadow-lg active:bg-teal-800" :class="{ 'active-link': $route.path === '/' }"
          to="/"
        >
          About
        </RouterLink>
      </li>
      <li>
        <RouterLink
          class="px-4 py-2 border-2 rounded-full hover:transition-all hover:duration-1000 shadow hover:shadow-lg" :class="{ 'active-link': $route.path === '/projects' }"
          to="/projects"
        >
          Projects
        </RouterLink>
      </li>
      
    </ul>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'


</script>

<style lang="scss" scoped>
.active-link {
  background-color: teal;
}
</style>

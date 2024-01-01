<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex sticky h-fit p-3 bg-slate-200 rounded-tr-large rounded-bl-large">
    <ul class="flex space-x-4">
      <li>
        <RouterLink
          class="px-4 py-2 border-2 border-blue-500 rounded-full hover:bg-blue-400 hover:text-white hover:transition-all hover:duration-1000 dark:text-white"
          to="/"
        >
          Home
        </RouterLink>
      </li>
      <li>
        <RouterLink
          class="px-4 py-2 border-2 border-blue-500 rounded-full hover:bg-blue-400 hover:text-white hover:transition-all hover:duration-1000 dark:text-white"
          to="/about"
        >
          About
        </RouterLink>
      </li>
      <li>
        <RouterLink
          class="px-4 py-2 border-2 border-blue-500 rounded-s-full hover:bg-blue-400 hover:text-white hover:transition-all hover:duration-1000 dark:text-white"
          to="/projects"
        >
          Projects
        </RouterLink>
      </li>
      <li class="relative" @click="toggleProjectsMenu">
        <button
          class="dropdown_btn px-4 py-2 border-2 -mt-2 -ml-4 border-blue-500 rounded-e-full hover:bg-blue-400 hover:text-white hover:transition-all hover:duration-1000 dark:text-white"
        >
          <svg
            class="arrow w-4 h-5 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <div
          v-show="isProjectsMenuOpen"
          class="absolute flex mt-2 space-y-2 bg-white p-2 border rounded shadow-lg flex-col"
        >
          <!-- Список проектов -->
          <button
            v-for="project in projects"
            :key="project.id"
            @click="scrollToProject(project.id)"
            class="hover:bg-blue-400"
          >
            {{ project.name }}
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Projects from './Projects.vue'

const isProjectsMenuOpen = ref(false)
const projects = Projects.data().projects

const toggleProjectsMenu = () => {
  isProjectsMenuOpen.value = !isProjectsMenuOpen.value
}

const scrollToProject = (projectId) => {
  const projectElement = document.getElementById(`project-${projectId}`)
  if (projectElement) {
    projectElement.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style lang="scss" scoped>
.arrow{
height: 22px;
margin-left: -9px;
}
.dropdown_btn{
  margin-top: -9px;
  width: 10px;
}
</style>

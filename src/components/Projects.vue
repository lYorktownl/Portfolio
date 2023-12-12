<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="grid grid-cols-1 place-items-center">
      <div class="project-card bg-slate-200 w-48 h-48 rounded-large flex flex-col justify-center items-center" v-for="project in projects" :key="project.id" :id="'project-' + project.id">
        <img class="icon w-20 h-20 items-center" :src="getIconPath(project.icon)" alt="Project Icon" />
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          { id: 1, name: "To do React", description: "First project on React", icon: "todo-icon.svg"},
          { id: 2, name: "Portfolio", description: "Site portfolio", icon: "portfolio-icon.svg" },
          { id: 3, name: "Timer", description: "Obratnyi otstchet", icon: "timer-icon.svg" },
          { id: 4, name: "Weather", description: "Weather API", icon: "weather-icon.svg"},
          { id: 51, name: "Landing1", description: "verstka po makety", icon: "landing-icon.svg"},
          { id: 54, name: "Landing2", description: "verstka po makety", icon: "landing-icon.svg"},
          { id: 52, name: "Landing3", description: "verstka po makety", icon: "landing-icon.svg"},
          { id: 53, name: "Landing4", description: "verstka po makety", icon: "landing-icon.svg"},
          { id: 56, name: "Landing5", description: "verstka po makety", icon: "landing-icon.svg"},
          { id: 58, name: "Landing6", description: "verstka po makety", icon: "landing-icon.svg"},
        ],
      };
    },
    methods: {
    getIconPath(icon) {
        return `./src/assets/icons/${icon}`;
    },
  },
  };
  </script>
  
  <style scoped>
  .project-card {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
  }
  </style>
  
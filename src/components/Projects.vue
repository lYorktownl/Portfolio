<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="grid grid-cols-1 ml-3 place-items-start  ">
    <div
      class="project-card ring rounded-large flex divide-blue-500/70 divide-x-4"
      v-for="project in projects"
      :key="project.id"
      :id="'project-' + project.id"
    >
      <div class="w-48 h-48 flex flex-col justify-center items-center">
      <img
        class="icon w-20 h-20 items-center"
        :src="getIconPath(project.icon)"
        alt="Project Icon"
      />
      <h3>{{ project.name }}</h3>
      <a v-if="project.link" :href="project.link" target="_blank" class=" border-b-2 border-blue-500 hover:text-fuchsia-500"> View on github </a>
      </div>

      <div v-if="project.details" v-html="formatDetails(project.details)" class="text-lg pl-3"></div>

    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'To do on React',
          details: 'My first experience with React, my first acquaintance with frameworks, as well as libraries and the concept of spa. \n I learned to make commits and work with Git.\n Layout according to specifications, gets acquainted with react hooks.', 
          icon: 'todo-icon.svg',
          link: 'https://github.com/lYorktownl/My_kanban.git',
        },
        { id: 2, 
          name: 'Portfolio', 
          details: 'Site portfolio', 
          icon: 'portfolio-icon.svg',
          link: '',
        },
        { id: 3, 
          name: 'Timer', 
          details: 'Obratnyi otstchet', 
          icon: 'timer-icon.svg',
          link: '',
        },
        { id: 4, 
          name: 'Weather', 
          details: 'Weather API', 
          icon: 'weather-icon.svg',
          link: '',
        },
        { id: 5, 
          name: 'Landing', 
          details: 'verstka po makety', 
          icon: 'landing-icon.svg',
          link: '' 
        },
      ]
    }
  },
  methods: {
    getIconPath(icon) {
      return `./src/assets/icons/${icon}`
    },
    formatDetails (details) {
        if (details){
          return details.includes ('\n') ? details.split('\n').map(paragraph => `<p>${paragraph}</p>`).join('') : details;
        }
      return '';
    }
  },
}
</script>

<style scoped>
.project-card {
  
  padding: 10px;
  margin: 10px;
  
}
</style>

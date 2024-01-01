<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="grid grid-cols-1 ml-3 place-items-start">
    <div
      class="project-card  bg-slate-400 rounded-large flex"
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
      <p>{{ project.description }}</p>
      <a v-if="project.link" :href="project.link"> View on github </a>
      </div>

      <div v-if="project.details" v-html="formatDetails(project.details)" class="text-lg"></div>

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
          description: 'First project on ReactJS',
          details: 'My first experience with React, my first acquaintance with frameworks, as well as libraries and the concept of spa. \n I learned to make commits and work with Git.\n Layout according to specifications, gets acquainted with react hooks.', 
          icon: 'todo-icon.svg',
          link: 'https://github.com/lYorktownl/My_kanban.git',
        },
        { id: 2, 
          name: 'Portfolio', 
          description: 'Site portfolio', 
          icon: 'portfolio-icon.svg',
          link: '',
        },
        { id: 3, 
          name: 'Timer', 
          description: 'Obratnyi otstchet', 
          icon: 'timer-icon.svg',
          link: '',
        },
        { id: 4, 
          name: 'Weather', 
          description: 'Weather API', 
          icon: 'weather-icon.svg',
          link: '',
        },
        { id: 5, 
          name: 'Landing', 
          description: 'verstka po makety', 
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
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  
}
</style>

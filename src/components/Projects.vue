<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="grid grid-cols-1 mx-16 place-items-start">
    <div
      class="p-[10px] m-[10px] ring flex divide-blue-500/70 divide-x-4 min-w-full"
      v-for="project in projects"
      :key="project.id"
      :id="'project-' + project.id"
    >
      <div class="min-w-48 h-48 flex flex-col justify-center items-center">
        <img
          class="icon w-20 h-20 items-center"
          :src="getIconPath(project.icon)"
          alt="Project Icon"
        />
        <h3>{{ project.name }}</h3>
        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          class="border-b-2 border-blue-500 hover:text-fuchsia-500"
        >
          View on github
        </a>
      </div>

      <div
        v-if="project.details"
        v-html="formatDetails(project.details)"
        class="text-lg pl-3 w-full"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        // в планах вынести все проекты в отдельный файл, но пока что так
        {
          id: 1,
          name: 'To do on React',
          details:
            'Мой первый опыт работы с React, первое знакомство с фреймворками, библиотеками, понятием SPA и компенентным подходом. \n Научился делать коммиты и работать с Git.\n Верстка по тз, знакомство с реакт хуками.',
          icon: 'list3.svg',
          link: 'https://github.com/lYorktownl/My_kanban.git'
        },
        {
          id: 2,
          name: 'Portfolio',
          details: 'Site portfolioбиблиотеками, тзнакомство с реакт хуками.',
          icon: 'portfolio-icon.svg',
          link: ''
        },
        { id: 3, name: 'Timer', details: 'Obratnyi otstc.', icon: 'timer-icon.svg', link: '' },
        {
          id: 4,
          name: 'Weather',
          details:
            'Weather APIМой первый опыт раворками, библиотеками, понятием SPA и компенентным подходом. \n Научился делать коммиты и работать с Git.\n Верстка по тз, знакомство с реакт хуками.',
          icon: 'weather-icon.svg',
          link: ''
        },
        {
          id: 5,
          name: 'Landing',
          details:
            'verstka po maketyтеками, понятием SPA и компенентным подходом. \n Научился делать коммиты и работать с Git.\n Верстка по тз, знакомство с реакт хуками.',
          icon: 'landing-icon.svg',
          link: ''
        }
      ]
    }
  },
  methods: {
    getIconPath(icon) {
      return `./src/assets/icons/${icon}`
    },
    formatDetails(details) {
      //функция для пользоветельских переносов взамен css
      if (details) {
        return details.includes('\n')
          ? details
              .split('\n')
              .map((paragraph) => `<p>${paragraph}</p>`)
              .join('')
          : details
      }
      return ''
    }
  }
}
</script>

<style scoped></style>

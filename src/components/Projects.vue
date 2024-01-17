<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div
    class="grid sm:mx-16 mx-2 xl:pt-20 place-items-start"
    :class="{ 'gt:grid-cols-2': !showDetails, 'grid-cols-1': showDetails }"
  >
    <div
      class="p-[10px] sm:m-[10px] m-[10px] sm:flex flex-col sm:min-w-full mb-4"
      v-for="project in projects"
      :key="project.id"
      :id="'project-' + project.id"
    >
      <div class="sm:min-w-48 sm:h-48 w-28 h-28 flex flex-col justify-center items-center mx-auto">
        <img class="icon w-10 sm:w-20 h-20 items-center" :src="'/' + project.icon" alt="Project Icon" />
        <h3>{{ project.name }}</h3>
        <a v-if="project.link" :href="project.link" target="_blank" class="border-b-2">
          View on github
        </a>
      </div>

      <div class="text-lg pl-3 w-full">
        <div v-html="formatFirstParagraph(project.details, project.showDetails)"></div>
        <div v-if="project.showDetails" v-html="formatDetails(project.details)"></div>
        <button @click="toggleDetails(project)" class="border-b-2">
          {{ project.showDetails ? 'View less' : 'View more' }}
        </button>
      </div>
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
            'Мой первый опыт работы с React, первое знакомство с фреймворками, библиотеками, понятием SPA и компонентным подходом. \n Познакомился с системой контроля версий Git \n Верстал по макету с тз для элементов списка задач, а так же пощупал, что такое react hooks и как они работают.',
          icon: 'assets/icons/list3.svg',
          link: 'https://github.com/lYorktownl/My_kanban.git',
          showDetails: false
        },
        {
          id: 2,
          name: 'Portfolio',
          details:
            'Первый полностью самостоятельный проект на Vue3 + vite и Tailwind css. \n После реакта, захотелось для себя попробовать еще какой-нибудь фрэймвор, выбирая между Angular и Vue,  мой выбор остановился на последнем, в силу большей мобильности и гибкости настроек, к тому же мне понравилась идея однофайловых компонентов и новый синтаксис vue3. Неожиданно главным вызовом для меня стал выбор дизайна и цветовой схемы для проекта =) \n С этим вызовом мне помогал справляться Tailwind. Конечно у него есть свои плюсы и минусы: из плюсов мне понравилось, что не нужно придумывать миллион имен для каждого элемента, ведь теперь ты можешь напрямую работать с каждым из них, много предустановленных CSS шаблонов, что сильно экономит время. Из минусов можно отметить, что немного засоряются сами компоненты, когда необходимо прописать много стилей, от части эту проблему решает расширение, которое сворачивает "class=". Но от старого доброго css все равно никуда не деться) ',
          icon: 'assets/icons/portfolio-icon.svg',
          link: 'https://github.com/lYorktownl/Portfolio.git',
          showDetails: false
        },
        {
          id: 3,
          name: 'Timer',
          details: 'Obratnyi otstc.',
          icon: 'assets/icons/timer-icon.svg',
          link: '',
          showDetails: false
        },
        {
          id: 4,
          name: 'Weather',
          details:
            'Weather APIМой первый опыт раворками, библиотеками, понятием SPA и компенентным подходом. \n Научился делать коммиты и работать с Git.\n Верстка по тз, знакомство с реакт хуками.',
          icon: 'assets/icons/weather-icon.svg',
          link: '',
          showDetails: false
        },
        {
          id: 5,
          name: 'Landing',
          details:
            'Это был один из первых этапов погружения в веб-разработку. Узнал про подключаемые стили, и про работу с разными формами и кнопками. Получил базовые навыки работы со стилями.',
          icon: 'assets/icons/landing-icon.svg',
          link: 'https://github.com/lYorktownl/repair-design.git',
          showDetails: false
        }
      ]
    }
  },
  methods: {
    formatFirstParagraph(details, showDetails) {
      // пилим отображение только для первого параграфа
      if (details) {
        if (showDetails) {
          return ''
        } else {
          const firstParagraph = details.split('\n')[0]
          return `<p>${firstParagraph}`
        }
      }
      return ''
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
    },

    toggleDetails(project) {
      // свертка и развертка полного описания
      project.showDetails = !project.showDetails
    }
  },
  computed: {
    showDetails() {
      // Возвращает true, если хотя бы один проект имеет открытые детали
      return this.projects.some((project) => project.showDetails)
    }
  }
}
</script>

<style scoped></style>

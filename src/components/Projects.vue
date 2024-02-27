<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div
    class="grid sm:mx-2 mx-16 xl:pt-0  place-items-start"
    :class="{ 'gt:grid-cols-2': !showDetails, 'grid-cols-1': showDetails }"
  >
    <div
      class="p-[10px] sm:m-[10px] m-[10px] sm:flex   mb-4 bg-[#292f36fa] rounded-xl" :class="{ 'flex-col': !showDetails, 'min-w-full': showDetails }"
      v-for="project in projects"
      :key="project.id"
      :id="'project-' + project.id"
    >
      <div class="sm:min-w-48 sm:h-48 w-28 h-28 flex flex-col justify-center items-center mx-auto">
        <img class="icon w-10 sm:w-20 h-20 items-center" :src="'/' + project.icon" alt="Project Icon" />
        <h3 class="text-center">{{ project.name }}</h3>
        <a v-if="project.link" :href="project.link" target="_blank" class="border-b-2 hover:text-teal-500">
          View on github
        </a>
      </div>

      <div class="text-lg pl-3 w-full">
        <div v-html="formatFirstParagraph(project.details, project.showDetails)" class="highlight"></div>
        <div v-if="project.showDetails" v-html="formatDetails(project.details)" class="highlight"></div>
        <button @click="toggleDetails(project)" class="rounded-large ease-in-out hover:scale-110 delay-150 duration-300 p-1 text-blue-400 hover:text-teal-500 hover:shadow-md shadow-white">
          {{ project.showDetails ? 'Скрыть' : 'Узнать больше' }}
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
          name: 'Канбан доска',
          details:
            'Мой первый опыт работы с React, первое знакомство с фреймворками, библиотеками, понятием SPA и компонентным подходом. \n Познакомился с системой контроля версий Git \n Верстал по макету с тз для элементов списка задач, а так же пощупал, что такое react hooks и как они работают.',
          icon: 'assets/icons/list3.svg',
          link: 'https://github.com/lYorktownl/My_kanban.git',
          showDetails: false
        },
        {
        
          id: 2,
          name: 'Персональный сайт-портфолио',
          details:
            'Первый полностью самостоятельный проект на Vue3 + vite и TailwindCSS. \n После реакта, захотелось для себя попробовать еще какой-нибудь фрэймвор, выбирая между Angular и Vue,  мой выбор остановился на последнем, в силу большей мобильности и гибкости настроек, к тому же мне понравилась идея однофайловых компонентов и новый синтаксис Vue3. Неожиданно главным вызовом для меня стал выбор дизайна и цветовой схемы для проекта =) \n С этим вызовом мне помогал справляться TailwindCSS. Конечно у него есть свои плюсы и минусы: из плюсов мне понравилось, что не нужно придумывать миллион имен для каждого элемента, ведь теперь ты можешь напрямую работать с каждым из них, много предустановленных CSS шаблонов, что сильно экономит время. Из минусов можно отметить, что немного засоряются сами компоненты, когда необходимо прописать много стилей, от части эту проблему решает расширение, которое сворачивает "class=". Но от старого доброго css все равно никуда не деться) ',
          icon: 'assets/icons/portfolio-icon.svg',
          link: 'https://github.com/lYorktownl/Portfolio.git',
          showDetails: false
        },
        {
          id: 3,
          name: 'Timer',
          details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus eveniet ab esse reprehenderit nobis voluptate mollitia ullam amet fugit deleniti. Similique, maiores ipsa. Rem, earum reiciendis! Eos harum saepe enim!',
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
          name: 'Верстка лендинга по макету',
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
      if (details) {
        // Используем стили напрямую в HTML и добавляем класс 'highlight' для всегда видимого выделения
        const highlightedDetails = details.replace(/\b(React|Git|SPA|Vue3|vite|TailwindCSS|Vue|CSS)\b/g, '<span style="color: rgb(20 184 166)">$1</span>');
        
        return highlightedDetails.includes('\n')
          ? highlightedDetails.split('\n').map((paragraph) => `<p>${paragraph}</p>`).join('')
          : highlightedDetails;
      }
      return '';
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

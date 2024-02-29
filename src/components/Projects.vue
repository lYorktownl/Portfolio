<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class=" sm:mx-2 mx-16 xl:pt-0  place-items-start">
    <div class="grid"
    :class="{ 'grid-cols-2': !showAll, 'grid-cols-1': showAll }">
      <!-- Проект 1 -->
      <div class="bg-[#292f36fa] rounded-xl p-[10px] sm:m-[10px] m-[10px] mb-4" :class="{ '': !showAll, 'flex': showAll}">
        <div class="sm:min-w-48 sm:h-48 w-28 h-28 flex flex-col justify-center items-center mx-auto bg-[#292f36fa]">
          <img class="icon w-10 sm:w-20 h-20 items-center" src="/assets/icons/list3.svg" alt="Project Icon" />
          <h3 class="text-center">Канбан доска</h3>
          <a href="https://github.com/lYorktownl/My_kanban.git" target="_blank" class="border-b-2 hover:text-teal-500">View on github</a>
        </div>
        <div class="text-lg pl-3 w-full">
          <!-- Описание проекта 1 -->
          <div> 
            {{ getFirstSentence(project1.details, project1.showAll) }}
          </div>
          <button @click="toggleDescription('project1')"  class="rounded-large ease-in-out hover:scale-110 delay-150 duration-300 p-1 text-blue-400 hover:text-teal-500 hover:shadow-md shadow-white">{{ project1.showAll ? 'Скрыть' : 'Показать больше'  }}</button>        </div>
      </div>

      <!-- Проект 2 -->
      <div class="bg-[#292f36fa] rounded-xl p-[10px] sm:m-[10px] m-[10px] mb-4" :class="{ '': !showAll, 'flex': showAll}" >
        <div class="sm:min-w-48 sm:h-48 w-28 h-28 flex flex-col justify-center items-center mx-auto">
          <img class="icon w-10 sm:w-20 h-20 items-center" src="/assets/icons/portfolio-icon.svg" alt="Project Icon" />
          <h3 class="text-center">Портфолио</h3>
          <a href="https://github.com/lYorktownl/Portfolio.git" target="_blank" class="border-b-2 hover:text-teal-500">View on github</a>
        </div>
        <div class="text-lg pl-3 w-full">
          <!-- Описание проекта 2 -->
          <div> 
            {{ getFirstSentence(project2.details, project2.showAll) }}
          </div>
          <button @click="toggleDescription('project2')" class="rounded-large ease-in-out hover:scale-110 delay-150 duration-300 p-1 text-blue-400 hover:text-teal-500 hover:shadow-md shadow-white">{{ project2.showAll ? 'Скрыть' : 'Показать больше'  }}</button>
        </div>
      </div>

      <!-- Проект 3 -->
      <div class="bg-[#292f36fa] rounded-xl p-[10px] sm:m-[10px] m-[10px] mb-4" :class="{ '': !showAll, 'flex': showAll}">
        <div class="sm:min-w-48 sm:h-48 w-28 h-28 flex flex-col justify-center items-center mx-auto">
          <img class="icon w-10 sm:w-20 h-20 items-center" src="/assets/icons/timer-icon.svg" alt="Project Icon" />
          <h3 class="text-center">Таймер</h3>
          <a href="" target="_blank" class="border-b-2 hover:text-teal-500">View on github</a>
        </div>
        <div class="text-lg pl-3 w-full">
          <!-- Описание проекта 3 -->
          <div  class="highlight">
            {{ getFirstSentence(project3.details, project3.showAll) }}
          </div>
          <button @click="toggleDescription('project3')" class="rounded-large ease-in-out hover:scale-110 delay-150 duration-300 p-1 text-blue-400 hover:text-teal-500 hover:shadow-md shadow-white">{{ project3.showAll ? 'Скрыть' : 'Показать больше'  }}</button>        </div>
      </div>

      <!-- Проект 4 -->
      <div class="bg-[#292f36fa] rounded-xl p-[10px] sm:m-[10px] m-[10px] mb-4" :class="{ '': !showAll, 'flex': showAll}">
        <div class="sm:min-w-48 sm:h-48 w-28 h-28 flex flex-col justify-center items-center mx-auto">
          <img class="icon w-10 sm:w-20 h-20 items-center" src="/assets/icons/weather-icon.svg" alt="Project Icon" />
          <h3 class="text-center">Погода</h3>
          <a href="" target="_blank" class="border-b-2 hover:text-teal-500">View on github</a>
        </div>
        <div class="text-lg pl-3 w-full">
          <!-- Описание проекта 4 -->
          <div class="highlight">
            {{ getFirstSentence(project4.details, project4.showAll) }}
          </div>
          <button @click="toggleDescription('project4')" class="rounded-large ease-in-out hover:scale-110 delay-150 duration-300 p-1 text-blue-400 hover:text-teal-500 hover:shadow-md shadow-white">{{ project4.showAll ? 'Скрыть' : 'Показать больше'  }}</button>        </div>
      </div>

      <!-- Проект 5 -->
      <div class="bg-[#292f36fa] rounded-xl p-[10px] sm:m-[10px] m-[10px] mb-4" :class="{ '': !showAll, 'flex': showAll}" >
        <div class="sm:min-w-48 sm:h-48 w-28 h-28 flex flex-col justify-center items-center mx-auto">
          <img class="icon w-10 sm:w-20 h-20 items-center" src="/assets/icons/landing-icon.svg" alt="Project Icon" />
          <h3 class="text-center">Лэндинг</h3>
          <a href="https://github.com/lYorktownl/repair-design.git" target="_blank" class="border-b-2 hover:text-teal-500">View on github</a>
        </div>
        <div class="text-lg pl-3 w-full">
          <!-- Описание проекта 5 -->
          <div>
            {{ getFirstSentence(project5.details, project5.showAll) }}
          </div>
          <button @click="toggleDescription('project5')" class="rounded-large ease-in-out hover:scale-110 delay-150 duration-300 p-1 text-blue-400 hover:text-teal-500 hover:shadow-md shadow-white">{{ project5.showAll ? 'Скрыть' : 'Показать больше'  }}</button>        </div>
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project1: {
        details: "Мой первый опыт работы с React, первое знакомство с фреймворками, библиотеками, понятием SPA и компонентным подходом.Познакомился с системой контроля версий Git. Верстал по макету с тз для элементов списка задач, а так же пощупал, что такое react hooks и как они работают.",
        showAll: false // флаг, показывающий, развернуто описание или нет
      },
      project2: {
        details: " Первый полностью самостоятельный проект на Vue3 + vite и TailwindCSS. После реакта, захотелось для себя попробовать еще какой-нибудь фрэймвор, выбирая между Angular и Vue,  мой выбор остановился на последнем, силу большей мобильности и гибкости настроек, к тому же мне понравилась идея однофайловых компонентов и новый синтаксис Vue3. Неожиданно главным вызовом для меня стал выбор дизайна и цветовой схемы для проекта. С этим вызовом мне помогал справляться TailwindCSS. Конечно у него есть свои плюсы и минусы: из плюсов мне понравилось, что не нужно придумывать миллион имен для каждого элемента, ведь теперь ты можешь напрямую работать с каждым из них, много предустановленных CSS шаблонов, что сильно экономит время. Из минусов можно отметить, что немного засоряются сами компоненты, когда необходимо прописать много стилей, от части эту проблему решает расширение, которое сворачивает class=. Но от старого доброго css все равно никуда не деться.",
        showAll: false
      },
      project3: {
        details: "Описание проекта 2",
        showAll: false
      },
      project4: {
        details: "Описание проекта 2",
        showAll: false
      },
      project5: {
        details: "Это был один из первых этапов погружения в веб-разработку. Узнал про подключаемые стили, и про работу с разными формами и кнопками. Получил базовые навыки работы со стилями",
        showAll: false
      },
      
    };
  },
  methods: {
    getFirstSentence(details, showAll) {
      const sentences = details.split(". "); 
      if (showAll) {
        return details; 
      } else {
        return sentences[0] + ". "; 
      }
    },
    toggleDescription(project) {
      this[project].showAll = !this[project].showAll; // Переключаем флаг для соответствующего проекта
      this.showAll = Object.values(this.$data).some(project => project.showAll); // Обновляем значение переменной showAll на основе состояния всех проектов
    }
  }
};
</script>

<style scoped></style>
<template>
  <div class="pl-3 xl:ml-10 xl:w-3/4  relative text-white ">
    <h1 class="text-xl sm:text-[50px] sm:mt-4 mt-5 font-semibold font-kufam text-[#98F9EB] gt:absolute sm:top-5 sm:left-4  p-3  ">
      Немного обо мне
    </h1>
    <div class="absolute top-0 right-0">
      <Navbar />
    </div> 

    <div class="block p-1 xl:mt-[150px] xl:pt-0 mt-0 pt-28 mx-3 leading-relaxed snap-always snap-center"> 

                                  <!-- oblojka !-->
      
        <div class=" flex h-auto"> 
          <h2 class="text-2xl  font-opensans italic xl:w-auto mr-auto">
          <p class="text-4xl tracking-wide mb-10 font-kufam leading-[50px]">Привет,<br>меня зовут<span class="text-teal-500 font-semibold"> Никита</span><br> я фронтенд-разработчик <br> с большой тягой к новым
          знаниям&#x1F525;</p>
          </h2>
          <ul class="bg-[#1a1e23] min-w-fit h-fit p-3 rounded-large">
            <li><span class="text-[30px] font-extrabold text-teal-500">many</span> hard skills</li>
            <li><span class="text-[30px] font-extrabold text-teal-500 ">6</span> programming lang</li>
            <li><span class="text-[30px] font-extrabold text-teal-500">just</span> good guy</li>
            <li><span class="text-[30px] font-extrabold text-teal-500">5</span> personal projects</li>
          </ul>
        </div>

                          <!-- block s tekstom !-->


        <div class="bg-[#292f36f3] font-nunito  rounded-large p-3 text-lg "> 
          <div> 
            <p class="text-lg">
              Мой путь в веб-разработке начался еще со школы, когда я только начинал знакомиться с веб
              интерфейсом и HTML. Тогда еще не было таких замечательных вещей, как React и Vue, к примеру,
              но мне уже тогда полюбился фронтенд. И с тех пор я полностью погрузился в увлекательный мир
              создания интерактивных и красочных веб-приложений.
              
            </p>
            <h2 class="text-xl mt-5">&#128187; Почему именно фронтенд?</h2>
            <p class="text-lg">
              Выбор фронтенда для меня стал результатом стремления к непосредственному визуальному
              воплощению идей. В этой области я нашел идеальное сочетание творчества и технической
              детализации.<br />Возможность немедленно видеть результат своей работы, работать с
              интерфейсом и логикой веб-приложений, а также активное сообщество фронтенд-разработчиков,
              делающее Интернет более удобным и функциональным, стали ключевыми моментами, определившими
              мой выбор этого направления.
            </p>
          </div>
        

                  <!-- second block -->

        <div class="block">
          <h2 class="text-xl mt-5">&#x1F4A1; Обучение</h2>
          <ul class="list-disc list-inside text-lg">
            <li class="block">
              <h4>Skillfactory</h4>
              <span>2019-2020</span>
              <p></p>
            </li>
            <li>
              <h4>НГУЭУ, фундаментальная информатика и информационные технологии</h4>
              <span>2019-н.в</span>
              <p>4 курс</p>
            </li>
          </ul>
          <div class="mt-5">
            <h2 class="text-xl">&#x1F9F0; Мой стэк технологий</h2>
            <ul class="list-disc list-inside text-lg">
              <li>HTML, CSS, JavaScript</li>
              <li>
                Фреймворки и библиотеки: React, Vue3, Tailwind, а также поверхностное знакомство с
                Angular, bootstrap, semainticUI
              </li>
              <li>Системы контроля версий: Git</li>
              <li>Инструменты сборки: Webpack, Vite</li>
            </ul>
          </div>
        </div>
        <h2 class="text-xl">&#x1F3AF;Моя миссия</h2>
        <p class="text-lg">
          Моя цель — не просто писать код, а создавать эффективные и элегантные решения для
          пользователей. В моем портфолио вы найдете примеры моих проектов, которые отражают мою
          преданность качественной веб-разработке. <br />
          Спасибо за посещение моего портфолио! Давайте вместе создавать удивительные веб-приложения.
        </p>
      </div>
    </div>
    <div class="w-fit botom-0 right-1 absolute">
      <Footer />
    </div>
  </div>
</template>
<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';


</script>
<style>

</style>

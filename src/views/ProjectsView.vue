<template>
  <div class="pt-14 xl:ml-10 xl:w-3/4 relative">
    <h1 class="text-xl sm:text-5xl mt-5 text-center font-semibold font-nunito gt:absolute sm:top-5 sm:left-20">My pet-projects</h1>
    <div class="mt-10 pb-16">
      <!-- здесь будут карточки проектов -->
      <Projects />
    </div>
    <div class="absolute top-0 sm:right-0 right-20">
      <Navbar />
    </div>
    <div class="w-fit right-0 absolute">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'
import Projects from '../components/Projects.vue'
</script>

<style lang="scss" scoped>
// .bgrnd{
//   background: rgb(63,94,251);
//   background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
//   opacity: 100%;

//}
.bgrnd {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>

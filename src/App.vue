<template>
  <div class="sm:mx-20 relative xl:flex">
    <div class="xl:sticky xl:top-[32px] h-fit">
      <SideCard />
    </div>

    <RouterView />
  </div>
</template>

<script setup>
import SideCard from './components/SideCard.vue'
</script>

<style lang="scss" scoped></style>

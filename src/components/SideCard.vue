<template>
  <div class="sidebar border-2 mb-4  xl:w-64 w-auto">
    <div class="flex justify-center m-7">
      <img class="h-60  m-5 " src="../assets/avatar.jpg" alt="my photo" />
    </div>
    <hr class="w-3/4 m-auto " />
    <div class="m-3 flex justify-center">
      <ul class="font-bold ">
        <li class="flex text-lg">
          <img src="../assets/icons/location.svg" class="w-10" />Novosibirsk
        </li>
        <li class="flex text-lg"><img src="../assets/icons/badge.svg" class="w-10" />23 y.o</li>
        <li class="flex text-lg">
          <img src="../assets/icons/telegram.svg" class="w-7 ml-[5px]" /><a
            :href="'https://t.me/N0tAlone'"
            target="_blank"
            class="pl-2 no-underline hover:underline "
            >My Telegram</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.sidebar {
  height: 600px;
  
}
</style>

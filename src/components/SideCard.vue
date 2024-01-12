<template>
  <div class="sidebar border-2 border-blue-500 w-64">
    <div class="flex justify-center m-7">
      <img class="h-80 rounded-large m-5 ring" src="../assets/avatar.jpg" alt="my photo" />
    </div>
    <hr class="w-3/4 m-auto bg-blue-500 border-blue-500" />
    <div class="m-3 flex justify-center">
      <ul class="font-bold text-slate-200">
        <li class="flex text-lg">
          <img src="../assets/icons/location.svg" class="w-10" />Novosibirsk
        </li>
        <li class="flex text-lg"><img src="../assets/icons/badge.svg" class="w-10" />23 y.o</li>
        <li class="flex text-lg">
          <img src="../assets/icons/telegram.svg" class="w-7 ml-[5px]" /><a
            :href="'https://t.me/N0tAlone'"
            target="_blank"
            class="pl-2 no-underline hover:underline hover:text-blue-500"
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
  background-color: #002b683f;
}
</style>

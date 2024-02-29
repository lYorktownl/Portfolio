<template>
  <div class="block xl:block sm:flex sidebar xl:min-h-[450px] xl:mt-[160px] double-border mb-4 xl:w-64 w-auto rounded-tl-[150px] rounded-br-[150px] text-white">
    <div class="flex  xl:justify-center sm:justify-start justify-center m-7 sm:ml-auto">
      <img class="xl:h-auto h-48 ml-[40px] rounded-[100%] outline outline-4 outline-teal-500" src="/assets/avatar.jpg" alt="my photo" />
    </div>
    <hr class="w-3/4 m-auto hidden xl:visible" />
    <div class="m-3 flex justify-center my-auto sm:mr-auto">
      <ul class="font-bold max-h-36">
        <li class="flex text-lg">
          <img src="/assets/icons/location.svg" class="w-10" />Novosibirsk
        </li>
        <li class="flex text-lg"><img src="/assets/icons/badge.svg" class="w-10" />23 y.o</li>
        <li class="flex text-lg">
          <img src="/assets/icons/telegram.svg" class="w-7 ml-[5px]" /><a
            :href="'https://t.me/N0tAlone'"
            target="_blank"
            class="pl-2 no-underline hover:underline"
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
  position: relative;
  padding: 20px;
  background-color: #292f36f3;
  border: 3px solid white;
}

.sidebar::before {
  content: '';
  position: absolute;
  top: -7px;
  left: -7px;
  right: 0;
  bottom: 0;
  border-left: 5px solid #00F4D0;
  border-top: 6px solid #00F4D0;
  border-top-left-radius: 154px;
  z-index: -1;
}
</style>

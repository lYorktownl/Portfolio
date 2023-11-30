<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="flex h-fit -ml-92 p-3  bg-slate-200 rounded-tr-large rounded-bl-large ">
        <ul>
            <li class="mx-4 space-x-4 " >
                <RouterLink class="px-4 py-2 border-2 border-blue-500 rounded-full hover:bg-blue-400 hover:text-white hover:transition-all hover:duration-1000 dark:text-white" to="/"> Home </RouterLink>
                <RouterLink class="px-4 py-2 border-2 border-blue-500 rounded-full hover:bg-blue-400 hover:text-white hover:transition-all hover:duration-1000 dark:text-white" to="/about"> About </RouterLink>
                <RouterLink class="px-4 py-2 border-2 border-blue-500 rounded-full hover:bg-blue-400 hover:text-white hover:transition-all hover:duration-1000 dark:text-white" to="/projects"> Projects </RouterLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
 //import router from '../router'

</script>

<style lang="scss" scoped>

</style>

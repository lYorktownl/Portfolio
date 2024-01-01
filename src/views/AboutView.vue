<template>
  <div class="backgrnd border-2 border-blue-500 pt-14 ml-10 w-3/4 rounded-t-large relative">
    <h1 class="ml-3 -mt-8">This is an about page</h1>
    <div class="absolute top-0 right-0">
      <Navbar />
    </div>
    <div>
      <p class="font-nunito" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
         voluptas libero possimus eum atque illum veritatis voluptate consectetur 
         animi rerum laudantium illo nulla hic molestiae pariatur maiores unde ab assumenda?</p>
    </div>
  </div>
</template>
<script setup>
import Navbar from '../components/Navbar.vue'
</script>
<style>
.backgrnd{
  background-color: #002b683f;
}
</style>

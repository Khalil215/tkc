<template>
  <div class="w-fit ">
    <RouterLink :to="{name: 'home'}">
      <img
        className="ml-8 mt-3 md:mt-6 w-[200px] h-[150px] md:w-[250px] md:h-[200px] object-cover"
        src="../assets/logo.JPG"
        alt=""
      />
    </RouterLink>
      

  </div>

  <div class="w-full bg-theme mt-4 text-center text-white py-1">
    <i class="fa-solid fa-bell"></i> Notification
  </div>
  <div class="md:mx-[15%] mx-[5%]">
    <hr class="border-2 border-theme my-2" />
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>

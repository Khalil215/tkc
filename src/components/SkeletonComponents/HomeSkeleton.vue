<template>
  <div>
    <Skeletonn class="mt-8 w-[100%] h-[90vh]"/>

    <div class="md:mx-[15%] mx-[5%] mt-4">

      <div class="mt-8 flex flex-wrap justify-around">
        <Skeletonn class=" h-48 w-52 md:w-64 md:h-60 shadow-2xl rounded-3xl justify-self-center mb-8"/>
        <Skeletonn class=" h-48 w-52 md:w-64 md:h-60 shadow-2xl rounded-3xl justify-self-center mb-8"/>
        <Skeletonn class=" h-48 w-52 md:w-64 md:h-60 shadow-2xl rounded-3xl justify-self-center mb-8"/>
        <Skeletonn class=" h-48 w-52 md:w-64 md:h-60 shadow-2xl rounded-3xl justify-self-center mb-8"/>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import Skeletonn from "./Skeletonn.vue";
</script>

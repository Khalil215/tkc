<template>
  <main class="md:mx-[15%] mx-[5%] relative">
    <div class="grid md:grid-cols-3 gap-10 mt-10">
      <div class="md:col-start-1 md:col-end-2">
        <Skeletonn class="w-[290px] h-[250px] shadow-2xl rounded-3xl" />
      </div>

      <div class="md:col-start-2 md:col-end-4 w-full  mt-10">
        <Skeletonn class=" mb-4 mx-auto w-1/3"/>
        <ul class="w-full md:mt-14 ">
          <li
            class="w-full flex justify-between mb-4"
          >
            <Skeletonn class="w-1/2"/>
            <Skeletonn class="w-1/2"/>
          </li>
          <li
            class="w-full flex justify-between mb-4"
          >
            <Skeletonn class="w-1/2"/>
            <Skeletonn class="w-1/2"/>
          </li>
          <li
            class="w-full flex justify-between mb-4"
          >
            <Skeletonn class="w-1/2"/>
            <Skeletonn class="w-1/2"/>
          </li>
          
        </ul>
      </div>
    </div>
    <div
      class=" flex overflow-x-scroll gap-6 mt-10 scrollbar-track-black scrollbar-thumb-theme scrollbar-thin p-5"
    >
      
      <Skeletonn class="w-[290px] h-[250px] shadow rounded-3xl min-h-0"/>
      <Skeletonn class="w-[290px] h-[250px] shadow rounded-3xl min-h-0"/>
     
    </div>
    
    <div class="flex justify-end mr-10 mt-5">
      <div class=" flex flex-col gap-3 items-center ">
        
        <Skeletonn class="w-32"/>
        <div class="flex justify-evenly w-full">
          <Skeletonn class="w-10"/>
          <Skeletonn class="w-10"/> 
        </div>
      </div>     
    </div>

  </main>
</template>

<script setup>
import Skeletonn from "./Skeletonn.vue";
</script>

<template>
  <div class="mt-10 bg-black text-white">
    <hr class="border-2 border-theme mt-4 rounded" />
    <div class="display md:flex grid gap-5 md:justify-between mt-4  bg-opacity-30 rounded p-3">
      <div class="grid gap-2">
        <Skeletonn class="w-[100px]"/>
        <Skeletonn class="w-[100px]"/>
        <Skeletonn class="w-[100px]"/>
        <Skeletonn class="w-[100px]"/>
      </div>
      <div class="grid gap-2">
        <Skeletonn class="w-1/3"/>
        <hr class="border-2 border-theme w-52 my-1 rounded" />
        <div class="flex md:justify-center gap-4 ml-4">
          <Skeletonn class="w-10"/>
          <Skeletonn class="w-10"/>
        </div>
      </div>
      <div class="grid gap-2 md:mr-2">
        <Skeletonn class="w-[100px]"/>
        <Skeletonn class="w-[100px]"/>
        <Skeletonn class="w-[100px]"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Skeletonn from "./Skeletonn.vue";
</script>

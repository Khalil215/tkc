<template>
  <div class="md:mx-[15%] mx-[5%] mt-4">
    <hr class="border-2 border-theme mb-3" />
    <p class="font-bold text-2xl md:text-3xl">Our Menu</p>
    <div class="mt-8 flex flex-wrap justify-between">
      <Menu @click="showItem" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import Menu from "./Menu.vue";

const router = useRouter();
const showItem = () => {

  router.push({ name: "item", params: {slug: 'Heloo'} });
};
</script>

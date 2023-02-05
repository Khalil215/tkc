<template>
  <body
    class="bg-[#eeeff1] w-screen h-screen overflow-y-scroll font-Montserrat font-medium overflow-x-hidden scrollbar scrollbar-track-black scrollbar-thumb-theme/80"
    id="layout"
  >
    <div class="mx-auto relative">
      <header>
        <Headr />
      </header>

      <RouterView/>
     

      <footer>
        <Footer />
      </footer>
    </div>
  </body>
</template>

<script setup>
import { RouterView } from "vue-router";
import Headr from "./components/Headr.vue";
import Footer from "./components/Footer.vue";
import { ref } from "vue";
import { useSanityClient } from "vue-sanity";
 
useSanityClient({
  projectId: "qk7bc22o",
  dataset: "production",
  apiVersion: "2023-02-01",
  useCdn: process.env.NODE_ENV === "production",
});
</script>

<style>
.page-enter-active, .page-leave-active{
  transition: 600ms ease all;
}

.page-enter-from, .page-leave-to{
  opacity: 0;
}
</style>
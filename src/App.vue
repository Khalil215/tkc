<script setup>
import { RouterView } from "vue-router";
import Headr from "./components/Headr.vue";
import Footer from "./components/Footer.vue";
Footer
</script>

<template>
  <body className="bg-[#eeeff1] w-screen h-screen overflow-y-scroll font-Montserrat font-medium overflow-x-hidden scrollbar scrollbar-track-black scrollbar-thumb-theme/80" id="layout">
    <div className=" mx-auto relative">

      <header>
        <Headr />
      </header>

      <RouterView />

      <footer>
        <Footer/>
      </footer>
    </div>
  </body>
</template>

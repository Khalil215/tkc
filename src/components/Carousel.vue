<template>
  <div class="mt-8">
    <CCarousel controls >
      <CCarouselItem>
        <img
          className=" w-[100%] h-[90vh] object-cover object-center"
          src="../assets/don.JPG"
          alt=""
        />
      </CCarouselItem>
      <CCarouselItem>
        <img
          className=" w-[100%] h-[90vh] object-cover object-center"
          src="../assets/do.JPG"
          alt=""
        />
      </CCarouselItem>
      <CCarouselItem>
        <img
          className=" w-[100%] h-[90vh] object-cover object-center"
          src="../assets/dons.JPG"
          alt=""
        />
      </CCarouselItem>
    </CCarousel>
  </div>
</template>

<script setup>
import { CCarousel, CCarouselItem } from "@coreui/vue";
import '@coreui/coreui/dist/css/coreui.min.css'
</script>

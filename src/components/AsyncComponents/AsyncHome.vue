<template>
  <div class="mt-3">
    <Splide
      aria-labelledby="menu-carousel"
      :options="options"
      :has-track="false"
    >
      <div class="relative">
        <SplideTrack>
          <SplideSlide v-for="carousel in data.carousel" :key="carousel._key">
            <img
              class=" w-[100%] h-[90vh] object-cover object-center"
              :src="imageUrlFor(carousel)"
              alt=""
            />
          </SplideSlide>
        </SplideTrack>
      </div>
    </Splide>
  </div>

  <div class="md:mx-[15%] mx-[5%] mt-4">
    <hr class="border-2 border-theme mb-3 rounded" />
    <p class="font-bold text-2xl md:text-3xl">Our Menu</p>
    <div class="mt-8 flex flex-wrap justify-around">
      <div v-for="menu in data.menu" :key="data.menu.title" @click="showItem(menu)"
        class="relative h-36 w-40 md:w-64 md:h-60 shadow-2xl rounded-3xl hover:cursor-pointer hover:scale-105 transition justify-self-center mb-8"
      >
        <img
          class=" w-full h-full object-cover object-center rounded-3xl"
          :src="imageUrlFor(menu.image)"
          alt=""
        />
        <div
          class="absolute top-0 left-0 w-full h-full z-10 rounded-3xl bg-gradient-to-t from-black opacity-80"
        ></div>
        <div class="flex justify-center">
          <p class="absolute bottom-0 pb-2 text-xl text-amber-100 z-20">
            {{menu.title}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import sanity from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import { useRouter } from "vue-router";



//For carousel
const options = {
  rewind: true,
  gap: "1rem",
  autoplay: true,
};

//Image Builder
const imageBuilder = imageUrlBuilder(sanity);
function imageUrlFor(source) {
  return imageBuilder.image(source);
}

//Redirect
const router = useRouter();
const showItem = (menu) => {
  router.push({ name: "item", params: {slug: menu.slug} });
};

//Data fetch
let data = ref({});
const homeGroq = "*[ _type=='home'][0]{...,menu[]->}"
const fetchData = async () => {
  try {
    data.value = await sanity.fetch(homeGroq);
    // console.log(data.value.menu)
    // show.value = true
  } catch (error) {
    console.log(error);
  }
};

const home = await fetchData();
</script>

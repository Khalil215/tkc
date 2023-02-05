<template >
  <main class="md:mx-[15%] mx-[5%] relative" >
    <div class="grid md:grid-cols-3 gap-10 mt-10">
      <div class="md:col-start-1 md:col-end-2">
        <img
          class="w-[290px] h-[250px] object-cover shadow-2xl rounded-3xl border-4 border-black"
          :src="imageUrlFor(data.image)"
          alt=""
        />
      </div>
      <PriceList :data="data"/>
    </div>
    <div class=" flex overflow-x-scroll gap-6 mt-10 scrollbar-track-black scrollbar-thumb-theme scrollbar-thin p-5">
      <img v-for="image in data.carousel"
        class=" w-[290px] h-[250px] object-cover shadow rounded-3xl min-h-0 "
        :src="imageUrlFor(image)"
        alt=""
      />
      
    </div>
    <Contact :data="data"/>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import sanity from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import Contact from "../Contact.vue";
import PriceList from "../PriceList.vue";

const route = useRoute()
const imageBuilder = imageUrlBuilder(sanity);

function imageUrlFor(source) {
  return imageBuilder.image(source);
}

let data = ref({});

const itemGroq = `*[ _type=='items' && title == '${route.params.slug}'][0]{..., prices[]->, extrasList[]->, whatsapp->, instagram->}`;

const fetchData = async () => {
  try {
    data.value = await sanity.fetch(itemGroq);
    // console.log(data.value);
    // show.value=true
  } catch (error) {
    console.log(error);
  }
};

const item = await fetchData();
</script>

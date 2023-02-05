<template>
  
    <div class="w-fit">
      
        <RouterLink :to="{ name: 'home' }">
            
              <img
                class="ml-8 mt-3 md:mt-6 w-[200px] h-[150px] md:w-[250px] md:h-[200px] object-cover"
                :src="imageUrlFor(data.image)"
                alt=""
              />
            
        </RouterLink>
     
    </div>


  <div class="w-full bg-theme mt-4 text-center text-white py-1">
    <i class="fa-solid fa-bell"></i> {{ data.message }}
  </div>
</template>

<script setup>
import { ref } from "vue";
import sanity from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import { RouterLink } from "vue-router";

const imageBuilder = imageUrlBuilder(sanity);

function imageUrlFor(source) {
  return imageBuilder.image(source);
}

let data = ref({});

const headerGroq = "*[ _type=='header'][0]";

const fetchData = async () => {
  try {
    data.value = await sanity.fetch(headerGroq);
    // console.log(data.value.image);
    // show.value=true
  } catch (error) {
    console.log(error);
  }
};


const head = await fetchData();
</script>

<!-- <style scoped>
.v-enter-active, .v-leave-active{
  transition: opacity 10s ease;
}

.v-enter-from, .v-leave-to{
  opacity: 0;
  transform: scale(0.8);
}
</style> -->
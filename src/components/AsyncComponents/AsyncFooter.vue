<template>
  <div class="mt-10 bg-black text-white">
    <hr class="border-2 border-theme mt-4" />
    <div
      class="display md:flex grid gap-5 md:justify-between mt-4  bg-opacity-30 rounded p-3"
    >
      <div class="grid gap-2">
        <p class="text-2xl font-bold text-theme mb-2 md:text-center">
          Contact Us
        </p>
        <p v-for="num in data.contact">{{ num.number }}</p>

        <div>
          <i class="fa-solid fa-location-dot mr-1"></i
          ><span>{{ data.location }}</span>
        </div>
        <div>
          <i class="fa-solid fa-truck"></i><span> Delivery available</span>
        </div>
      </div>
      <div class="grid gap-2">
        <p class="text-2xl font-bold text-theme mb-2 md:text-center">T.K.C</p>
        <p class="italic">{{ data.slogan }}</p>
        <hr class="border-2 border-theme w-52 my-1 rounded" />
        <div class="flex md:justify-center gap-4 ml-4">
          <a :href="data.instagram.url" target="_blank" class="hover:text-theme"
            ><i class="fa-brands fa-instagram text-2xl hover:cursor-pointer"></i
          ></a>
          <a :href="data.whatsapp.url" target="_blank" class="hover:text-theme"
            ><i class="fa-brands fa-whatsapp text-2xl hover:cursor-pointer"></i
          ></a>
        </div>
      </div>
      <div class="grid gap-2 md:mr-2">
        <p class="text-2xl font-bold text-theme mb-2 md:text-center">
          Working Hours
        </p>
        <p>{{ data.days }}</p>
        <p>{{ data.hours }}</p>
      </div>
    </div>
    <div
      class="text-center font-bold tracking-wider md:text-xl pt-5 p-3 text-theme"
    >
      &copy;2020 TheKitchenCompany. All rights Reserved.
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import sanity from "../../client";

let data = ref({});
const footerGroq =
  "*[ _type=='footer'][0]{...,contact[]->, instagram->, whatsapp->}";
const fetchData = async () => {
  try {
    data.value = await sanity.fetch(footerGroq);
    // console.log(data.value);
  } catch (error) {
    console.log(error);
  }
};

const footer = await fetchData();
</script>

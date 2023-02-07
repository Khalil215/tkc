<template>
  <div class="md:col-start-2 md:col-end-4 w-full  mt-10">
    <p class="text-2xl font-bold mb-4 text-center">Pricelist <i class="fa-solid fa-money-bill"></i></p>
    <div>
      <div v-if="data.prices">
        <ul class="w-full md:mt-14 font-bold">
          <li v-for="price in data.prices" class="w-full flex justify-between mb-4 md:text-lg">
            <span class="tracking-wide w-[70%]">{{price.item}}</span
            ><span class="tracking-tighter w-[30%]"> ------  &#8358;{{price.price}} </span>
          </li>
        </ul>
      </div>
      <div v-else class="text-center text-xl md:text-2xl text-theme font-bold my-10 animate-bounce tracking-wide">
        Sorry, our prices will soon be updated <i class="fa-solid fa-face-smile-beam"></i> <i class="fa-solid fa-heart"></i>
      </div>
    </div>
    <div v-if="data.extras">
      <p class="text-2xl font-bold mt-10 text-center">{{data.extras}}</p>
      <ul class="w-full font-bold mt-5">
        <li v-for="price in data.extrasList" class="w-full flex justify-between mb-4 md:text-lg">
          <span class="tracking-wide w-[70%]">{{price.item}}</span
          ><span class="tracking-tighter w-[30%]"> ------ &#8358;{{price.price}} </span>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  props: ['data'],
}
</script>
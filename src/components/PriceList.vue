<template>
  <div className="md:col-start-2 md:col-end-4 w-full  mt-10">
    <p class="text-2xl font-bold mb-4 text-center">Pricelist</p>
    <ul class="w-full md:mt-14 font-bold">
      <li v-for="price in data.prices" class="w-full flex justify-between mb-4">
        <span class="tracking-wide">{{price.item}}</span
        ><span class="tracking-tighter"> ----------- &#8358;{{price.price}} </span>
      </li>
    </ul>
    <div v-if="data.extras">
      <p class="text-2xl font-bold mt-10 text-center">{{data.extras}}</p>
      <ul class="w-full font-bold">
        <li v-for="price in data.extrasList" class="w-full flex justify-between mb-4">
          <span class="tracking-wide">{{price.item}}</span
          ><span class="tracking-tighter"> ----------- &#8358;{{price.price}} </span>
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
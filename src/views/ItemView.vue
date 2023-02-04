<template >
  
  <Suspense>
    <AsyncItem/>
    <template #fallback>
      <p>Loading....</p>
    </template>
  </Suspense>
</template>

<script setup>
import PriceList from '../components/PriceList.vue';
import Contact from '../components/Contact.vue';
import AsyncItem from '../components/AsyncComponents/AsyncItem.vue';
</script>
<script>
export default {
    mounted() {
    },
    components: { AsyncItem }
}
</script>
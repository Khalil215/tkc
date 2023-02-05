<template >
  
  <Suspense>
    <AsyncItem/>
    <template #fallback>
      <ItemSkeleton/>
    </template>
  </Suspense>
</template>

<script setup>
import ItemSkeleton from '../components/SkeletonComponents/ItemSkeleton.vue';
import AsyncItem from '../components/AsyncComponents/AsyncItem.vue';
</script>
<script>
export default {
    mounted() {
    },
    components: { AsyncItem }
}
</script>
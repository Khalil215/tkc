<template>
  <Suspense>
    <AsyncFooter />
    <template #fallback>
      <FooterSkeleton/>
    </template>
  </Suspense>
</template>

<script setup>
import AsyncFooter from './AsyncComponents/AsyncFooter.vue';
import FooterSkeleton from './SkeletonComponents/FooterSkeleton.vue';

</script>

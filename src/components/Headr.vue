<template>
  <Suspense>
    <AsyncHeader />
    <template #fallback>
      <HeaderSkeleton/>
    </template>
  </Suspense>
  
  <div class="md:mx-[15%] mx-[5%]">
    <hr class="border-2 border-theme mt-2" />
  </div>
</template>

<script setup>
import AsyncHeader from "./AsyncComponents/AsyncHeader.vue";
import HeaderSkeleton from "./SkeletonComponents/HeaderSkeleton.vue";
</script>

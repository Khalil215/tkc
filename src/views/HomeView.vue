<template>
  <main>
    <Suspense>
      <AsyncHome />
      <template #fallback> <HomeSkeleton /> </template>
    </Suspense>
    
  </main>
</template>

<script setup>
import AsyncHome from "../components/AsyncComponents/AsyncHome.vue";
import HomeSkeleton from "../components/SkeletonComponents/HomeSkeleton.vue";
</script>

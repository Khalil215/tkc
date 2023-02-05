<template>
  <div class="text-3xl font-bold my-48 grid justify-center items-center text-center">
    <p class="">Ooops.... <i class="fa-solid fa-face-grin-beam-sweat"></i></p>
    <p class=" mt-3">Wrong Page!</p>
    <RouterLink class="text-theme animate-bounce mt-3" :to="{name: 'home'}"><i class="fa-solid fa-cheese"></i> Go to home page <i class="fa-solid fa-burger"></i></RouterLink>
  </div>
</template>

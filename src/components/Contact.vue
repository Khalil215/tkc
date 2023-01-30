<template>
  <div className="flex justify-end mr-10 mt-5">
      <div className=" flex flex-col gap-3 items-center ">
        
        <p class="font-bold tracking-widest">
          Contact to Pre-Order
          <span><i class="fa-solid fa-arrow-turn-down text-theme"></i></span>
        </p>
        <div class="flex justify-evenly w-full">
          <div class="relative hover:cursor-pointer">
            <i class="fa-brands fa-instagram text-4xl text-red-600"></i>
            <span class="absolute -top-1 -right-1 flex h-3 w-3">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-3 w-3 bg-red-500"
              ></span>
            </span>
            
          </div>
          <div class="relative hover:cursor-pointer">
            <i class="fa-brands fa-whatsapp text-4xl text-green-500"></i>
            <span class="absolute top-0 right-0 flex h-3 w-3">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-3 w-3 bg-green-500"
              ></span>
            </span>
          </div>
          
        </div>
        
      </div>
      
    </div>
</template>

<script setup>

</script>

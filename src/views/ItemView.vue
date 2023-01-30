<template >
  <main class="md:mx-[15%] mx-[5%]" >
    <div className="grid md:grid-cols-3 gap-10 mt-10">
      <div className="md:col-start-1 md:col-end-2">
        <img
          className="w-[290px] h-[250px] object-cover shadow-lg rounded-3xl"
          src="../assets/logo.JPG"
          alt=""
        />
      </div>
      <PriceList/>
    </div>
    <div className="flex overflow-x-scroll gap-6 mt-10 scrollbar-track-black scrollbar-thumb-theme scrollbar-thin p-5">
      <img
        className="w-[290px] h-[250px] object-cover shadow rounded-3xl"
        src="../assets/logo.JPG"
        alt=""
      />
      <img
        className="w-[290px] h-[250px] object-cover shadow rounded-3xl"
        src="../assets/logo.JPG"
        alt=""
      />
      <img
        className="w-[290px] h-[250px] object-cover shadow-lg rounded-3xl"
        src="../assets/logo.JPG"
        alt=""
      />
      <img
        className="w-[290px] h-[250px] object-cover shadow rounded-3xl"
        src="../assets/logo.JPG"
        alt=""
      />
      <img
        className="w-[290px] h-[250px] object-cover shadow rounded-3xl"
        src="../assets/logo.JPG"
        alt=""
      />
      <img
        className="w-[290px] h-[250px] object-cover shadow rounded-3xl"
        src="../assets/logo.JPG"
        alt=""
      />
      <img
        className="w-[290px] h-[250px] object-cover shadow rounded-3xl"
        src="../assets/logo.JPG"
        alt=""
      />
      <img
        className="w-[290px] h-[250px] object-cover shadow rounded-3xl"
        src="../assets/logo.JPG"
        alt=""
      />
      <img
        className="w-[290px] h-[250px] object-cover shadow rounded-3xl"
        src="../assets/logo.JPG"
        alt=""
      />
    </div>
    <Contact />
  </main>
</template>

<script setup>
import PriceList from '../components/PriceList.vue';
import Contact from '../components/Contact.vue';
</script>
<script>
export default {
  mounted () {
    
  },
}
</script>
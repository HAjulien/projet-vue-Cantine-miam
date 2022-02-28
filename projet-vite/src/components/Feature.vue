<template>


<!-- component -->
<main class="py-12 md:px-20 sm:px-14 px-6 ">
  
  <div class="mt-6 md:flex space-x-6 ">
    <div class="shadow-md">
      <img :src="require(`../assets/images/${image}`)">
      <div class="px-4">
        <h1 class="mt-3 text-gray-800 text-2xl font-bold my-2">{{ titre }}></h1>
        <p class="text-gray-700 mb-2">
            {{paragraphe}}
        </p>
        
        <div class="flex justify-between items-center mt-4 pb-2">
          <span class="mb-2 text-gray-800 font-bold">Read more</span>
          <button class="p-2 pl-5 pr-5 bg-transparent border-2 border-green-500 text-green-500  rounded-lg hover:bg-green-500 hover:text-gray-100 focus:border-4 focus:border-green-300">{{ button }}</button>
        </div>

        </div>
      </div>
    </div>


</main>

</template>

<script>
export default {
    name: 'Feature',

    props: {

      titre:String,
      image:String,
      button:String,
      paragraphe:String,

    }
}
</script>

<style lang="scss">

</style>
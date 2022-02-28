<template>


<!-- component -->
  
  <div class=" md:flex space-x-6 m-5 dark:bg-gray-500 ">
    <div class="shadow-md">
      <div class="p-4">
        <h1 class="mt-3 text-gray-800 text-2xl font-bold my-2">{{title}}</h1>
        <p class="text-gray-700 mb-2  dark:text-slate-300">{{ paragraphe }}</p>
        
        <div class="flex justify-between items-center mt-4 pb-2">
          <span class="mb-2 text-gray-800 font-bold dark:text-slate-300">En savoir plus sur l'équipe : </span>
          <button class="p-2 pl-5 pr-5 bg-transparent border-2 border-green-500 text-green-500  rounded-lg hover:bg-green-500 hover:text-gray-100 focus:border-4 focus:border-green-300">{{ button }} </button>
        </div>
        <img v-bind:src="'src/assets/images/' + image" />

        </div>
      </div>
    </div>

</template>

<script>
export default {
    name: 'Feature',

    props: {

      title:String,
      image:String,
      paragraphe:String,
      button:String,

    }
}
</script>

<style lang="scss">

</style>
<template>


<!-- component -->
  
  <div class=" card md:width-[45vw] cards flex md:inline-flex space-x-6 m-2 mb-7 dark:bg-gray-500  inline-block	border-solid border-2 bg-gray-200	">
    <div class="shadow-md">
      <div class="p-4 text-lg">
        <h1 class="mt-3 text-2xl text-center font-bold my-2 dark:text-black">{{title}}</h1>
        <p class="text-gray-800 mb-2 indent-5 dark:text-slate-200">{{ paragraphe }}</p>
        
        <div class="flex justify-between items-center mt-4 pb-2">
          <span class="mb-2 text-gray-800 font-bold dark:text-slate-200">Découvrir: </span>
          <button class="p-1 pl-2 pr-2 bg-transparent border-2 border-green-500 text-green-500  rounded-lg hover:bg-green-500 hover:text-gray-200 focus:border-4 focus:border-green-300">{{ button }} </button>
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

<style lang="scss" scoped>
@media screen and (min-width:768px){

  .card{
    width: 45vw;
    display: inline-block;
  }

}



</style>
<template>
<!-- component -->
  
  <div class=" card md:width-[45vw] cards md:inline-flex space-x-6 m-2 mb-12 dark:bg-gray-500  inline-block	border-solid border-2 bg-gray-100	rounded-xl  hover:border-4 hover:border-amber-300 	">

    <div class="shadow-md rounded-xl ">
      <div class="p-2 text-lg">

        <h1 class=" text-2xl flex items-center justify-center text-center md:h-24 font-extrabold my-2 dark:text-black">{{title}} </h1>

        <!-- <img v-bind:src="'src/assets/images/' + image" class="mb-3 rounded-xl"/> -->
        <img :src="image" :alt="altImage" class="md:h-56 mx-auto rounded-lg "  >

        <p class="text-gray-900 mb-6 mt-8  indent-5 dark:text-slate-100" v-html="paragraphe.substring(0,8000)"></p>

        <div class="flex justify-between items-center mt-4  pb-2">
          <span class="mb-2 text-gray-800 font-bold dark:text-slate-100">Découvrir: </span>
          
          <router-link :to="{path: chemin }" class="router" >
            <button class=" mb-3 min-w-[120px] p-1 pl-2 pr-2 bg-transparent border-2 border-green-600 dark:border-green-300 text-green-600 dark:text-green-100  rounded-lg hover:bg-green-600 dark:hover:bg-green-300 hover:text-gray-200 dark:hover:text-black focus:border-4 focus:border-green-300">
              {{ button }}
            </button>
          </router-link>  
        </div > 
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
    altImage:String,
    paragraphe:String,
    button:String,
    chemin:String,

  }
}
</script>

<style lang="scss" scoped>

.card{
  transition: all .3s linear;
}
.card:hover{
  transition: all .2s linear;  
}

button{
  transition: all .3s linear;  
}


@media screen and (min-width:768px){

  .card{
    width: 45vw;
    display: inline-block;
  }

}

@media screen and (min-width:766px) and (max-width:939px) {
  p{
    height: 250px;
  }
  span{
    display: none;
  }
  .router{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s ease-in-out;
}
  button{
    width: 150px;
  }

}
@media screen and (min-width:940px) and (max-width:1300px) {
  p{
    height: 200px;
  }

}


@media screen and (min-width:1301px) {
  p{
    height: 180px;
  }

}


</style>
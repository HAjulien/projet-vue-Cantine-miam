<template>

  <ul class=" md:hidden navigation flex items-center justify-between bg-red-200 p-1" >
    <li class="flex-1 ">
      <router-link to="/" class="text-center block " >click&collect </router-link>
    </li>
    <li class="flex-1 ">
      <router-link to="/" class="text-center block  " > Horaires</router-link>
    </li>
    <li class="flex-1">
      <div class="text-center block  " > 

        <button 
        class=" button text-white font-bold py-2 px-4 rounded"
        @click="isActive = !isActive"
        :class="[isActive ? 'bg-pink-500' : 'bg-lime-500']"
        >{{ isActive ? 'x' : 'menu' }}
        </button>
        <transition name="fade">
          <div v-show="isActive" class="test block" >
            <button 
            class=" button text-white font-bold py-2 px-4 rounded block m-auto mt-6 mb-6	"
            @click=" isActive = !isActive"
            :class="[isActive ? 'bg-pink-500' : 'bg-pink-500']"
            >x
            </button>
              test
          </div>
        </transition>
          </div>
    </li>

  </ul>


</template>

<script>
export default {
  name: 'Tapbar',
      data() {

        return {
            isActive:false,

        }
    },
}
</script>

<style lang="scss" scoped>


  .navigation{
    position: sticky;
    bottom: 0%;
    width: 100vw;
    z-index: 10;
  }
.test{
    position: fixed;
    background-color: aqua;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
  
</style>
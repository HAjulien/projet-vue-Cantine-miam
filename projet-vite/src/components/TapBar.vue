<template>

  <ul class=" md:hidden navigation flex items-center justify-between bg-gray-700 text-white dark:bg-gray-200 dark:text-gray-700  p-1" >
    <li class="flex-1 ">
      <router-link to="/" class="text-center block " >click&collect </router-link>
    </li>
    <li class="flex-1 ">
      <router-link to="/about" class="text-center block  " > 
      <fa :style="{ height: '35px'}" icon="clock" />
      </router-link>
    </li>
    <li class="flex-1">
      <div class="text-center block  " > 

        <button 
        class=" button text-white font-bold py-2 px-4 rounded-full"
        @click="isActive = !isActive"
        :class="[isActive ? 'bg-pink-500' : 'bg-gray-400']"
        >{{ isActive ? 'x' : 'menu' }}
        </button>
        <transition name="fade">
          <div v-show="isActive" class="test block" @click=" isActive = !isActive" >
            <button 
            class=" button text-white bold py-2 px-4 rounded-full block m-auto mt-6 mb-6 h-12	w-12 text-2xl"
            @click=" !isActive"
            :class="['bg-pink-500']"
            >x
            </button>
               <router-link to="/" @click="!isActive" class="text-3xl ">Accueil</router-link >
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
    width: 100vw;
    z-index: 10;
  }
.test{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.473);
    backdrop-filter: blur(5px);
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-from{
opacity: 0;
}











.router-link-active{
    color: $green;
    font-weight: 800;
    transition: all .3s linear;
}
</style>
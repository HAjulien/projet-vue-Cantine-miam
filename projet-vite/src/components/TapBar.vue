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
          <div v-show="isActive" class="menu " @click=" isActive = !isActive" >
            <button 
            class=" button text-white bold py-2 px-4 rounded-full block m-auto mt-12 h-12	w-12 text-2xl"
            @click=" !isActive"
            :class="['bg-pink-500']"
            >x
            </button>
              <ul class="h-full flex flex-col justify-start items-center mt-10 ">
                <li class="mb-10 links"
                 v-for="linkmenu in linksMenu" v-bind:key="linkmenu.id ">
                  <router-link :to="{path:linkmenu.chemin}" @click="!isActive" class="text-3xl ">{{ linkmenu.page }}</router-link >
                </li>
              </ul>
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
            linksMenu: [
              {chemin:'/', page:"Accueil", id: 1},
              {chemin:'/menu', page: "Menu/tarif", id: 2},
              {chemin:'/about', page: "l'équipe", id: 3},
              {chemin:'/collect', page: "Click/Collect", id: 4},
              {chemin:'/cafe', page: "Câfé", id: 5},
              {chemin:'/horaire', page: "Horaire/lieu", id: 6},
              {chemin:'/contact', page: "Contact", id: 7},
            ],

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
.menu{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(11px);
}

.links{
    color: $principale;
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
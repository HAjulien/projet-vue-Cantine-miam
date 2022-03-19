<template>
  <ul class=" md:hidden navigation flex items-center justify-between bg-gray-800 text-gray-200 dark:bg-gray-200 dark:text-gray-800 dark: p-1	" >

    <li class="flex-1 border-r-2  border-amber-500 h-full flex items-center justify-center">
      <router-link to="/a" class=" flex  " > 
        <fa :style="{ height: '28px'}" icon="coffee" />
      </router-link>
    </li>

    <li class="flex-1  border-r-2 border-amber-500 h-full flex items-center justify-center ">
      <router-link to="/about" class=" flex items-center justify-center  " > 
        <fa :style="{ height: '28px'}" icon="clock" />
      </router-link>
    </li>

    <li class="flex-1  border-r-2 border-amber-500 h-full flex items-center justify-center ">
      <router-link to="/" class=" flex items-center justify-center leading-none text-sm	 " >
        click &<br/> collect 
      </router-link>
    </li>

    <li class="flex-1">
<!-- menu burger 3div pour les barres du burger -->
      <div class="flex items-center justify-center  " > 
        
        <button 
        class=" py-2 px-4  rounded-full "
        @click="isActive = !isActive"
        :class="[isActive ? 'bg-pink-500'  : 'bg-gray-200 dark:bg-gray-700']"
        >
          <div class="space-y-2 w-3  flex flex-col items-center justify-center  ">


            <div class="w-6 h-0.5 bg-black dark:bg-gray-200"
                 :style="[!isActive ? ''  : 'transform: translateY(12px) rotate(45deg)', 'transition: all 0.3s ease-in-out']">
            </div>


            <div class="w-6 h-0.5 bg-black dark:bg-gray-200"
                 :style="[!isActive ? ''  : 'width: 0', 'transition: all 0.2s ease-in-out']">
            </div>

            <div class="w-6 h-0.5 bg-black dark:bg-gray-200"
                 :style="[!isActive ? ''  : 'transform: translateY(-8px) rotate(-45deg)', 'transition: all 0.2s ease-in-out']">
            </div>


          </div>
        </button>

        <transition name="fade">
          <div v-show="isActive" class="menu " @click=" isActive = !isActive" >
<!-- button x pour retirer menu   -->
            <button 
            class=" button text-white bold py-2 px-4 rounded-full block m-auto mt-12 h-12	w-12 text-2xl"
            @click=" !isActive"
            :class="['bg-pink-500 text-4xl flex items-center justify-center pb-3']"
            >
              x
            </button>

            <ul class="h-full flex flex-col justify-start items-center mt-10 ">
              <li class="mb-10 links"
                  v-for="linkmenu in linksMenu" v-bind:key="linkmenu.id ">

                <router-link :to="{path:linkmenu.chemin}" @click="!isActive" class="text-2xl ">{{ linkmenu.page }}</router-link >
                
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
  height: 50px;
  width: 100vw;
  z-index: 10;
  transition: all .3s linear;
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
  color: #f8f8f8;
}


.fade-enter-active, .fade-leave-active {
  transition: .3s .1s ;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transition: .3s ;
}
.fade-enter-from{
opacity: 0;
}


.router-link-active{
    color: $principale;
    font-weight: 700;
    transform: scale(1.2);
    transition: all .3s ease-in-out;
}


</style>
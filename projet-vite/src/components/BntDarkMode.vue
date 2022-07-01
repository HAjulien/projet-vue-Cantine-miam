<template>
  <button
  @click="toggleDarkMode"
  >
    <div>

      <transition name="fade" mode="out-in">

        <div  v-if="dark" class=" bg-amber-300	shadow-inner  rounded-xl flex h-6 items-center w-16 justify-evenly">
          <span class="text-xs text-white"> JOUR </span>
          <div class="w-4 h-4 bg-white rounded-full flex justify-center items-center">
              <fa :style="{height: '13px', color:'yellow'}" icon='sun' />
          </div>
        </div>

        <div  v-else class=" bg-gray-800 shadow-inner  rounded-xl flex h-6 items-center w-16 justify-evenly"> 
          <span class="text-xs text-white"> NUIT </span> 
          <div class="w-4 h-4 bg-black rounded-full flex justify-center items-center">
            <fa :style="{ height: '13px', color:'yellow'}" icon='moon' />
          </div>
        </div>
        
      </transition>
    </div>

  </button>  
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters(['dark']),
  },

  mounted() {
    if (localStorage.theme === undefined) {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)')
          .matches
      ) {
        localStorage.theme = 'dark';
        this.SET_DARK(true);
      } else {
        localStorage.theme = 'light';
      }
    } else {
      this.SET_DARK(localStorage.theme === 'dark');
    }
  },

  methods: {
    ...mapMutations(['SET_DARK']),

    toggleDarkMode() {
      this.SET_DARK(!this.dark);
      localStorage.theme = this.dark ? 'dark' : 'light';
    },
  },
};

</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-from{
  opacity: 0;
}

</style>
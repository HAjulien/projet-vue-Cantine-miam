<template>
    <div>

        <header class=" md:hidden lg:hidden headerMobile flex justify-between items-center px-2 dark:bg-gray-700 bg-gray-200">
            
            <router-link to="/" >
                <transition name="fade" mode="out-in">
                    <img src="../assets/images/logo.png" class="  w-24 h-10 ml-3" v-if="!dark" /> 
                    <img src="../assets/images/logoSecondaire.png" class="  w-24 h-10 ml-3" v-else /> 
                </transition>
            </router-link> 

            <div class=" flex justify-around items-center w-32 mr-3">
                <BtnDarkMode/>
                <button class=" flex items-center ml-6 " v-on:click="toggleModale">
                    <fa :style="{height: '35px', color: '#097770', }"   icon='user' />
                </button>
            </div>
            
        </header>

        <transition name="slide">
            <ProfileModale :revele="revele" :toggleModale="toggleModale"></ProfileModale>
        </transition >

    </div>
</template>

<script>
import BtnDarkMode from './BntDarkMode.vue';
import ProfileModale from './ProfileModale.vue';
import { mapGetters } from 'vuex';


export default {
    name:'HeaderMobile',

    data() {
        return {
            revele :false,
        }
    },

    components: {
        BtnDarkMode,
        ProfileModale,
    },
    methods: {
        toggleModale: function(){
            this.revele = !this.revele
        }
    },
    computed: {
      ...mapGetters(['dark']),
    },

}
</script>

<style>

header{
    height: 60px;
    transition: all .5s ease-in-out;
}



.slide-enter-from{
    opacity: 0;
    transform: translateY(-250px);
}
.slide-enter-active{
    transition: all .3s ease-out;
}
.slide-leave-to{
    opacity: 0;
    transform: translateY(-250px);
}
.slide-leave-active{
    transition: all .2s ease-in;
}



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
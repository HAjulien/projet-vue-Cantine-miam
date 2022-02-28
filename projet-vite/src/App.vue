<template>

<div class="app ">

    <PageLoader/> 

    <main :class="isDark ? 'dark' : ''">
        <HeaderDesktop/>
        <BannerDesktop/>
        <header class=" md:hidden lg:hidden headerMobile flex justify-between items-center px-2 dark:bg-gray-700 bg-gray-200	 h-16">
            <img src="./assets/images/logo.png" class="w-24 h-10" />
            <div class=" flex justify-around items-center w-32">
                <button
                @click="isDark = !isDark"
                >
                <div>
                      <transition name="fade" mode="out-in">
                <div  v-if="isDark" class=" bg-amber-300	shadow-inner  rounded-xl flex h-8 items-center w-20 justify-evenly">
                    <span class="text-xs font-bold text-white"> JOUR </span>
                    <div class="w-6 h-6 bg-white rounded-full flex justify-center items-center">
                        <fa :style="{height: '16px', color:'yellow'}" icon='sun' />
                    </div>
                </div>
                <div  v-else class=" bg-gray-800 shadow-inner  rounded-xl flex h-8 items-center w-20 justify-evenly"> 
                    <span class="text-xs font-bold text-white"> NUIT </span> 
                    <div class="w-7 h-7 bg-black rounded-full flex justify-center items-center">
                        <fa :style="{ height: '16px', color:'yellow'}" icon='moon' />
                    </div>
                    
                </div>
                      </transition>
                </div>
                </button>
                <router-link to="" class=" flex items-center ml-3 ">
                               <fa :style="{height: '24px', color: '#097770', }"   icon='user' />
                </router-link>
            </div>
        </header>





        <div>
            <router-view @progressUpdate="setProgress" />
        </div>  
        <ProgressBar :progress='progress'/>
        <TapBar/>
        <FooterMobile/>
    </main>

</div>

</template>


<script>

import PageLoader from './components/PageLoader.vue'
import HeaderDesktop from './components/HeaderDesktop.vue'
import BannerDesktop from './components/BannerDesktop.vue'
import ProgressBar from './components/ProgressBar.vue';
import TapBar from './components/TapBar.vue';
import FooterMobile from './components/FooterMobile.vue';


export default {
    name: 'app',
    components: {
        PageLoader,
        HeaderDesktop,
        BannerDesktop,
        ProgressBar,
        FooterMobile,
        TapBar,
    },
    data(){
        return{
        isDark: false,
        progress:0,

        }
    },
    methods: {
        setProgress (progress) {
            this.progress = progress;
        },
    }

}
</script>

<style lang="scss">

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'montseratt', sans-serif;

    }
    main{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        overflow: hidden;
    }


    .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
    opacity: 0;
    }

@media screen and (min-width:766px){

    body::-webkit-scrollbar{
    width: 17px;
    }

/* Works on Firefox */
    * {
    scrollbar-width: thin;
    scrollbar-color: $principale #bdb1ac80;
    }

/* Works on Chrome, Edge, and Safari */


    *::-webkit-scrollbar-track {
    background-color: $green;
    }

    *::-webkit-scrollbar-thumb {
    background-color: #edca82;
    border-radius: 20px;
    border: 4px solid #a9c0a6;
    }
}

</style>

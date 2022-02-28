<template>

<div class="app ">

    <PageLoader/>  
    <main :class="isDark ? 'dark' : ''">


        <header class=" md:hidden lg:hidden headerMobile flex justify-between items-center px-2 bg-gray-600 h-16">
            <img src="./assets/logo.png" class="w-24 h-10" />
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
                               <fa :style="{height: '24px', color: 'white', }"   icon='user'/>
                </router-link>
            </div>
        </header>





        <div>
            <router-view  @progressUpdate="setProgress" />
        </div>  
        <ProgressBar :progress='progress'/>
        <!-- <div class="ml-56">
            <button @click=" icon1 = !icon1">
            <fa :style="{ height: '40px'}" icon='coffee'  :class="[icon1 ? 'text-pink-500' : 'text-lime-400']" />
            </button>
            <button @click=" icon2 = !icon2">
            <fa :style="{ height: '40px'}" icon='clock' :class="[icon2 ? 'text-sky-500' : 'text-fuchsia-400']" />
            </button>

            <button @click=" icon3 = !icon3">
            <fa :style="{ height: '40px'}" :icon="[ 'fab', 'youtube' ]" :class="[icon3 ? 'text-teal-500' : 'text-amber-600']"/>
            </button>
            <button @click=" icon4 = !icon4">
            <fa :style="{ height: '40px'}" :icon="[ 'fab', 'twitter' ]" :class="[icon4 ? 'text-red-500' : 'text-zinc-400']"/>
            </button> -->

            <!-- <button>
                <ul class=" flex m-12 text-[30px] text-pink-400">
                    <li class="mr-2 ml-4 ">
                        <router-link to="/about" >  <fa :icon="[ 'fab', 'twitter' ]"/>
                        </router-link> 
                    </li>
                    <li class="ml-2">
                        <router-link to="/" ><fa  icon='clock' /> </router-link>
                    </li>
                </ul>
            </button> -->

        
      <!-- </div> -->
      <TapBar/>
        <FooterMobile/>
    </main>

</div>

</template>


<script>

import PageLoader from './components/PageLoader.vue'
import ProgressBar from './components/ProgressBar.vue';
import TapBar from './components/TapBar.vue';
import FooterMobile from './components/FooterMobile.vue';


export default {
    name: 'app',
    components: {
        PageLoader,
        ProgressBar,
        FooterMobile,
        TapBar,
    },
    data(){
        return{
        isDark: false,
        icon1: true,
        icon2: false,
        icon3: true,
        icon4: true,
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

<style >

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
    header{
        background-color: #e21818;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 1s ease-in-out;

    }
    header h1{
        color: #f8f8f8;
        font-size: 1.8rem;
        text-align: center;
    }

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.router-link-active{
    transition: all .5s linear;
    color: green;
    font-size: 15px;
    
}


</style>

<template>

<div class="app ">

<<<<<<< Updated upstream
    <PageLoader/>  
    <main :class="isDark ? 'dark' : ''">
        <header class="dark:bg-lime-300">
            <h1>Scroll Progress bar</h1>
            <button
            @click="isDark = !isDark"
            >
            <div class="2xl:w-16 ml-20  ">
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

        </header>
        <ProgressBar :progress='progress'/>
=======
    <!-- <PageLoader/>  -->

    <main :class="dark ? 'dark' : 'light'">
        <HeaderMobile/>
        <HeaderDesktop
        :class=" {'is-hidden': !showHeader}"
        />
        <BannerDesktop/>
>>>>>>> Stashed changes
        <div>
            <router-view  @progressUpdate="setProgress" />
        </div>  
        <div class="ml-56">
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
            </button>

            <button>
                <ul class=" flex m-12 text-[30px] text-pink-400">
                    <li class="mr-2 ml-4 ">
                        <router-link to="/about" >  <fa :icon="[ 'fab', 'twitter' ]"/>
                        </router-link> 
                    </li>
                    <li class="ml-2">
                        <router-link to="/" ><fa  icon='clock' /> </router-link>
                    </li>
                </ul>
            </button>

        
      </div>

    </main>

</div>

</template>


<script>
<<<<<<< Updated upstream

=======
import { mapGetters, mapMutations } from 'vuex';
>>>>>>> Stashed changes
import PageLoader from './components/PageLoader.vue'
import ProgressBar from './components/ProgressBar.vue';


export default {
    name: 'app',
    components: {
        PageLoader,
        ProgressBar
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

    mounted() {
        this.lastScrollPosition = window.pageYOffset
        window.addEventListener('scroll', this.onScroll)
        },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll)
    },
    
     computed: {
        ...mapGetters(['dark', 'showHeader']),
    },

    methods: {
        setProgress (progress) {
            this.progress = progress;
        },
<<<<<<< Updated upstream
    }
=======

        onScroll() {
            if (window.pageYOffset < 0) {
            return
            }
            if (Math.abs(window.pageYOffset - this.lastScrollPosition) < this.scrollOffset) {
            return
            }
            this.showHeader = window.pageYOffset < this.lastScrollPosition
            this.lastScrollPosition = window.pageYOffset
        },
    ...mapMutations(['SET_SHOWHEADER']),
    },
>>>>>>> Stashed changes

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
    font-size: 35px;
    
}


</style>

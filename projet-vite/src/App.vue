<template>

<div class="app dark:bg-grey-700">

    <PageLoader/> 

    <main :class="dark ? 'dark' : 'light'" >
        <HeaderMobile/>

        <div class="headerDesktop"
        :class="{ 'is-hidden': !showHeader }"
        >
            <HeaderDesktop/>
        </div>
        <div>
            <router-view @progressUpdate="setProgress"  v-slot="{ Component }">
                <transition name="route" mode="out-in">
                    <component :is="Component"></component>
                </transition>
            </router-view>
        </div>  
        <ProgressBar :progress='progress'/>
        <TapBar/>
        <FooterMobile/>
        <FooterDesktop/>
    </main>

</div>

</template>


<script>
import { mapGetters } from 'vuex';
import PageLoader from './components/PageLoader.vue'
import HeaderMobile from './components/HeaderMobile.vue'
import HeaderDesktop from './components/HeaderDesktop.vue'
import ProgressBar from './components/ProgressBar.vue';
import TapBar from './components/TapBar.vue';
import FooterMobile from './components/FooterMobile.vue';
import FooterDesktop from './components/FooterDesktop.vue';


export default {
    name: 'app',
    components: {
        PageLoader,
        HeaderMobile,
        HeaderDesktop,
        ProgressBar,
        TapBar,
        FooterMobile,
        FooterDesktop,
    },
    data(){
        return{
        progress:0,
        showHeader: 'true',
        lastScrollPosition: 0,
        scrollOffset: 20,

        }
    },

    computed: {
    ...mapGetters(['dark']),   
    },

    mounted() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll)
    },

    methods: {
        setProgress (progress) {
            this.progress = progress;
        },
            // Toggle if navigation is shown or hidden
        onScroll() {
        if (window.pageYOffset < 0) {
            return
        }
        if (Math.abs(window.pageYOffset - this.lastScrollPosition) < this.scrollOffset) {
            return
        }
        this.showHeader = window.pageYOffset < this.lastScrollPosition
        //console.log(this.showHeader);
        this.lastScrollPosition = window.pageYOffset
        },
    },
    

}
</script>

<style lang="scss">

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    input, textarea, button, select,a{
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

    ::selection{
    color: $principale;
    background-color: #040404;
    }

    body{
        font-family: 'montseratt', sans-serif;
    }
    main{
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    .route-enter-from{
    opacity: 0;
    transform: translateX(200px);
    }
    .route-enter-active{
    transition: all .3s ease-out;
    }
    .route-leave-to{
    opacity: 0;
    transform: translateX(-200px);
    }
    .route-leave-active{
    transition: all .3s ease-in;
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

    .headerDesktop {
    position: fixed;
    height: 40px;
    width: 100vw;
    transition: transform 200ms linear;
    z-index: 100;
    }

    .headerDesktop.is-hidden {
    transform: translateY(-100%);
    transition: transform 200ms linear;

    }
    
}

</style>

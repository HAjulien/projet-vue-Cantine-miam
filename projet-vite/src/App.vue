<template>

<div class="app ">

    <PageLoader/> 

    <main :class="dark ? 'dark' : 'light'">
        <HeaderMobile/>

        <div class="headerDesktop"
        :class="{ 'is-hidden': !showHeader }"
        >
            <HeaderDesktop/>
        </div>

        <BannerDesktop/>
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
    </main>

</div>

</template>


<script>
import { mapGetters } from 'vuex';
import PageLoader from './components/PageLoader.vue'
import HeaderMobile from './components/HeaderMobile.vue'
import HeaderDesktop from './components/HeaderDesktop.vue'
import BannerDesktop from './components/BannerDesktop.vue'
import ProgressBar from './components/ProgressBar.vue';
import TapBar from './components/TapBar.vue';
import FooterMobile from './components/FooterMobile.vue';


export default {
    name: 'app',
    components: {
        PageLoader,
        HeaderMobile,
        HeaderDesktop,
        BannerDesktop,
        ProgressBar,
        FooterMobile,
        TapBar,
    },
    data(){
        return{
        progress:0,
        showHeader: 'true',
        lastScrollPosition: 0,
        scrollOffset: 40,

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
    height: 45px;
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

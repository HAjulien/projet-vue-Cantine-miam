<template>

<div class="app ">

    <PageLoader/> 

    <main :class="isDark ? 'dark' : ''">
        <HeaderMobile/>
        <HeaderDesktop/>
        <BannerDesktop/>
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
        isDark: false,

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

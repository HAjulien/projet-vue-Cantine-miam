<template>

<div class="app ">

    <PageLoader />  

    <main :class="isDark ? 'dark' : ''">
        <header class="dark:bg-lime-300">
            <h1>Scroll Progress bar</h1>
            <button
            @click="isDark = !isDark"
            >
            <div class="2xl:w-16 text-blue-300 ml-20 ">
                  <transition name="fade" mode="out-in">
            <div  v-if="isDark" class=" text-stone-600 bg-pink-500">mode lumiere</div>
            <div  v-else class="bg-gray-600"> mode noire</div>
                  </transition>
            </div>
            </button>

        </header>
        <div>
            <router-view/>
        </div>  
        <div class="ml-56">
            <fa :style="{color: '#000', height: '40px'}" icon='coffee' />
            <fa :style="{color: 'pink', height: '40px'}" icon='clock' />
            <fa :style="{color: 'red', height: '40px'}" :icon="[ 'fab', 'youtube' ]"/>
            <fa :style="{color: 'blue', height: '40px'}" :icon="[ 'fab', 'twitter' ]"/>
            
        </div>
    </main>

</div>

</template>


<script>

import PageLoader from './components/PageLoader.vue'

export default {
    name: 'app',
    components: {
        PageLoader,
    },
    data(){
        return{
        isDark: true,
        }
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
        background-color: #313131;
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

</style>

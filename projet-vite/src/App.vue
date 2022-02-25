<template>

<div class="app ">

    <main :class="isDark ? 'dark' : ''">
        <header class="dark:bg-lime-300">
            <h1>Scroll Progress bar</h1>
            <button
            @click="isDark = !isDark"
            >
            <div class="2xl:w-16 text-blue-300 ">
            <div v-if="isDark" class="text-stone-600">mode lumiere</div>
            <div v-else> mode noire</div>
            </div>
            </button>

        </header>
        <ProgressBar :progress='progress'/>
        <Post @progressUpdate="setProgress"/>

        <div class="p-4">
            <router-view/>
        </div>
    </main>

</div>

</template>


<script>

import Post from './components/Post.vue';
import ProgressBar from './components/ProgressBar.vue';

export default {
    name: 'app',
    components:{
        Post,
        ProgressBar,
    },
    data() {

        return {
            isDark: true,
            progress:0,

        }
    },
    methods: {
        setProgress (progress) {
            this.progress = progress;
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

</style>

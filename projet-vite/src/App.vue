<template>

<div id="app">

    <main>
        <header>
            <h1>Scroll Progress bar</h1>

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
            progress:0
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
    }
    header h1{
        color: #f8f8f8;
        font-size: 1.8rem;
        text-align: center;
    }

</style>

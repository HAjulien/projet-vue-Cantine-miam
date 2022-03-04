<template>
    <div class="bloc-modale" v-if="revele" >

        <div class="overlay" v-on:click="toggleModale"></div>

        <div class="modale card">
            <button class="btn-modale"  v-on:click="toggleModale">X</button>
            <h2>contenu de la modale</h2>

        </div>

    </div>
</template>

<script>
export default {
    name:'ProfileModale',
    props: ['revele', 'toggleModale']


}
</script>

<style lang="scss" scoped>

    .bloc-modale{
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 20;
    }

    .overlay {
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .modale{
        background-color: #fff;
        position: fixed;
        top: 20%;
        z-index: 1;
        height: 200px;
        width: 200px;
    }
    .btn-modale{
        background-color: blue;
        position: absolute;
        right: 10px;
        width: 25px;
    }
    h2{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    
</style>


<template>
    <div id="app">  
        <div class="construction">
            <h1>La page est en construction</h1>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped >

    #app{
        width: 100vw;
        overflow: scroll;
        overflow-x: hidden;   
    }

    .construction{
        position: relative;
        height: 100vh;
        background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
    }

    h1{
        position: absolute;
        top: 20%;
        left: 50%;
        text-align: center;
        background-color: #fff;
        padding: 9px 20px;
        transform: translateX(-50%);
        color: $green;
        font-size: 1.5rem;
        font-weight: 700;
        border: 3px solid $principale;
        border-top-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }

    @media screen and (max-width: 768px){
        #app{
            max-height:calc( 100vh - 165px );
        }
    }

    @media screen and (min-width: 768px){
        h1{
            font-size: 2.5rem;
        }
    }
    
</style>
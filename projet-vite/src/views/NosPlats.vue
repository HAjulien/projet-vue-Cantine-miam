<template>

    <div id="app">    
        <div class="lg:py-12 py-3 px-3 lg:w-[90%] min-h-[200vh]  bg-slate-100 mx-auto ">
            <button @click="pre()"  > PRECEDENT </button>
            <span>.................</span>
            <button @click="next()"  > SUIVANT </button>
            <h1 class="py-2 lg:pb-20 pb-8 text-center text-3xl">tous nos produits</h1>
            <CarteNosProduits v-for="(produit, index) in produits" :key="index" :nom="produit.nom" :image="produit.image" :altImage="produit.altImage" :prixAchat="produit.prixAchat" :category="produit.category.nom"  :notes="produit.critiques" :bgcolor="produit.category.couleur" />

        </div>
    </div>
</template>

<script>

import ProgressBar from '../mixins/ProgressBar'
import CarteNosProduits from '../components/CarteNosProduits.vue'
import axios from 'axios';

export default {
    name:'nosPlats',
    mixins: [ProgressBar],
    components:{
        CarteNosProduits,
    },
    data() {
        return {
            produits: [],
            pagination: [],

        }
    },


    created () {
        axios
        .get("https://cantinemiam.herokuapp.com/api/produits")
        .then (response => (this.produits = response.data["hydra:member"]))
        axios
        .get("https://cantinemiam.herokuapp.com/api/produits")
        .then (response => (this.pagination = response.data["hydra:view"]))
    },
    methods: {
        next(){
        console.log("https://cantinemiam.herokuapp.com" + this.pagination["hydra:next"]);
        axios
        .get("https://cantinemiam.herokuapp.com" + this.pagination["hydra:next"])
        .then (response => (this.produits = response.data["hydra:member"]))
        },
        pre(){
        console.log("https://cantinemiam.herokuapp.com" + this.pagination["hydra:first"]);
        axios
        .get("https://cantinemiam.herokuapp.com" + this.pagination["hydra:first"])
        .then (response => (this.produits = response.data["hydra:member"]))
        }
    },  
}
</script>

<style lang="scss" scoped>
    
    #app{
        width: 100vw;
        flex: 1 1 100%;
        overflow: scroll;
        overflow-x: hidden;
        
    }

    @media screen and (min-width: 768px){

        #app{
            padding: 50px 0;
        }

    }

    @media screen and (max-width: 768px){
        #app{
                max-height:calc( 100vh - 180px );
        }

    }
</style>
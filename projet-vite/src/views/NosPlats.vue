<template>
    <div id="app">
        
            <div class="py-4 w-[96%] lg:w-[90%] min-h-[200vh]  bg-slate-100 mx-auto ">
                <h1>tous nos produits</h1>
                <CarteNosProduits v-for="(produit, index) in produits" :key="index" :nom="produit.nom" :image="produit.image" :altImage="produit.altImage" :prixAchat="produit.prixAchat" :category="produit.category.nom"  :notes="produit.critiques"  />
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

        }
    },

    created () {
        axios
        .get("https://cantinemiam.herokuapp.com/api/produits?page=1")
        .then (response => (this.produits = response.data["hydra:member"]))
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
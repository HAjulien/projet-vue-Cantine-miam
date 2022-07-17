<template>
    <div id="app">
        <h2 class="text-center text-3xl border-2 border-red-500 w-72 ml-[50vw] translate-x-[-50%] my-6">LES ENTRÉES</h2>
    <div class="flex items-center justify-center  m-auto">

        <article v-for="(produit, index) in produits" :key="index" >

            <div v-if="produit.category.nom == 'entrée'"  class=" p-2 flex flex-col items-center space-y-4  m-2 md:h-[250px] md:mx-6 rounded-lg"
            :style="{border:`3px solid ${produit.category.couleur}` }"
            >
                <img :src="produit.image" :alt="produit.altImage" class="w-40 rounded-lg " >
                <h3> {{produit.nom}} </h3>
                <span> {{produit.prixAchat}} </span>
            </div>

        </article>
    </div>







        <article v-for="(produit, index) in produits" :key="index" class="my-4 mx-4" >
            <div v-if="produit.category.nom.includes('plat')">
            <h2> {{produit.nom}} </h2>
            <span> {{produit.category.nom}} </span>
            </div>
        </article>

        <article v-for="(produit, index) in produits" :key="index" class="my-4 mx-4" >
            <div v-if="produit.category.nom == 'dessert'">
            <h2> {{produit.nom}} </h2>
            <span> {{produit.category.nom}} </span>
            </div>
        </article>
        
    </div>
</template>

<script>
import axios from 'axios';
import ProgressBar from '../mixins/ProgressBar';

export default {
    name:'menu',
    mixins: [ProgressBar],
    component:{
    },
    data() {
        return {
            lienAPI: "https://cantinemiam.herokuapp.com",
            jourJS: '',
            produits: [],
        }
    },

    created() {
        this.jourJS = new Date().getDay();
        console.log(this.jourJS);
        if(this.jourJS == 0 || this.jourJS == 6){
                this.jourJS = 3
                console.log(this.jourJS);
        }
        console.log(this.jourJS);
        axios
        .get(`${this.lienAPI}/api/produits?page=1&JourPrevu=${this.jourJS}`)
        .then(response => (this.produits = response.data["hydra:member"]))
        .then(console.log(this.produits))
        .then(console.log(`${this.lienAPI}/api/produits?page=1&JourPrevu=${this.JourJS}&category.id=2`))
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

    @media screen and (max-width: 768px){
        #app{
            max-height:calc( 100vh - 165px );
        }
    }

    @media screen and (min-width: 768px){
        #app{
            padding: 50px 0;
        }
    }
</style>
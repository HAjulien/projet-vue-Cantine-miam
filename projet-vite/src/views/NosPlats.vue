<template>

    <div id="app" class="dark:bg-gray-800 " >    
        <div class="lg:py-12 py-3 px-3 lg:w-[90%] min-h-[200vh] bg-slate-100 mx-auto 
        dark:bg-gray-700  dark:text-gray-100    ">

            <h1 class=" py-6 text-center text-3xl"> Nos produits</h1>
            <div class="flex items-center md:justify-between justify-around 
                        h-20 md:w-[95%] mx-auto lg:mb-12 md: md:px-12
                        border-2 border-[#A40E4C] rounded
                        ">
                <div>
                    <label for="category"></label>
                    <select id="category"  @change="categorychoose()" 
                    class="text-gray-700 text-center
                    py-1.5 rounded px-2
                    border-2 border-[#A40E4C] outline-0	
                    
                    ">
                        <option value="">Tous les produits</option>
                        <option v-for="(category, indexCate) in categories" :key="indexCate"  :value="category.id">{{category.nom}}</option>
                    </select>
                </div>
                <span class=" md:w-32 block px-3
                md:text-lg text-amber-400 py-1 text-center	
                bg-gray-700 rounded-2xl
                dark:text-gray-700 dark:bg-amber-400
                ">
                    {{total}} produits
                </span>
            </div>
            <CarteNosProduits v-for="(produit, index) in produits" :key="index" :nom="produit.nom" :image="produit.image" :altImage="produit.altImage" :prixAchat="produit.prixAchat" :category="produit.category.nom"  :notes="produit.critiques" :bgcolor="produit.category.couleur" />
            <div class="flex items-center md:justify-between justify-around 
                        h-20 md:w-[95%] mx-auto lg:mb-12 md: md:px-12
                        border-2 border-[#A40E4C] rounded
                        ">            
                <button @click="pre()" v-if=" total > 12" > PRECEDENT </button>
                <span v-if=" total > 12" > {{numPageActuel}} / {{numPageFin}} </span>
                <button @click="next()" v-if=" total > 12"  > SUIVANT </button>
            </div>
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
            categories:[],
            total:[],
        }
    },
    computed: {
            // un accesseur (getter) calculé
            numPageActuel: function () {
             // `this` pointe sur l'instance vm  str.substring(1, 3)
            return this.pagination["@id"].substring(19)
            },
            numPageFin: function () {
             // `this` pointe sur l'instance vm  str.substring(1, 3)
            return this.pagination["hydra:last"].substring(19)
            }
    },
    created () {
        axios
        .get("https://cantinemiam.herokuapp.com/api/produits")
        .then (response => (this.produits = response.data["hydra:member"]))
        axios
        .get("https://cantinemiam.herokuapp.com/api/produits")
        .then (response => (this.total = response.data["hydra:totalItems"]))
        console.log(this.total);
        axios
        .get("https://cantinemiam.herokuapp.com/api/categories")
        .then (response => (this.categories = response.data["hydra:member"]))
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
        axios
        .get("https://cantinemiam.herokuapp.com" + this.pagination["hydra:next"])
        .then (response => (this.pagination = response.data["hydra:view"]))
        },
        pre(){
        //console.log("https://cantinemiam.herokuapp.com" + this.pagination["hydra:first"]);
        axios
        .get("https://cantinemiam.herokuapp.com" + this.pagination["hydra:first"])
        .then (response => (this.produits = response.data["hydra:member"]))
        axios
        .get("https://cantinemiam.herokuapp.com" + this.pagination["hydra:first"])
        .then (response => (this.pagination = response.data["hydra:view"]))
        },
        categorychoose(){
            var select = document.getElementById('category');
            var value = select.options[select.selectedIndex].value;
            //console.log("https://cantinemiam.herokuapp.com/api/produits?page=1&category.id=" + value);
            axios
            .get("https://cantinemiam.herokuapp.com/api/produits?page=1&category.id=" + value)
            .then (response => (this.produits = response.data["hydra:member"]))
            axios
            .get("https://cantinemiam.herokuapp.com/api/produits?page=1&category.id=" + value)
            .then (response => (this.total = response.data["hydra:totalItems"]))            
            },
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
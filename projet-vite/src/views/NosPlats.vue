<template>

    <div id="app" class="dark:bg-gray-800 " >    
        <div class="lg:py-12 py-3 px-3 lg:w-[90%] min-h-[200vh] bg-slate-100 mx-auto 
        dark:bg-gray-700  dark:text-gray-100 "
        >
            <h1 class=" py-6 text-center text-3xl" > Nos produits</h1>
            
            <div class="flex items-center md:justify-between justify-around 
                        h-20 md:w-[95%] mx-auto lg:mb-12 md: md:px-12
                        border-2 border-[#A40E4C] rounded
                        "
                        >
                <div>
                    <label for="category"></label>
                    <select id="category" v-model="selectionCategorie"  @change="categorychoix()" 
                    class="text-gray-700 text-center
                    py-1.5 rounded
                    border-2 border-[#A40E4C] outline-0	
                    
                    ">
                        <option value="">Nos produits</option>
                        <option v-for="(category, indexCate) in categories" :key="indexCate"  :value="category.id">{{category.nom}}</option>
                    </select>
                </div>
                <span v-if="(numPageActuel == 1 && total > nombreProduitParPage )">
                    1 - {{numPageActuel * nombreProduitParPage}}   
                </span>
                <span v-else-if=" (numPageActuel + 1) * nombreProduitParPage < total ">
                    {{numPageActuel * nombreProduitParPage + 1}} - {{(numPageActuel + 1)* nombreProduitParPage}}
                </span>
                <span v-else>
                    {{((numPageActuel - 1) * nombreProduitParPage) + 1}} - {{total}}
                </span>
                <span class=" md:w-32 block px-3
                md:text-lg text-sm text-amber-400 py-1 text-center	
                bg-gray-700 rounded-2xl
                dark:text-gray-700 dark:bg-amber-400
                ">
                    {{total}} produit<span v-if="total > 1" >s</span>
                </span>
            </div>
                <CarteNosProduits v-for="(produit, index) in produits" :key="index" :id="produit.id" :nom="produit.nom" :image="produit.image" :altImage="produit.altImage" :prixAchat="produit.prixAchat" :category="produit.category.nom"  :critiques="produit.critiques" :bgcolor="produit.category.couleur" />
            <div class="flex items-center md:justify-between justify-around 
                        h-20 md:w-[95%] mx-auto lg:mb-12 md: md:px-12
                        border-2 border-[#A40E4C] rounded
                        "
            v-if=" total > nombreProduitParPage"
            >            
                <div>
                    <button @click="premierePage()" v-if="numPageActuel > 1 "> 1ER PAGE </button>
                    <span v-else> </span>
                    <button @click="precedent()" v-if="numPageActuel > 2 "> PRÉCÉDENT </button>
                    <span v-else> </span>
                </div>

                <span> {{numPageActuel}} / {{numPageFin}} </span>

                <button @click="suivant()"  v-if=" numPageActuel < numPageFin " > SUIVANT </button>
                <span v-else> </span>
            </div>
        </div>
    </div>
</template>

<script>

import CarteNosProduits from '../components/CarteNosProduits.vue'
import axios from 'axios';
import ProgressBar from '../mixins/ProgressBar';



export default {
    name:'nosPlats',
    mixins: [ProgressBar],
    components:{
        CarteNosProduits,
    },
    data() {
        return {
            selectionCategorie:"",
            produits: [],
            pagination: [],
            categories:[],
            total:[],
            nombreProduitParPage: 12,
            lienAPI: "https://cantinemiam.herokuapp.com"
        }
    },
    computed: {
            // un accesseur (getter) calculé on récupére le nombre de la page et transforme en nombre
            numPageActuel: function () {
                if(this.pagination["@id"]){
                    if (this.total > ( this.nombreProduitParPage * 100 ) ){ 
                        return parseInt(this.pagination["@id"].substring(19,22))
                    }else if(this.total >= ( this.nombreProduitParPage * 10 )){
                        return parseInt(this.pagination["@id"].substring(19,21))
                    }else if(this.total > this.nombreProduitParPage ){
                        return parseInt(this.pagination["@id"].substring(19,20))
                    }else{
                        return 1
                    }
                }    
            },
            numPageFin: function () {
                if (this.pagination["hydra:last"]){
                return parseInt(this.pagination["hydra:last"].substring(19))
                }
            },
            numPagePrecedente: function () {
                if (this.pagination["hydra:previous"]){
                return parseInt(this.pagination["hydra:previous"].substring(19))
                }
            },
    },
    created () {
        axios
        .get( this.lienAPI + "/api/produits")
        .then (response => (this.produits = response.data["hydra:member"]))
        axios
        .get( this.lienAPI + "/api/produits")
        .then (response => (this.total = response.data["hydra:totalItems"]))
        //console.log(this.total);
        axios
        .get( this.lienAPI + "/api/categories")
        .then (response => (this.categories = response.data["hydra:member"]))
        axios
        .get( this.lienAPI + "/api/produits")
        .then (response => (this.pagination = response.data["hydra:view"]))
    },
    methods: {
        suivant(){
            this.$el.scrollTo(0,0)
            window.scrollTo(0,0);
            //console.log(this.lienAPI + this.pagination["hydra:next"]);
            axios
            .get(this.lienAPI + this.pagination["hydra:next"])
            .then (response => (this.produits = response.data["hydra:member"]))
            axios
            .get(this.lienAPI + this.pagination["hydra:next"])
            .then (response => (this.pagination = response.data["hydra:view"]))
            
        },
        precedent(){
            this.$el.scrollTo(0,0)
            window.scrollTo(0,0);
            //console.log(this.lienAPI + this.pagination["hydra:previous"]);
            axios
            .get(this.lienAPI + this.pagination["hydra:previous"])
            .then (response => (this.produits = response.data["hydra:member"]))
            axios
            .get(this.lienAPI + this.pagination["hydra:previous"])
            .then (response => (this.pagination = response.data["hydra:view"]))
        },
            premierePage(){
            this.$el.scrollTo(0,0)
            window.scrollTo(0,0);
            //console.log(this.lienAPI + this.pagination["hydra:first"]);
            axios
            .get(this.lienAPI + this.pagination["hydra:first"])
            .then (response => (this.produits = response.data["hydra:member"]))
            axios
            .get(this.lienAPI + this.pagination["hydra:first"])
            .then (response => (this.pagination = response.data["hydra:view"]))
        },
        categorychoix(){
            //v-model permet de recuperer la value et de la mettre dans une data
            //const select = document.getElementById('category');
            //const value = select.options[select.selectedIndex].value;
            //console.log(this.lienAPI + "/api/produits?page=1&category.id=" + value);
            this.$el.scrollTo(0,0)
            window.scrollTo(0,0);
            axios
            .get(this.lienAPI + "/api/produits?page=1&category.id=" + this.selectionCategorie)
            .then (response => (this.produits = response.data["hydra:member"]))
            axios
            .get(this.lienAPI + "/api/produits?page=1&category.id=" + this.selectionCategorie)
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
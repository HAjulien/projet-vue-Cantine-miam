<template>

    <div id="app" class="dark:bg-gray-800 relative" >  
        <div class="loading" v-if="isLoading">
            <Spinner/>
        </div>
        <div class="lg:py-12 py-3 px-3 lg:w-[90%] min-h-[200vh] bg-slate-100 mx-auto 
        dark:bg-gray-700  dark:text-gray-100 "
        >
            <h1 class=" py-6 text-center text-3xl" > Nos produits</h1>
            
            <div class="flex items-center  md:space-x-2 justify-around 
                        h-8  mx-auto mb-4 p-4 dark:bg-gray-600
                        border-2 border-[#A40E4C] rounded transition-all "
            :class="revele == true ? 'md:w-[400px] w-full' : 'w-[30px]'"        
                        > 
                <input type="text" placeholder="Taper votre recherche ici" v-if="revele"
                class="w-72 outline-0 bg-gray-100 dark:bg-gray-600 dark:placeholder:text-gray-100 placeholder:text-slate-800"  v-model="recherche">

                <span v-if="revele"> <fa :style="{height: '25px'}" icon='close' class="cursor-pointer text-red-500" @click="cleanReseach" /></span>
                <span v-else> <fa :style="{height: '20px', color: '#097770'}" icon='search' class="cursor-pointer " @click="toggleModale" /></span>

            </div>
            <transition name="slide">
                <RechercheModale :revele="revele" :toggleModale="toggleModale" :recherche="recherche" />
            </transition>
            <div class="flex items-center md:justify-between justify-around 
                        h-20 md:w-[95%] mx-auto lg:mb-12 md:px-12
                        border-2 border-[#A40E4C] rounded">
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
                <span v-else-if=" numPageActuel * nombreProduitParPage < total ">
                    {{(numPageActuel - 1) * nombreProduitParPage + 1}} - {{numPageActuel * nombreProduitParPage}}
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
                    <button @click="premierePage()" v-if="numPageActuel > 1" class="navBouton">1</button>
                    <span v-else> </span>
                    <button @click="precedent()" v-if="numPageActuel > 2 " class="navBouton"> PRÉCÉDENT </button>
                    <span v-else> </span>
                </div>

                <span> {{numPageActuel}} / {{numPageFin}} </span>

                <button @click="suivant()"  v-if=" numPageActuel < numPageFin " class="navBouton" > SUIVANT </button>
                <span v-else> </span>
            </div>
        </div>
    </div>

</template>

<script>
import Spinner from '../components/Spinner.vue'
import CarteNosProduits from '../components/CarteNosProduits.vue'
import RechercheModale from '../components/RechercheModale.vue'
import axios from 'axios';
import ProgressBar from '../mixins/ProgressBar';

export default {
    name:'nosPlats',
    mixins: [ProgressBar],
    components:{
        Spinner,
        CarteNosProduits,
        RechercheModale
    },
    data() {
        return {
            revele :false,
            isLoading: false,
            recherche: '',
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
                if (this.total >= ( this.nombreProduitParPage * 100 ) ){ 
                    return parseInt(this.pagination["@id"].slice(-3))
                }else if(this.total >= ( this.nombreProduitParPage * 10 )){
                    return parseInt(this.pagination["@id"].slice(-2))
                }else if(this.total > this.nombreProduitParPage ){
                    return parseInt(this.pagination["@id"].slice(-1))
                }else{
                    return 1
                }
            }    
        },
        numPageFin: function () {
            if (this.pagination["hydra:last"]){
            return parseInt(this.pagination["hydra:last"].slice(-1))
            }
        },
        numPagePrecedente: function () {
            if (this.pagination["hydra:previous"]){
            return parseInt(this.pagination["hydra:previous"].slice(-1))
            }
        },
    },
    async created () {
        this.isLoading = true
        try{
            const responseProducts =  axios.get( this.lienAPI + "/api/produits")
            const responceCate =  axios.get( this.lienAPI + "/api/categories")
            
            const [products, cate] = await Promise.all([
                responseProducts,
                responceCate
            ])

            this.produits = products.data["hydra:member"]
            this.total = products.data["hydra:totalItems"]
            this.pagination = products.data["hydra:view"]

            this.categories = cate.data["hydra:member"]
            
        }catch (e) {
            console.error(e);
        } finally{
            this.isLoading = false
        }
    },
    methods: {
        async suivant(){
            this.isLoading = true
            this.$el.scrollTo(0,0)
            window.scrollTo(0,0);

            try{
                const {data : nextProducts} = await axios.get(this.lienAPI + this.pagination["hydra:next"])
                this.produits = nextProducts["hydra:member"]
                this.pagination = nextProducts["hydra:view"]
            }catch (e){
                console.error(e);
            }finally {
                this.isLoading = false
            }
        },
        async precedent(){
            this.isLoading = true
            this.$el.scrollTo(0,0)
            window.scrollTo(0,0);
            try {
                const {data : previousProducts} =await axios.get(this.lienAPI + this.pagination["hydra:previous"])
                this.produits = previousProducts["hydra:member"]
                this.pagination = previousProducts["hydra:view"]                
            } catch (e) {
                console.error(e);
            } finally{
                this.isLoading = false
            }
        },
        async premierePage(){
            this.isLoading = true
            this.$el.scrollTo(0,0)
            window.scrollTo(0,0);
            
            try {
                const {data : firstPage} = await axios.get(this.lienAPI + this.pagination["hydra:first"])
                this.produits = firstPage["hydra:member"]
                this.pagination = firstPage["hydra:view"]                
            } catch (e) {
                console.log(e);
            } finally {
                this.isLoading = false
            }
        },
        async categorychoix(){

            this.isLoading = true
            this.$el.scrollTo(0,0)
            window.scrollTo(0,0);

            try {
                const {data : categories} = await axios.get(this.lienAPI + "/api/produits?page=1&category.id=" + this.selectionCategorie)
                this.produits = categories["hydra:member"]
                this.total = categories["hydra:totalItems"]
                this.pagination = categories["hydra:view"]
            } catch (e) {
                console.log(e);
            } finally {
                this.isLoading = false
            }

        },
        toggleModale: function(){
            this.revele = !this.revele
        },
        cleanReseach: function(){
            this.recherche = "";
            
        }
    },  
}
</script>

<style lang="scss" scoped>
    
    #app{
        width: 100vw;
        overflow: scroll;
        overflow-x: hidden;   
    }

    .loading{
        @include absolutePosition(0,0,0,0);
        background-color: rgba(0, 0, 0, 0.9);
        z-index: 10;
    }
    .navBouton{
        margin: 0 10px;
        padding: 2px 10px;
        border: 1.5px solid #a40e4c;
        border-radius: 5px;
        box-shadow: 0px 0px 3px 1.5px #e91281;
        animation: border-change-color 6s alternate infinite;
    }

    .navBouton:hover{
        background: #a40e4c;
        color: #f8f8f8;
    }

    /* animation */
    @keyframes border-change-color{
        0%{border: 1.5px solid #2078dd; box-shadow: 0px 0px 3px 1.5px #062f5f;}
        15%{border: 1.5px solid #2078dd; box-shadow: 0px 0px 3px 1.5px #062f5f;}
        25%{border: 1.5px solid #dce316; box-shadow: 0px 0px 3px 1.5px #b9bf08f5;}
        35%{border: 1.5px solid #dce316; box-shadow: 0px 0px 3px 1.5px #c7cd14f5;}
        65%{border: 1.5px solid #dd1066; box-shadow: 0px 0px 3px 1.5px #6e0d36;}   
        75%{border: 1.5px solid #dd1066; box-shadow: 0px 0px 3px 1.5px #6e0d36;}   
        95%{border: 1.5px solid #a40e4c; box-shadow: 0px 0px 3px 1.5px #e91281;}
        100%{border: 1.5px solid #a40e4c; box-shadow: 0px 0px 3px 1.5px #e91281;}
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

    .slide-enter-from{
        opacity: 0;
        transform: translateX(-250px);
    }
    .slide-enter-active{
        transition: all .3s ease-out;
    }
    .slide-leave-to{
        opacity: 0;
        transform: translateX(250px);
    }
    .slide-leave-active{
        transition: all .2s ease-in;
    }

</style>
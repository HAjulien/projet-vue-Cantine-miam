<template>
    <div id="app" class="dark:text-gray-100 dark:bg-gray-700">

        <ul class="flex justify-center items-center space-x-4 my-2 flex-wrap	">
            <li
            v-for="selection in selections" :key="selection.id ">              
                <button class="bg-red-500 px-3 py-0.5 rounded-lg flex my-2 "
                :class="selection.id == jourJS ? 'bg-gray-200' : '' "
                @click="changeJour()"
                >
                    {{selection.nom}} 
                </button>       
            </li>
        </ul>

        <h2 class="text-center text-3xl border-2 border-[#A40E4C] w-72 ml-[50vw] translate-x-[-50%] my-6 py-2 dark:bg-gray-600">LES ENTRÉES</h2>
        <div class="md:flex md:items-center md:justify-center  m-auto">
            <CarteMenuSemaine v-for="(produit, index) in produits" :key="index" :categorie="produit.category.nom" :couleur="produit.category.couleur"  :type="'entrée'"   :image="produit.image" :altImage="produit.altImage" :nom="produit.nom" :prix="produit.prixAchat" :id="produit.id"
            />
        </div>

        <h2 class="text-center text-3xl border-2 border-[#A40E4C] w-72 ml-[50vw] translate-x-[-50%] my-6 py-2 dark:bg-gray-600">LES PLATS</h2>
        <div class="md:flex md:items-center md:justify-center  m-auto">
            <CarteMenuSemaine v-for="(produit, index) in produits" :key="index" :categorie="produit.category.nom" :couleur="produit.category.couleur"  :type="'plat poisson'"   :image="produit.image" :altImage="produit.altImage" :nom="produit.nom" :prix="produit.prixAchat" :id="produit.id"
            />         
            <CarteMenuSemaine v-for="(produit, index) in produits" :key="index" :categorie="produit.category.nom" :couleur="produit.category.couleur"  :type="'plat végétarien'"   :image="produit.image" :altImage="produit.altImage" :nom="produit.nom" :prix="produit.prixAchat" :id="produit.id"
            />
            <CarteMenuSemaine v-for="(produit, index) in produits" :key="index" :categorie="produit.category.nom" :couleur="produit.category.couleur"  :type="'plat viande'"   :image="produit.image" :altImage="produit.altImage" :nom="produit.nom" :prix="produit.prixAchat" :id="produit.id"
            />
        </div>
        
        <h2 class="text-center text-3xl border-2 border-[#A40E4C] w-72 ml-[50vw] translate-x-[-50%] my-6 py-2 dark:bg-gray-600">LES DESSERT</h2>
        <div class="md:flex md:items-center md:justify-center  m-auto">
            <CarteMenuSemaine v-for="(produit, index) in produits" :key="index" :categorie="produit.category.nom" :couleur="produit.category.couleur"  :type="'dessert'"   :image="produit.image" :altImage="produit.altImage" :nom="produit.nom" :prix="produit.prixAchat" :id="produit.id"
            />
        </div>
        
    </div>
</template>

<script>
import axios from 'axios';
import CarteMenuSemaine from '../components/CarteMenuSemaine.vue';

export default {
    name:'menu',
    components:{
        CarteMenuSemaine,
    },
    data() {
        return {
            lienAPI: "https://cantinemiam.herokuapp.com",
            jourJS: '',
            produits: [],
            selections:[
                { id:1, nom:'Lundi' },
                { id:2, nom:'Mardi' },
                { id:3, nom:'Mercredi' },
                { id:4, nom:'Jeudi' },
                { id:5, nom:'Vendredi' },
                { id:8, nom:'Boissons' },
            ],
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

    methods: {
        changeJour(){
            console.log(selection.id);
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
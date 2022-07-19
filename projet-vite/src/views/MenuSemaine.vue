<template>
    <div id="app" class=" dark:text-gray-100 dark:bg-gray-700 bg-gray-100">
        <ul class="flex justify-center items-center space-x-4 my-2 flex-wrap">
            <li
            v-for="selection in selections" :key="selection.id ">              
                <button class="border-2 border-amber-300 px-3 py-0.5 rounded flex justify-center my-2 duration-300 dark:bg-gray-600 bg-gray-50
                lg:text-xl  "
                :class="selection.id == jourJS ? 'border-emerald-700 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 w-28 lg:w-44 ' : 'w-20  lg:w-28' "
                @click="changeJour(selection.id)"
                >
                    {{selection.nom}} 
                </button>       
            </li>
        </ul>
                    <h1 class="mt-7 text-center text-xl font-bold italic text-[#A40E4C]"> {{jourChoisi}} </h1>

        <div class="relative pt-3">
            <div class="loader" v-if="isLoading" ></div>
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
        
    </div>
</template>

<script>
import ProgressBar from '../mixins/ProgressBar'
import axios from 'axios';
import CarteMenuSemaine from '../components/CarteMenuSemaine.vue';

export default {
    name:'menu',
    mixins: [ProgressBar],
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
            ],
            isLoading: false,
            jourChoisi: ""
        }
    },

    created() {
        this.jourJS = new Date().getDay();
        if(this.jourJS == 0 || this.jourJS == 6){
                this.jourJS = 1
        }
        

        axios
        .get(`${this.lienAPI}/api/produits?page=1&JourPrevu=${this.jourJS}`)
        .then(response => (this.produits = response.data["hydra:member"]))
        //.then(console.log(this.produits))
    },

    methods: {
        //a l'aide du parem envoiyé par la boucle dans(selection.id) l9
        async changeJour(id){
            this.jourJS = id
            this.isLoading = true
            // console.log(id);
            // console.log(this.jourJS);
            await axios
            .get(`${this.lienAPI}/api/produits?page=1&JourPrevu=${this.jourJS}`)
            .then(response => (this.produits = response.data["hydra:member"]))
            //.then(console.log(this.produits))
            this.isLoading = false

        },


    },
    updated() {
        let date = new Date()
        let dayNow = date.getDay()
        //console.log(dayNow);
        let dateNombreChoisi = date.getDate() - (dayNow - this.jourJS )
        let dateChoice = new Date(date.setDate(dateNombreChoisi))
        //console.log(dateNombreChoisi);
        //console.log(dateChoice.toLocaleDateString("fr"));
        this.jourChoisi = dateChoice.toLocaleDateString("fr", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
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

    .loader{
        @include absolutePosition(0,0,0,0);
        background: rgba(0, 0, 0, 0.502);
        z-index: 10;
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
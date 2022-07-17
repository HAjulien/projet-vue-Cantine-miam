<template>
    <div class="bloc-modale lg:w-[70%] my-8 m-auto " v-if="revele">
        
        <div class="loader" v-if="isLoading"></div>
        <button v-on:click="toggleModale"  class="bg-red-500 w-full h-8 mb-2 rounded">FERMER X</button>
        <span v-if="produits.length > 0"> Nombre de résultat : {{produits.length}} </span>
        <span v-else-if="recherche.length == 0"> Veuillez écrire votre recherche  </span>
        <span v-else>Aucun résultat trouvé </span>
        <article class="rechercheItem" v-for="(produit, index) in produits" :key="index"
        :style="{border:`3px solid ${produit.category.couleur}` }"
        >
            <router-link :to="'/platDetail/' + produit.id" class="flex justify-around space-x-2 items-center px-1" >
                <img :src="produit.image" :alt="produit.altImage" srcset="" class="md:w-32 w-20 rounded">
                <h3 class="flex grow justify-center"> {{produit.nom}} </h3>
                <span>{{produit.prixAchat}}€</span>
            </router-link>
        </article>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'RechercheModale',
    props: ['revele',
            'toggleModale', 
            'recherche'
        ],
    data() {
        return {
            isLoading: false,
            produits: [],
            search: ''
        }
    },

    watch: {
        recherche: {
            handler: function(newVal, oldVal){
                if (newVal.length > oldVal.length && newVal.length > 2 ) {
                    clearTimeout(this.timeoutId)
                    let self = this
                    this.timeoutId = setTimeout(function(){
                        self.search = newVal.trim().split(" ").join("%20"); 
                        console.log(`http://localhost:8000/api/produits?page=1&nom=${self.search}`);
                        self.AllSearch()
                    },1500)
                }
            },
            deep: true

        }
    }, 
    methods: {
        async AllSearch(){
            this.isLoading = true
            await axios
                .get(`https://cantinemiam.herokuapp.com/api/produits?page=1&nom=${this.search}`)
                .then(response => (this.produits = response.data["hydra:member"]))
            this.isLoading = false
        }


    },
    
}
</script>

<style lang="scss" scoped>

.bloc-modale{
    position: relative;
    min-height: 400px;
    z-index: 10;
    border: 2px solid $principale;
    border-radius: 5px;
}

.rechercheItem{
    margin: 10px 5px;
    padding: 0.2em 0;
    border-radius: 7px;
    cursor: pointer;
}
.loader{
    @include absolutePosition(0, 0, 0, 0);
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    transition: all 0.3s ease-in;
    z-index: 10;
}
div > span{
    font-size: 1.2em;
    font-weight: bold;
    margin: 5px 15px;
    
}


</style>
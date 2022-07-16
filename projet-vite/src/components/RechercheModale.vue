<template>
    <div class="bloc-modale" v-if="revele">
        <button v-on:click="toggleModale"  class="bg-red-500 w-full h-8 mb-2">FERMER X</button>
        <span>Nombre de résultat : {{produits}} </span>
        <p > {{recherche}}  </p>

        <article class="rechercheItem">
                <img src="../assets/images/burgers.jpg" alt="" srcset="" class="md:w-32 w-20 rounded">
                <h3>test </h3>
                <span>plat de viande</span>
                <span>prix</span>
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
            produits: [],
            search: ''
        }
    },

    watch: {
        recherche: {
            handler: function(newVal, oldVal){
                if (newVal.length > oldVal.length ) {
                    clearTimeout(this.timeoutId)
                    let self = this
                    this.timeoutId = setTimeout(function(){
                        self.search = newVal.trim().split(" ").join("%20"); 
                        console.log(`http://localhost:8000/api/produits?page=1&nom=${self.search}`);
                        self.foo()
                    },1500)
                }
            },
            deep: true

        }
    }, 
    methods: {
        foo(){
            console.log(`https://cantinemiam.herokuapp.com/api/produits?page=1&nom=${this.search}`)
            axios
                .get(`https://cantinemiam.herokuapp.com/api/produits?page=1&nom=${this.search}`)
                .then(response => (this.produits = response.data["hydra:member"]))
                .then(console.log(this.produits))
        }
    },
    
}
</script>

<style lang="scss" scoped>

.bloc-modale{
    min-height: 400px;
    width: 100%;
    z-index: 20;
    border: 2px solid $principale;
    border-radius: 5px;
    margin: 25px 0;
}

.rechercheItem{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px;
}
div > span{
    font-size: 1.2em;
    font-weight: bold;
    margin: 5px 15px;
    
}


</style>
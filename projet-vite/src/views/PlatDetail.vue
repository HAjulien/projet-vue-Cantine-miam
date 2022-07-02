<template>
    <div>
        <p class="lg:pt-32">test detail plat</p>
        <h1> {{produit.nom}} </h1>
        <p  v-for="(critique, index) in produit.critiques" :key="index">
                {{critique.utilisateur.pseudo}}
                {{critique.note}}
                {{critique.createAt.substring(0 , 10)}}
                {{critique.createAt.substring(11 , 19)}}
        </p>
                <span>{{id}}</span>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name:'platDetail',
    data() {
        return {
            id:this.$route.params.id,
            produit: [],

        }
    },
    created () {
        axios
        .get("https://cantinemiam.herokuapp.com/api/produits/" + this.id )
        //.then (response => (this.produit= response))
        .then(response => (this.produit = response.data));
    }, 

}
</script>

<style>

</style>
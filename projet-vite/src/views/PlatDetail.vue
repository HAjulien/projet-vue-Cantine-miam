<template>
    <div>
        <p class="pt-32">test detail plat</p>
        <h1> {{produit}} </h1>
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

        console.log(this.produit);
    },    
}
</script>

<style>

</style>
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
                <span @click="test()">{{id}} ET {{user[0]}}</span>
                <!-- <p> {{critique[0]}}</p>                 -->
                <div v-if="critique[0]"> 
                    <p>id du commentaire est {{critique[0].id}} c'est dynamique je peux le cibler pour modifier ou le supprimer </p>
                    {{critique[0].note}}  {{critique[0].contenu}}
                </div>                
                <div v-if="!critique[0] && user[0]"> 
                    <Rating :grade="0" :maxHalfStars="10"/>
                </div>     

    </div>
</template>

<script>
import axios from 'axios';
import Login_logout from '../mixins/Login_logout'
import Rating from '../components/Rating.vue';
export default {
    name:'platDetail',
    mixins: [Login_logout], 
    components:{
        Rating
    },
    data() {
        return {
            id:this.$route.params.id,
            produit: [],
            critique: [],

        }
    },
    created () {
        axios
        .get("https://cantinemiam.herokuapp.com/api/produits/" + this.id )
        //.then (response => (this.produit= response))
        .then(response => (this.produit = response.data));
    }, 
    mounted(){
        if(this.user[0]){
            axios
            .get("https://cantinemiam.herokuapp.com/critiques?page=1&produit=" + this.id + "&utilisateur.id=" + this.user[0] )
            .then(response => (this.critique = response.data["hydra:member"]));
            console.log(this.critique);
            console.log(this.user[0]);
        }
    },
    methods:{
        test(){
            console.log(this.user[0]);
        }
    }

}
</script>

<style>

</style>
<template>
    <div class="bg-gray-200 ">
        <Accordion v-for="(equipe, index) in equipes" :key="index" :nom="equipe.nom" :prenom="equipe.prenom" :surnom="equipe.surnom"  :image="equipe.image" :contenu="equipe.contenu"  />
    </div>
</template>

<script>

import Accordion from '../components/Accordion.vue' ;
import ProgressBar from '../mixins/ProgressBar';
import axios from 'axios';

export default {
    name:'equipe',
    mixins: [ProgressBar],
    components:{
        Accordion,
    },
    data() {

        return {
            equipes: [],
        }
    },

    created () {
        axios
        .get("https://cantinemiam.herokuapp.com/api/equipes?page=1")
        .then (response => (this.equipes = response.data["hydra:member"]))
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
            margin-top: 50px;
        }

    }

    @media screen and (max-width: 768px){
        #app{
                max-height:calc( 100vh - 180px );
        }

    }

</style>
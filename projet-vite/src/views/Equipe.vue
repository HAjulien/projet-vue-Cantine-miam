<template>
    <div id="app" class="bg-gray-200 dark:bg-gray-800 relative ">
        <div class="lg:py-2 py-3 px-3 lg:w-[60%] min-h-[90vh]
        bg-slate-100 mx-auto dark:bg-gray-700 ">
            <Accordion v-for="(equipe, index) in equipes" :key="index" :nom="equipe.nom" :prenom="equipe.prenom" :surnom="equipe.surnom"  :image="equipe.image" :description="equipe.imageDescription" :contenu="equipe.contenu" :bgcolor="equipe.bgcolor" :colorSurnom="equipe.colorSurnom" :colorSurnomContour="equipe.colorSurnomContour" :colorNom="equipe.colorNom" :colorNomContour="equipe.colorNomContour"  />
        </div>
        <div class="loading" v-if="isLoading">
            <Spinner/>
        </div>
    </div>
</template>

<script>

import Accordion from '../components/Accordion.vue' ;
import Spinner from '../components/Spinner.vue';
import ProgressBar from '../mixins/ProgressBar';
//import axios from 'axios';
import axiosInterceptor from '../axiosInterceptor'

export default {
    name:'equipe',
    mixins: [ProgressBar],
    components:{
        Accordion,
        Spinner
    },
    data() {

        return {
            equipes: [],
            isLoading: false,
        }
    },

    async created () {
        this.isLoading = true
        // await axios
        // .get("https://cantinemiam.herokuapp.com/api/equipes?page=1")
        // .then (response => (this.equipes = response.data["hydra:member"]))
        
        await axiosInterceptor.get("/equipes?page=1")
        .then (response => (this.equipes = response.data["hydra:member"]))
        this.isLoading = false
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
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 10;
    }



    @media screen and (min-width: 768px){

        #app{
            padding-top: 50px;
        }

    }

    @media screen and (max-width: 768px){
        #app{
                max-height:calc( 100vh - 165px );
        }

    }

</style>
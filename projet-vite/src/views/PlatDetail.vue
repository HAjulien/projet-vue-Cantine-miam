<template>
    <div>

        <h1
        class="lg:mt-[65px] text-center text-3xl underline underline-offset-4 decoration-4 font-bold"
        :style="{textDecorationColor: `${produit.category.couleur}`, color: `${produit.category.couleur}`}"
        > {{produit.nom}} </h1>

        <div class="flex items-center justify-around my-4" >
            <p  v-if="nbMaxCritiques > 0"  class=" text-4xl text-amber-400"  >
                {{moyenneNote}} <fa :style="{ height: '33px'}" icon="star" />
                
            </p> 
            <ul v-if="nbMaxCritiques > 0">
                <li class="jauge"
                :style="{width: `calc(( ${note0} / ${nbMaxCritiques} ) * 180px)`}">
                
                {{note0}}
                </li> 
                <li class="jauge"
                :style="{width: `calc(( ${note1} / ${nbMaxCritiques} ) * 180px)`}">
                
                    {{note1}} 
                </li> 
                <li class="jauge"
                :style="{width: `calc(( ${note2} / ${nbMaxCritiques} ) * 180px)`}">
                    {{note2}}  
                </li> 
                <li class="jauge"
                :style="{width: `calc(( ${note3} / ${nbMaxCritiques} ) * 180px)`}">
                    {{note3}}  
                </li> 
                <li class="jauge"
                :style="{width: `calc(( ${note4} / ${nbMaxCritiques} ) * 180px)`}"
                >
                    {{note4}}  
                </li> 
            </ul>
        </div>
        <article class="lg:w-[80%] mt-8 m-auto lg:flex lg:flex-row p-2 border-2 rounded-lg"
        :style="{border:`3px solid ${produit.category.couleur}` }"
        >
                <img :src="produit.image" :alt="produit.altImage" class="h-64 w-72 m-auto rounded-lg" >
                <p v-html=" produit.description"
                class="p-4"
                ></p>
        </article>

        <h2  class="lg:mt-[65px] text-center text-3xl  font-bold my-8"> Les critiques ({{ produit.critiques.length}}) </h2>
        <article class="lg:w-[80%] m-auto mb-12" v-for="(critique, index) in produit.critiques" :key="index">
                <p class=" flex justify-between px-8">
                    <span>{{critique.utilisateur.pseudo}}</span>
                    <span> le {{critique.createAt.substring(0 , 10)}} à {{critique.createAt.substring(11 , 16)}}</span>
                </p>
                <p class=" min-h-[150px] lg:flex items-center my-4">
                    <span  class="lg:p-16 p-4  text-4xl block text-center  font-bold"
                :class="critique.note < 2 ? 'text-red-500' : critique.note >=4 ? 'text-emerald-500' : 'text-amber-500'"
                    >{{critique.note}}
                    </span>
                    <span class="p-4">{{critique.contenu}}</span>
                </p>
        </article>





                <span>{{id}} ET {{user[0]}}</span>
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
            moyenneNote: 0,
            note0: 0,
            note1: 0,
            note2: 0,
            note3: 0,
            note4: 0,
            nbMaxCritiques:0

        }
    },
    created () {
        axios
        .get("https://cantinemiam.herokuapp.com/api/produits/" + this.id )
        .then(response => (this.produit = response.data))

    }, 
    mounted(){
        if(this.user[0]){
            axios
            .get("https://cantinemiam.herokuapp.com/critiques?page=1&produit=" + this.id + "&utilisateur.id=" + this.user[0] )
            .then(response => (this.critique = response.data["hydra:member"]));
            console.log(this.critique);
            console.log(this.user[0]);
        }

        for(let i = 0; i <  this.produit.critiques.length; i++){
            if ( this.produit.critiques[i].note )
            {
                this.moyenneNote += this.produit.critiques[i].note / this.produit.critiques.length
            }
        }
        for(let i = 0; i <  this.produit.critiques.length; i++){
            if ( this.produit.critiques[i].note >= 4 )
            {
                this.note4 += 1
            }else if( this.produit.critiques[i].note >= 3){
                this.note3 += 1
            }else if( this.produit.critiques[i].note >= 2){
                this.note2 += 1
            }else if( this.produit.critiques[i].note >= 1){
                this.note1 += 1
            }else{
                this.note0 += 1
            }
        }
        this.nbMaxCritiques = Math.max(this.note0, this.note1, this.note2, this.note3, this.note4)

    },


    

}
</script>

<style lang="scss" scoped>
    

    .jauge{
        position: relative;
        text-decoration: none;
        margin: 8px 0;
        height: 30px;
        background-color: $green;
        border-radius: 6px ;
        text-align: left;
        font-size: 22px;
        font-weight: 700;
        color: $principale;

    }
    .jauge::before{
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 128, 0, 0.165);
        border-radius: 6px;
        width: 180px;
        z-index: -1;

    }

</style>


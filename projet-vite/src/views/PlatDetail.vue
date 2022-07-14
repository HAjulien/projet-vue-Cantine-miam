<template>
    <div>

        <h1
        class="lg:mt-[65px] text-center text-3xl underline underline-offset-4 decoration-4 font-bold"
        :style="{textDecorationColor: `${produit.category.couleur}`, color: `${produit.category.couleur}`}"
        > {{produit.nom}} </h1>

        <div class="flex items-center justify-around my-4 m-auto" >
            <p  v-if="nbMaxCritiques > 0"  class=" text-4xl text-amber-400 flex grow justify-center"  >
                {{noteMoyenneArrondie}} <fa :style="{ height: '33px'}" icon="star" />           
            </p>
            <div class="flex justify-center grow"  v-if="nbMaxCritiques > 0">
                <ul>
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
                <ul>
                    <li class="jaugeValeur">0 à 1</li>
                    <li class="jaugeValeur">1 à 2</li>
                    <li class="jaugeValeur">2 à 3</li>
                    <li class="jaugeValeur">3 à 4</li>
                    <li class="jaugeValeur">4 à 5</li>
                </ul>
            </div>
        </div>
        <article class="lg:w-[80%] mt-8 lg:flex lg:flex-row mx-2 lg:m-auto border-2 rounded-lg"
        :style="{border:`3px solid ${produit.category.couleur}` }"
        >
                <img :src="produit.image" :alt="produit.altImage" class="h-64 w-72 m-auto lg:m-2 rounded-lg" >
                <p v-html=" produit.description"
                class="p-4"
                ></p>
        </article>

        <div v-if=" user[0] && !userCritique[0]" class=" py-3 justify-center items-center"> 
            <p class=" text-center text-2xl ">Note:</p>
            <Rating :grade="0" :maxHalfStars="10"/>
        </div>  

        <div class="critiqueUptade">
            <h2 v-if="userCritique[0]" > {{userCritique[0].id}} fxbcb</h2>

        </div>

        <h2  class="lg:mt-[65px] text-center text-3xl  font-bold my-8"> Les critiques ({{ produit.critiques.length}}) </h2>
        <article class="lg:w-[80%] mx-2 lg:m-auto lg:mb-6 mb-12 border-x border-b border-black rounded" v-for="(critique, index) in produit.critiques" :key="index" >
                <p  class=" flex justify-between px-2 lg:px-8 py-4 border-b-2 border-black"
                :class=" user[0]  == critique.utilisateur.id ? 'maCritique' : 'border-y'"
                >
                    <span class="font-bold">{{critique.utilisateur.pseudo}}</span>

                    <span> le {{critique.createAt.substring(0 , 10)}} à {{critique.createAt.substring(11 , 16)}}</span>
                </p>
                <p class="  lg:flex items-center justify-between m-2">
                    <span  class="lg:p-12  text-4xl block text-center  font-bold"
                :class="critique.note < 2 ? 'text-red-500' : critique.note >=4 ? 'text-emerald-500' : 'text-amber-500'"
                    >{{critique.note}}
                    </span>
                    <span class="p-4">{{critique.contenu}}</span>
                    <span class="block my-2 text-right  lg:mx-4 "
                    v-if=" user[0]  == critique.utilisateur.id"
                    >
                    <fa :style="{ height: '28px'}" class="cursor-pointer text-red-600" icon="trash" @click="avis()" />
                    </span>
                </p>
        </article>



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
            userCritique: [],
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
            .get("https://cantinemiam.herokuapp.com/api/critiques?page=1&produit=" + this.id + "&utilisateur.id=" + this.user[0] )
            .then(response => (this.userCritique = response.data["hydra:member"]));
            console.log(this.userCritique);
            //console.log(this.user[0]);
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
    computed:{
    noteMoyenneArrondie: function(){
        return Math.round(this.moyenneNote * 10) /10
        }
    },
    methods: {
        avis(){
            //console.log(this.userCritique[0].id);
            axios
            .delete(`https://cantinemiam.herokuapp.com/api/critiques/${this.userCritique[0].id}`, {
                headers: {
                    'Authorization': 'Bearer ' + this.token
                }
            })
            .then(function (response) {
            console.log(response);
            location.reload();

            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
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
    .jaugeValeur{
        position: relative;
        text-decoration: none;
        margin: 8px 0;
        margin-left: 5px;
        height: 30px;
        font-size: 15px;
        font-size: 20px;
        font-weight: 600;
        color: $green;
    }

    .maCritique{
        background-color: $green;
        color: #f8f8f8;
        border-top: 1px solid black;
        border-radius: 4px;

        
        
    
    }
</style>


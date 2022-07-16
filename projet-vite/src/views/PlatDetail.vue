<template>
    <div id="app" class=" bg-gray-100  dark:bg-gray-700 dark:text-gray-100 ">

        <h1
        class="lg:mt-[65px] text-center text-3xl underline underline-offset-4 decoration-4 font-bold"
        :style="{textDecorationColor: `${produit.category.couleur}`, color: `${produit.category.couleur}`}"
        > {{produit.nom}}
        </h1>

        <div class="flex items-center justify-around my-4 m-auto" >
            <div class=" flex flex-col  grow justify-center text-amber-400" >
                <p  v-if="nbMaxCritiques > 0"  class=" text-4xl  flex grow justify-center"  >
                    {{noteMoyenneArrondie}} <fa :style="{ height: '33px'}" icon="star" />
                </p>
                <span class="text-center text-lg"> ({{ produit.critiques.length}} avis)  </span>
            </div>
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
                    :style="{width: `calc(( ${note4} / ${nbMaxCritiques} ) * 180px)`}">
                        {{note4}}  
                    </li> 
                </ul>
                <ul>
                    <li class="jaugeValeur">0 <fa :style="{ height: '17px'}" icon="star" /> </li>
                    <li class="jaugeValeur">1 <fa :style="{ height: '17px'}" icon="star" /> </li>
                    <li class="jaugeValeur">2 <fa :style="{ height: '17px'}" icon="star" /> </li>
                    <li class="jaugeValeur">3 <fa :style="{ height: '17px'}" icon="star" /> </li>
                    <li class="jaugeValeur">4 <fa :style="{ height: '17px'}" icon="star" /> </li>
                </ul>
            </div>
        </div>
        
        <article class="lg:w-[80%] mt-8 pt-2 lg:flex lg:flex-row mx-2 lg:m-auto border-2 dark:bg-gray-600 rounded-lg"
        :style="{border:`3px solid ${produit.category.couleur}` }"
        >
            <img :src="produit.image" :alt="produit.altImage" class="h-64 w-72 m-auto lg:m-2 rounded-lg" >
            <div>
                <p v-html=" produit.description"
                class="p-4"
                >
                </p>
                <p class="w-24 mb-4 lg:mt-4 m-auto py-0.5 px-2 text-xl text-center rounded bg-emerald-300 dark:text-black"> {{ produit.prixAchat}} € </p>
            </div>
        </article>

        <div v-if=" user[0] && !userCritique[0]" class=" py-3 justify-center items-center "> 
            <p class=" text-center text-2xl ">A vous de noter:</p>
            <Rating :grade="0" :maxHalfStars="10"/>
        </div>  

        <div class="lg:w-[80%] my-6 mx-2 relative lg:mx-auto p-2 border-2 border-black flex flex-col items-center space-y-3 rounded-xl  dark:bg-gray-600"
        v-if="userCritique[0] "  v-show="isHiddenCritique">
            <h2 class=" text-2xl font-bold"> Ma Critique</h2>
            <span class=" text-3xl text-amber-400 flex grow justify-center items-center"  >
                {{userCritique[0].note}} <fa :style="{ height: '25px'}" icon="star" />
            </span>
            <p>
                {{userCritique[0].contenu}}
            </p>
            <div class="flex justify-around w-full">
                <button @click="modifierCritique()" class="px-2 py-1 bg-amber-300 hover:text-slate-200 rounded hover:bg-amber-600 "> Modifier</button>
                <button @click="avis()" class="px-2 py-1 bg-red-400  rounded hover:bg-red-700 hover:text-slate-100" > Supprimer</button>
            </div>

        </div>

        <div v-show="isHidden" class=" py-4">
            <form action=""    @submit.prevent="submit"  method="POST"
            class="flex flex-col space-y-4 w-[80%] lg:w-[650px] m-auto border-2 border-black p-4"
            >
                <input type="number" name="maNote" id="maNote" v-model="form.note" step="0.5">
                
                <textarea  name="maCritique" id="maCritique" v-model="form.contenu" cols="30" rows="8" placeholder="Votre avis nous intéresse "> </textarea>
                <div class="flex item-center justify-around">
                    <button type="submit" class="px-2 py-0.5 bg-emerald-400 rounded"> envoyer</button>
                    <button type="reset" class="px-2 py-0.5 bg-red-400 rounded" @click="annuler()" > annuler</button>
                </div>
            </form> 
        </div>
        <h2 v-if="produit.critiques.length > 0"  class="lg:mt-[65px] text-center text-3xl  font-bold my-8"> Les critiques ({{ produit.critiques.length}}) </h2>
        <h2 v-else  class="lg:mt-[65px] text-center text-3xl  font-bold my-8"> Aucune critique </h2>
        <article 
        class="lg:w-[80%] mx-2 lg:m-auto lg:mb-6 mb-12 border-x border-b border-black dark:border-gray-400 dark:bg-gray-600 rounded"
        v-for="(critique, index) in critiquesOrderDESC" :key="index">
                <p  class=" flex justify-between px-2 lg:px-8 py-4 border-b-2 border-black dark:border-gray-400"
                :class=" user[0]  == critique.utilisateur.id ? 'maCritique' : 'border-y'"
                >
                    <span class="font-bold">{{critique.utilisateur.pseudo}}</span>

                    <span> le {{critique.createAt.substring(8 , 10)}}/{{critique.createAt.substring(5 , 7)}}/{{critique.createAt.substring(0 , 4)}}
                        à {{critique.createAt.substring(11 , 16)}}</span>
                </p>
                <div class="  lg:flex items-center justify-between m-2">
                    <span  class="lg:p-12  text-4xl block text-center  font-bold"
                    :class="critique.note < 2 ? 'text-red-500' : critique.note >=4 ? 'text-emerald-500' : 'text-amber-500'"
                    >{{critique.note}}
                    </span>
                    <p class="p-4  grow">{{critique.contenu}}</p>
                    <span class="block my-2 text-right  lg:mx-4 "
                    v-if=" user[0]  == critique.utilisateur.id"
                    >
                        <fa :style="{ height: '28px'}" class="cursor-pointer text-red-600" icon="trash" @click="avis()" />
                    </span>
                </div>
        </article>

    </div>
</template>

<script>
import axios from 'axios';
import Login_logout from '../mixins/Login_logout'
import Rating from '../components/Rating.vue';
import ProgressBar from '../mixins/ProgressBar';

export default {
    name:'platDetail',
    mixins: [Login_logout, ProgressBar], 
    components:{
        Rating,

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
            nbMaxCritiques:0,
            isHidden : false,
            isHiddenCritique : true,
            form :{
            note: 0,
            contenu: "",
            }
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

        if(this.produit){
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
        }

    },
    computed:{
    noteMoyenneArrondie: function(){
        return Math.round(this.moyenneNote * 10) /10
        },
    critiquesOrderDESC: function(){
        let critiques = this.produit.critiques
        return critiques.reverse()
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
        },
        modifierCritique(){
            let maNote = this.userCritique[0].note
            let maCritique = this.userCritique[0].contenu
            console.log(maNote)
            this.form.note = maNote
            this.form.contenu = maCritique
            this.isHiddenCritique = false
            this.isHidden = true
        },
        annuler(){
            this.isHiddenCritique = true
            this.isHidden = false
        },
        submit(){
            axios
            .put(`https://cantinemiam.herokuapp.com/api/critiques/${this.userCritique[0].id}`, this.form, {
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                },
            })
            .then(function (response) {
            console.log(response);
            location.reload();

            })
            .catch(function (error) {
                console.log(error);
            });
        }
    },
    watch: {
        'form.contenu'(newVal, oldVal){
            if (newVal.length > oldVal.length ) {
                clearTimeout(this.timeoutId)
                this.timeoutId = setTimeout(function(){
                    console.log("test");
                },1000)
            }
        }
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
        z-index: 1;

        
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
        z-index: 1;

    }

    .maCritique{
        background-color: $green;
        color: #f8f8f8;
        border-top: 1px solid black;
        border-radius: 4px;
    }

</style>


<template>
    <div id="app" class=" bg-gray-100  dark:bg-gray-700 dark:text-gray-100 min-h-[90vh]">

        <div class="fixed top-[10%] left-[50%] w-[250px] translate-x-[-50%] h-20 
        z-10 rounded-md border-2 border-amber-300 p-2 "
        :class="{ 'bg-slate-200': isAttempModif, 'bg-red-400/95': hasErrorModif, 'bg-emerald-300/95' : isSucceedModif }"
        v-if="isLoading"> 
            <p class="flex items-center justify-center text-center w-full h-full text-lg" > {{ modifText }} </p>
        </div>

        <div class="modaleSuppression "  v-if="isSuppress" >
            <div class="w-[98%] inset-2/4 translate-x-[-50%] max-w-[700px] h-[400px] max-h-[400px] bg-gray-100 border-4 border-red-500 absolute top-[20%]  dark:bg-gray-600">
                <h3 class="text-center text-lg mt-[150px]">Voulez vous vraiment supprimer votre commentaire ?</h3>
                <div class="mt-12 flex items-center justify-around text-xl">
                    <button @click="supprimerCritique()" class="px-2 py-1 bg-red-400 rounded hover:bg-red-700 hover:text-slate-100" > Supprimer</button>
                    <button class="px-2 py-1 bg-amber-400 rounded hover:bg-red-700 hover:text-slate-100" @click="isSuppress = false"> annuler</button>
                </div>
            </div>
        </div>
        <h1
        class="lg:mt-[65px] text-center text-3xl underline underline-offset-4 decoration-4 font-bold m-4 leading-relaxed"
        :style="{textDecorationColor: `${produit.category.couleur}`, color: `${produit.category.couleur}`}"
        > {{produit.nom.toUpperCase()}}
        </h1>

        <NoteDetail :produit="produit" />
        
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

        <div v-if=" user && !userCritique[0]" class=" py-3 justify-center items-center "> 
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
                <button @click="isSuppress = true" class="px-2 py-1 bg-red-400  rounded hover:bg-red-700 hover:text-slate-100" > Supprimer</button>

            </div>
        </div>
        <div v-show="isHidden" class=" py-4">
            <form action="" @submit.prevent="submit"  method="POST"
            class="flex flex-col space-y-4 w-[80%] lg:w-[650px] m-auto border-2 border-black p-4"
            >
                <input type="number" name="maNote" id="maNote" v-model="form.note" step="0.5" class="dark:bg-gray-600 bg-gray-100  border-2 border-black">
                
                <textarea  name="maCritique" id="maCritique" v-model="form.contenu" cols="30" rows="8" placeholder="Votre avis nous intéresse " class=" bg-gray-100 dark:bg-gray-600  border-2 border-black p-2"> </textarea>
                <div class="flex item-center justify-around">
                    <button type="submit" class="px-2 py-0.5 bg-emerald-400 rounded"> envoyer</button>
                    <button type="reset" class="px-2 py-0.5 bg-red-400 rounded" @click="annuler()" > annuler</button>
                </div>
            </form> 
        </div>
        
        <AllCritiquesUnProduit :produit="produit" :isSuppress="isSuppress" @sendSupress="setSupress" />

    </div>
</template>

<script>
import axios from 'axios';
import Login_logout from '../mixins/Login_logout'
import ProgressBar from '../mixins/ProgressBar';
import Rating from '../components/Rating.vue';
import NoteDetail from '../components/NoteDetail.vue';
import AllCritiquesUnProduit from '../components/AllCritiquesUnProduit.vue';

export default {
    name:'platDetail',
    mixins: [Login_logout, ProgressBar], 
    components:{
        Rating,
        NoteDetail,
        AllCritiquesUnProduit

    },
    data() {
        return {
            lienAPI: "https://cantinemiam.herokuapp.com/api/",
            id:this.$route.params.id,
            produit: [],
            userCritique: [],
            isLoading : false,
            isHidden : false,
            isSuppress : false,
            isHiddenCritique : true,
            form :{
            note: 0,
            contenu: "",
            },
            modifText : "modification en cours...",
            isAttempModif: true,
            hasErrorModif: false,
            isSucceedModif : false
        }
    },
    created () {
        axios
        .get(this.lienAPI + "produits/" + this.id )
        .then(response => (this.produit = response.data))

    }, 
    mounted(){
        console.log(this.user);
        if(this.user){
            axios
            .get(this.lienAPI + "critiques?page=1&produit=" + this.id + "&utilisateur.id=" + this.user.id )
            .then(response => (this.userCritique = response.data["hydra:member"]));
        }

    },

    methods: {
        async supprimerCritique(){
            this.isLoading = true
            this.modifText = 'demande de suppresion en cours...'
            //console.log(this.userCritique[0].id);
            try{
                const deleteCritique = await axios.delete(this.lienAPI + `critiques/${this.userCritique[0].id}`, {
                    headers: {
                        'Authorization': 'Bearer ' + this.token
                    }
                })
                if(deleteCritique.status === 204){
                    this.isAttempModif = false,
                    this.isSucceedModif = true
                    this.modifText = 'Suppression réussie'
                    await new Promise(resolve => setTimeout(resolve, 1200));
                    location.reload();
                };
            }
            catch(error) {
                console.error(error);
                this.isAttempModif = false,
                this.hasErrorModif = true
                this.modifText = 'Une erreur est survenue, veuillez réessayer'
                await new Promise(resolve => setTimeout(resolve, 2000));

            } finally {
                this.isLoading = false
                this.isAttempModif = true
                this.isSucceedModif = false
                this.hasErrorModif = false
                this.modifText = "modification en cours..."

            }
        },
        setSupress (sendSuppress) {
            this.isSuppress = sendSuppress;
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
        async submit(){
            this.isLoading = true
            try{
                const modifyCrit = await axios.put(this.lienAPI + `critiques/${this.userCritique[0].id}`, this.form, {
                    headers: {
                        'Authorization': 'Bearer ' + this.token,
                    },
                })
                if(modifyCrit.status === 200){
                    this.isAttempModif = false,
                    this.isSucceedModif = true
                    this.modifText = 'Modification confirmer'
                    await new Promise(resolve => setTimeout(resolve, 1200));
                    location.reload();
                };
            }
            catch(error) {
                console.error(error);
                this.isAttempModif = false,
                this.hasErrorModif = true
                this.modifText = 'Une erreur est survenue, veuillez réessayer'
                await new Promise(resolve => setTimeout(resolve, 2000));

            } finally {
                this.isLoading = false
                this.isAttempModif = true
                this.isSucceedModif = false
                this.hasErrorModif = false
                this.modifText = "modification en cours..."

            }
        }
    },
    // watch: {
    //     'form.contenu'(newVal, oldVal){
    //         if (newVal.length > oldVal.length ) {
    //             clearTimeout(this.timeoutId)
    //             this.timeoutId = setTimeout(function(){
    //                 console.log("test");
    //             },1000)
    //         }
    //     }
    // },

}
</script>

<style lang="scss" scoped>

    #app{
        width: 100vw;
        overflow: scroll;
        overflow-x: hidden;   
    }

    .modaleSuppression{
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 100;
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
</style>


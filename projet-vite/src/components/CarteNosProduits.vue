<template>
    <router-link :to="'/platDetail/' + id">
        <div class=" card inline-block w-[46%] mx-[2%] sm:w-[29%] lg:w-[23%] my-16 lg:mx-[1%] relative
        bg-slate-50 dark:bg-gray-600 
        rounded-lg
        "
        :style="{border:`3px solid ${bgcolor}` }"    
        >
            <img :src="image" :alt="altImage" class="w-[80%]  h-[110px] sm:h-[130px] lg:h-[200px] my-3 m-auto rounded-lg
            absolute top-[-30%] left-[10%]
            ">

            <span 
            :style="{backgroundColor: bgcolor }"
            class=" py-1 px-2 m-auto rounded-lg
            absolute top-[-22%] left-[12%]
            text-xs  md:text-lg text-gray-50
            "> 
                {{category}}
            </span>

            <h2 class="text-center sm:text-xl text-lg absolute
            pb-4 top-[70px] sm:top-[90px] lg:top-[140px]  left-0 right-0
            ">
                {{nom}}
            </h2 >

            <h3 class="text-center text-xl absolute
            pb-4 top-[120px]  sm:top-[130px] lg:top-[180px]  left-0 right-0"
            v-if=" moyenneNote > 0">
                <span class="text-amber-300" v-for="(note, index) in (noteMoyenneTronque)" :key="index"><fa :style="{ height: '23px'}" icon="star" /></span>
                <span class="text-amber-300" v-if="moyenneNote - noteMoyenneTronque >= 0.5 " ><fa :style="{ height: '23px'}" icon="star-half" /></span>
                <span class="text-xs block"> {{noteMoyenneArrondie}} / 5 </span>

            </h3>

            <h3 class="text-center text-xl absolute
            pb-4 top-[130px] lg:top-[180px]  left-0 right-0"
            v-else>
                <span v-for= "n in 5" :key="n" class="text-gray-500 dark:text-black"> <fa :style="{ height: '23px'}" icon="star"/> </span> 
            </h3>

            <div class="lg:pt-[160px] pt-[130px] ">

                <div class="flex justify-between items-center px-1 lg:pt-16 pt-[40px] pb-4 lg:px-4 text-xs lg:text-base">
                    <span v-if="critiques.length >= 1"  class="py-1 lg:px-3 px-2 bg-sky-500 rounded-3xl text-zinc-100 "> {{critiques.length}} avis</span>
                    <span v-else  class="py-1 lg:px-3 px-2 bg-sky-500 rounded-3xl text-zinc-100"> 0 avis</span>
                    <span class="py-1 px-3 bg-emerald-300 rounded-3xl text-zinc-700 ">{{prixAchat}}€ </span> 
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
import {calculateMoyenne} from '../mixins/helpers'

export default {
    name:'carteNosProduits',
    props: {
        id: Number,
        nom: String,
        image: String,
        altImage: String,
        prixAchat: Number,
        category: String,
        bgcolor: String,
        critiques: Object,

    },
    data() {
        return {
            moyenneNote: 0,
        }
    },
    created() {
        const hasNoCritique = Object.keys(this.critiques).length === 0
        if(hasNoCritique) return this.moyenneNote = 0

        this.moyenneNote = calculateMoyenne(this.critiques)


    },
    computed:{
        noteMoyenneTronque: function(){
            return Math.floor(this.moyenneNote)
        },
        noteMoyenneArrondie: function(){
            return Math.round(this.moyenneNote * 10) /10
        },
    },
    // on reinitialise pour modifier note et etoile lors d'une requette axios
    updated() {
        const hasNoCritique = Object.keys(this.critiques).length === 0
        if(hasNoCritique) return this.moyenneNote = 0
        
        this.moyenneNote = calculateMoyenne(this.critiques)

    }
    

}
</script>

<style>

</style>
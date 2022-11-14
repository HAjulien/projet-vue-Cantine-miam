<template >
    <div>
        <h2 v-if="produit.critiques.length > 0"  class="lg:mt-[65px] text-center text-3xl  font-bold my-8"> Les critiques ({{ produit.critiques.length}}) </h2>
        <h2 v-else  class="lg:mt-[65px] text-center text-3xl  font-bold my-8"> Aucune critique </h2>
        <article 
        class="lg:w-[80%] mx-2 lg:m-auto lg:mb-6 mb-12 border-x border-b border-black dark:border-gray-400 dark:bg-gray-600 rounded"
        v-for="(critique, index) in critiquesOrderDESC" :key="index">
            <p  class=" flex justify-between px-2 lg:px-8 py-4 border-b-2 border-black dark:border-gray-400"
            :class=" user.id  == critique.utilisateur.id ? 'maCritique' : 'border-y'"
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
                v-if=" user.id  == critique.utilisateur.id"
                >
                    <fa :style="{ height: '28px'}" class="cursor-pointer text-red-600" icon="trash" @click="modaleSupress" />
                </span>
            </div>
        </article>
    </div>
</template>
<script>
import Login_logout from '../mixins/Login_logout'

export default {
    name: "allCritiquesUnProduit",
    mixins: [Login_logout], 
    props: {
        produit: Object,
        isSuppress : Boolean
    },
    data() {
        return {
            sendSuppress : true
        }
    },

    computed:{
    critiquesOrderDESC: function(){
        let critiques = this.produit.critiques
        return critiques.reverse()
        }
    },
    methods: {
        modaleSupress(){
            this.$emit('sendSupress', this.sendSuppress);
        }
    },
}
</script>

<style lang="scss" scoped>
    .maCritique{
        background-color: $green;
        color: #f8f8f8;
        border-top: 1px solid black;
        border-radius: 4px;
    }

</style>
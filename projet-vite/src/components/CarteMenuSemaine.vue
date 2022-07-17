<template>
    <div>
        <router-link :to="'/platDetail/' + id">
            <article class="cursor-auto	">
                <div v-if="categorie == type"  class=" p-2 flex flex-col items-center justify-between  m-2 space-y-4 md:h-[300px]  md:w-[200px] lg:w-[240px] md:mx-6 rounded-lg transition-all hover:transition-all hover:bg-amber-400/30  dark:bg-gray-600"
                :style="{border:`3px solid ${couleur}` }"
                >
                    <img :src="image" :alt="altImage" class="w-[80%] rounded-lg md:w-48 md:h-40 " >
                    <h3 class="text-xl text-center  underline underline-offset-2 decoration-[3px] "
                    :style="{textDecorationColor:couleur }"
                    > {{nom}} </h3>
                    <span class="px-3 py-0.5 bg-emerald-200 rounded-xl dark:bg-emerald-700"> {{prix}} €</span>
                </div>
            </article>
        </router-link>
    </div>
</template>

<script>

export default {
    name:'CarteMenuSemaine',
    props: {
        id: Number,
        categorie: String,
        type: String,
        couleur: String,
        image: String,
        altImage: String,
        nom: String,
        prix: Number

        },

}
</script>


<style>

</style>
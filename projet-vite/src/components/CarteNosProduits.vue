<template>
        <div class=" inline-block w-full min-h-[400px] lg:w-[23%] lg:m-[1%] lg:min-h-[40vh] 
        bg-slate-600
        rounded-lg
        ">
            <h2 class="text-center text-slate-200 text-xl
            pt-2
            ">
                {{nom}} {{category}}
            </h2>
            <p  class="text-center text-slate-200 text-xl
            pt-2
            ">
                {{prixAchat}} €
            </p> 
            <p v-for="(note, index) in notes" :key="index" class="text-center text-slate-200 text-xl" >
                {{note.note }} 
            </p>
            <img :src="image" :alt="altImage" class="w-[80%] h-[200px] my-3 m-auto rounded-lg">
        </div>
</template>

<script>

export default {
    name:'carteNosProduits',
    props: {
        nom: String,
        image: String,
        altImage: String,
        prixAchat: Number,
        category: String,
        notes: Array,

    },
    data() {
        return {
        }
    },

}
</script>

<style>

</style>
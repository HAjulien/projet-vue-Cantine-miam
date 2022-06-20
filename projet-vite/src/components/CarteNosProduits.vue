<template>
        <div class=" inline-block w-[46%] mx-[2%]  lg:w-[23%] my-16 lg:mx-[1%] relative 
        bg-slate-50 dark:bg-gray-600 
        rounded-lg
        "
        :style="{border:`3px solid ${bgcolor}` }"    
        >
            <img :src="image" :alt="altImage" class="w-[80%]  h-[120px] lg:h-[200px] my-3 m-auto rounded-lg
            absolute top-[-30%] left-[10%]
            ">
            <span 
            :style="{backgroundColor: bgcolor }"
            class=" py-1 px-2 m-auto rounded-lg
            absolute top-[-22%] left-[12%]
            text-xs  md:text-lg text-gray-50
            "> {{category}} </span>


                <h2 class="text-center text-xl absolute
                pb-4 top-[75px] lg:top-[140px]  left-0 right-0
                ">
                    {{nom}} 
                </h2 >
            <div class="lg:pt-[160px] pt-[130px] ">
                <span v-if="notes.length > 0"  >
                    <span v-for="(note, index) in notes" :key="index" class="text-center text-xl" > {{ note.note }}</span>
                </span>
                    <p v-else  class="text-center text-xl"> Non noté</p>

                <div class="flex justify-between items-center px-1 lg:pt-16 pt-4 pb-4 lg:px-4 text-xs lg:text-base">
                    <span v-if="notes.length > 1"  class="py-1 lg:px-3 px-2 bg-sky-500 rounded-3xl text-zinc-100 "> {{notes.length}} avis</span>
                    <span v-else  class="py-1 lg:px-3 px-2 bg-sky-500 rounded-3xl text-zinc-100"> 0 avis</span>
                    <span class="py-1 px-3 bg-emerald-300 rounded-3xl text-zinc-700 ">{{prixAchat}}€ </span> 
                </div>
            </div>
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
        bgcolor: String,
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
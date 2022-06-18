<template>
    <div class="dark:bg-gray-600 py-4 ">
        <h2 
        class=" soustitreEquipe  lg:w-[40%] lg:m-auto lg:mb-4 lg:mt-16
        px-2 py-4 w-[80%] m-auto  mb-4 
        text-4xl text-center lg:text-5xl
        rounded-lg" 
        :style="{ backgroundColor: bgcolor +'40', color: colorSurnom, textStrokeColor: colorSurnomContour }">
            {{surnom}} 
        </h2>
        <div class="relative cursor-pointer w-[80%] m-auto  lg:w-[40%] lg:m-auto "
        @click=" isOpen = !isOpen "
        >
            <h1 class=" titreEquipe absolute
            top-[40%] left-4 w-36 
            font-extrabold text-3xl md:text-7xl leading-[40px]
            translate-y-[-50%] "
            :style="{ color: colorNom , textStrokeColor: colorNomContour}"
            >
            <span class="tracking-wider"> {{prenom}} </span> {{nom}}
            </h1>
            <img v-bind:src="image" :alt="description" class="rounded-xl  w-[90wv]"
            >
        </div>

        <div :class=" isOpen ? 'd-block' : 'hidden'"
            class=" w-[95vw] m-auto mt-[-100px] p-4 pt-[120px]  lg:w-[40%] lg:m-auto lg:mt-[0px] lg:pt-12 lg:p-12 lg:mt-4
            bg-gray-100 dark:bg-gray-500 dark:text-gray-200  lg:text-xl
            border-2 border-indigo-600 rounded-lg"
        
        >

            <p v-html="contenu"></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Accordion',
    props: {
        nom: String,
        prenom: String,
        surnom: String,
        image: String,
        description: String,
        contenu: String,
        bgcolor: String,
        colorSurnom: String,
        colorSurnomContour: String,
        colorNom: String,
        colorNomContour: String,
    },

    data() {
        return {
            isOpen: false,
        }
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
.titreEquipe{
    font-family: 'Satisfy', cursive;
    -webkit-text-stroke-width: 0.5px;
}
.soustitreEquipe{
    font-family: 'Satisfy', cursive;
    -webkit-text-stroke-width: 1.6px;
}

</style>
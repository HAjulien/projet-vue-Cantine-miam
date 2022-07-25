<template>
<footer class=" bg-gray-200 dark:bg-gray-700 dark:text-slate-100  ">

    <ReseauxSociaux/>

    <div class="flex justify-around items-center  m-1 border border-black  h-64 dark:border-white">

        <div class="flex flex-col justify-center flex-1 p-4 border-r border-black h-full dark:border-white">

            <Logo/>

            <p class="my-4">
                Notre but est de mettre à l'honneur les produits régionaux tout en respectant notre planète. Venez redécouvrir la cantine. 
            </p>
            <span>©  2022 Cantime MIAM - tous droits réservés.</span>

        </div >

        <div class="flex flex-col items-center justify-center flex-1  h-full">
            <h3 class="font-bold mb-4 underline underline-offset-4 underline underline-offset-4 decoration-4 decoration-[#cda673]">Nous contacter: </h3>

            <address class="my-2">
                <a href="https://www.bing.com/maps?osid=5525163d-5616-491e-b390-5aa3aff32eef&cp=48.786822~2.430701&lvl=16&v=2&sV=2&form=S00027" target="_blank" class="flex flex-col items-center justify-center"> 
                    <p> 9 rue Seguin 94 000 Créteil </p>
                    <p> Bâtiment 4, 2eme étage</p>
                </a>
            </address>

            <div class="flex flex-col items-center justify-center">
                <h4>téléphone: </h4>
                <a href="tel=+33100000000"  >  01 00 00 00 00</a>
            </div>

            <div class="flex flex-col items-center justify-center">
                <h4>email:</h4>
                <a href="mailto:cantinemiam@gmail.com" > cantinemiam@gmail.com</a>
            </div>
            
        </div>

        <div class="flex flex-col items-center justify-center flex-1 h-full border-l border-black dark:border-white">
            <ul  class="flex flex-col items-center justify-start "> 
                <h3 class="font-bold mb-4 underline underline-offset-4 underline underline-offset-4 decoration-4 decoration-[#cda673]">Plus d'information:</h3>
                <li
                v-for="info in infos" v-bind:key="info.id ">              
                    <router-link :to="{path:info.chemin}">    {{ info.list }}  </router-link>
                </li>
            </ul>
        </div>

    </div>
</footer>
</template>

<script>
import Logo from './Logo.vue'
import ReseauxSociaux from './ReseauxSociaux.vue'

export default {
    name: 'FooterDesktop',
    components: {
        Logo,
        ReseauxSociaux,
    },
    data() {
        return{

        infos: [
            {chemin:'/informations', list:"Nos mesures d'hygiène", id:1},
            {chemin:'/informations', list:"Comment les menu sont élaborés?", id:2},
            {chemin:'/informations', list:"Notre engagement sur le développement durable", id:3},
            {chemin:'/informations', list:"Notre politique de confidentialité", id:4},
        ],
        }

    },

}
</script>

<style lang="scss" scoped>


li{
    margin: 3px 0;
    text-align: center;
}


a{
    transition: all .2s ease-in-out;
}

a:hover{
    color: $principale;
    transition: all .2s ease-in-out;
}

@media screen and (max-width: 767.9px){
    footer{
        display: none;
    }

    
}


</style>
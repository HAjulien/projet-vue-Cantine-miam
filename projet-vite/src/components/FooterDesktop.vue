<template>
<footer class=" bg-gray-200 dark:bg-gray-700 dark:text-slate-100 ">

   <ReseauxSociaux/>

    <div class="flex justify-around items-center ">

        <div class="flex flex-col justify-start flex-1 p-4">

            <Logo/>

            <p class="my-4">
                We are an award-winning creative agency, dedicated to the best result in web design, promotion, business consulting, and marketing.
            </p>
            <span>©  2022 Cantime MIAM - tous droits réservés.</span>

        </div>

        <div class="flex flex-col items-center justify-start flex-1">
            <h3 class="font-bold mb-4">Nous contacter: </h3>
            <address  class="flex flex-col items-center justify-center">
                <p> 9 rue Seguin 94 000 Créteil </p>
                <p> Bâtiment 4, 2eme étage</p>
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

        <div class="flex flex-col items-center justify-center flex-1 ">
            <ul  class="flex flex-col items-center justify-start "> 
                <h3 class="font-bold mb-4">Plus d'information:</h3>
                <li
                v-for="info in infos" v-bind:key="info.id ">              
                    <a :href="info.href">    {{ info.list }}  </a>
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
            {href:'#', list:"Nos mesures d'hygiène", id:1},
            {href:'#', list:"Comment les menu sont élaborés?", id:2},
            {href:'#', list:"Notre engagement sur développement durable", id:3},
            {href:'#', list:"Notre politique de confidentialité", id:4},
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
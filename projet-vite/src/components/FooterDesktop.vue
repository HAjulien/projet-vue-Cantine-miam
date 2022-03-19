<template>
<footer class=" bg-gray-200 dark:bg-gray-700 dark:text-slate-100 ">

    <ul class="flex justify-around items-center icone mx-0.5 mb-2">
        <li>
            <a href="https://www.facebook.com" target="_blank " @click=" icon1 = !icon1">
                <fa :style="{ height: '40px'}" :icon="[ 'fab', 'facebook' ]" :class="[icon1 ? 'text-blue-800' : 'text-blue-300']"/>
            </a>       
        </li>

        <li>
            <a href="https://www.instagram.com" target="_blank" @click=" icon2 = !icon2">
                <fa :style="{ height: '40px'}" :icon="[ 'fab', 'instagram' ]" :class="[icon2 ? 'text-violet-700' : 'text-stone-400']"/>
            </a>
        </li>

        <li>
            <a href="https://twitter.com" target="_blank" @click=" icon3 = !icon3">
                <fa :style="{ height: '40px'}" :icon="[ 'fab', 'twitter' ]" :class="[icon3 ? 'text-sky-400' : 'text-zinc-400']"/>
            </a> 
        </li>

        <li>
            <a href="https://youtube.com" target="_blank" @click=" icon4 = !icon4">
                <fa :style="{ height: '40px'}" :icon="[ 'fab', 'youtube' ]" :class="[icon4 ? 'text-red-600' : 'text-amber-600']"/>
            </a> 
        </li>
    </ul>

    <div class="flex justify-around items-center ">

        <div class="flex flex-col justify-start flex-1 p-4">
            <router-link to="/" >
                <transition name="fade" mode="out-in">
                    <img src="../assets/images/logo.png" class="  w-24 h-10 ml-3" v-if="!dark" /> 
                    <img src="../assets/images/logoSecondaire.png" class="  w-24 h-10 ml-3" v-else /> 
                </transition>
            </router-link> 

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
                    <a href="#">    {{ info.list }}  </a>
                </li>
            </ul>
        </div>

    </div>
</footer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'FooterDesktop',
    data() {
        return{
        icon1: true,
        icon2: true,
        icon3: true,
        icon4: true,
        infos: [
            {list:"Nos mesures d'hygiène", id:1},
            {list:"Comment les menu sont élaborés?", id:2},
            {list:"Notre engagement sur développement durable", id:3},
            {list:"Notre politique de confidentialité", id:4},
        ],
        }

    },

    computed: {
      ...mapGetters(['dark']),
    },

}
</script>

<style lang="scss" scoped>


li{
    margin: 3px 0;
    text-align: center;
}


.icone li{
    flex-grow: 1;
    border-right: 3px solid $green;
    border-bottom: 3px solid $green;
    border-top: 3px solid $green;
    padding: 5px;
    transition: all .2s ease-in-out;
}

.icone li:first-child{
    border-left: 3px solid $green;
}

.icone li:hover{
    background-color: $principale;
    transition: all .2s ease-in-out;
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
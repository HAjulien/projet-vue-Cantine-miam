<template>
<footer class=" bg-gray-200 dark:bg-gray-700 dark:text-slate-100 ">

    <ul class="flex justify-around items-center icone mx-0.5 mb-2">
        <li
        v-for="icone in icones" v-bind:key="icone.id ">              

            <a :href="icone.href" target="_blank " @click=" icone.number = !icone.number">
                <fa :style="{ height: '40px'}" :icon="[ 'fab', icone.fa ]" :class="[icone.number ? icone.color1 : icone.color2 ]"/>
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
        icones:[
            {href: 'https://www.facebook.com', fa: 'facebook', number:'icon1' , color1:'text-blue-800', color2:'text-blue-300', id:1},
            {href: 'https://www.instagram.com', fa: 'instagram', number:'icon2' , color1:'text-violet-700', color2:'text-stone-400', id:2},
            {href: 'https://www.twitter.com', fa: 'twitter', number:'icon3' , color1:'text-sky-400', color2:'text-zinc-400', id:3},
            {href: 'https://www.youtube.com', fa: 'youtube', number:'icon4' , color1:'text-red-600', color2:'text-amber-600', id:4},
        ],
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
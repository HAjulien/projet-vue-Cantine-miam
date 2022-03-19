<template>
    <footer class="footerMobile md:hidden px-2 bg-gray-200 dark:bg-gray-700 dark:text-slate-100  ">

        <p class="text-center text-xl m-3" > nous suivre sur :</p>

        <ul class=" flex justify-around">
            <li
            v-for="icone in icones" v-bind:key="icone.id ">              

                <a :href="icone.href" target="_blank " @click=" icone.number = !icone.number">
                    <fa :style="{ height: '40px'}" :icon="[ 'fab', icone.fa ]" :class="[icone.number ? icone.color1 : icone.color2 ]"/>
                </a>       
            </li> 
        </ul>

        <p class="text-center mt-4">CANTINE MIAM tous droits réservés, 2022</p>

    </footer>
</template>

<script>
import axios from "axios";

export default {
    name: 'FooterMobile',
    data(){
        return{
        icon1: true,
        icon2: true,
        icon3: true,
        icon4: true,
        progress:0,

        icones: [],
        }
    },
    created () {
        axios
        .get("http://localhost:3000/icones.json")
        .then (response => (this.icones = response.data.icones))
    },
}

</script>

<style lang="scss" scoped>

footer{
    transition: all .2s;
}

</style>
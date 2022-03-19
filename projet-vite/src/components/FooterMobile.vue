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


export default {
    name: 'FooterMobile',
    data(){
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
        }
    },
}

</script>

<style lang="scss" scoped>

footer{
    transition: all .2s;
}

</style>
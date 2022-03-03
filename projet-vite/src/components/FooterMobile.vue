<template>
    <footer class="footerMobile px-2 bg-gray-200 dark:bg-gray-700 dark:text-slate-100  ">

        <p class="text-center"> nous suivre sur :</p>
        <ul class=" flex justify-around">
            <li><a href="https://www.facebook.com" target="_blank " @click=" icon1 = !icon1">
            <fa :style="{ height: '40px'}" :icon="[ 'fab', 'facebook' ]" :class="[icon1 ? 'text-blue-800' : 'text-blue-300']"/>
            </a>
 </li>
            <li><a href="https://www.instagram.com" target="_blank" @click=" icon2 = !icon2">
            <fa :style="{ height: '40px'}" :icon="[ 'fab', 'instagram' ]" :class="[icon2 ? 'text-violet-700' : 'text-stone-400']"/>
            </a>
 </li>
            <li><a href="https://twitter.com" target="_blank" @click=" icon3 = !icon3">
            <fa :style="{ height: '40px'}" :icon="[ 'fab', 'twitter' ]" :class="[icon3 ? 'text-sky-400' : 'text-zinc-400']"/>
            </a> </li>
            <li><a href="https://youtube.com" target="_blank" @click=" icon4 = !icon4">
            <fa :style="{ height: '40px'}" :icon="[ 'fab', 'youtube' ]" :class="[icon4 ? 'text-red-600' : 'text-amber-600']"/>
            </a> </li>
        </ul>
        <p class="text-center">CANTINE MIAM tous droits réservés, 2022</p>

        

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
        progress:0,

        }
    },

}
</script>

<style lang="scss" scoped>
   
</style>
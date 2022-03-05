<template>
<div>
        <header class=" md:hidden lg:hidden headerMobile flex justify-between items-center px-2 dark:bg-gray-700 bg-gray-200">
            <router-link to="/" ><img src="../assets/images/logo.png" class="w-24 h-10 ml-3" /> </router-link> 
            <div class=" flex justify-around items-center w-32 mr-3">
                <BtnDarkMode/>
                <button class=" flex items-center ml-6 " v-on:click="toggleModale">
                                <fa :style="{height: '35px', color: '#097770', }"   icon='user' />
                </button>
            </div>
        </header>
        <ProfileModale :revele="revele" :toggleModale="toggleModale"></ProfileModale>
</div>
</template>

<script>
import BtnDarkMode from './BntDarkMode.vue';
import ProfileModale from './ProfileModale.vue';

export default {
    name:'HeaderMobile',

    data() {
        return {
            revele :false,
        }
    },

    components: {
        BtnDarkMode,
        ProfileModale,
    },
    methods: {
        toggleModale: function(){
            this.revele = !this.revele
        }
    },

}
</script>

<style>
    header{
        height: 60px;
    }
</style>
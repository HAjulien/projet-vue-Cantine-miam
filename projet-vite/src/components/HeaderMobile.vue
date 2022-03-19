<template>
    <div>

        <header class=" md:hidden lg:hidden headerMobile flex justify-between items-center px-2 dark:bg-gray-700 bg-gray-200">
            
            <Logo/>

            <div class=" flex justify-around items-center w-32 mr-3">
                <BtnDarkMode/>
                <button class=" flex items-center ml-6 " v-on:click="toggleModale">
                    <fa :style="{height: '35px', color: '#097770', }"   icon='user' />
                </button>
            </div>
            
        </header>

        <transition name="slide">
            <ProfileModale :revele="revele" :toggleModale="toggleModale"></ProfileModale>
        </transition >

    </div>
</template>

<script>
import Logo from './Logo.vue'
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
        Logo,

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
    transition: all .5s ease-in-out;
}



.slide-enter-from{
    opacity: 0;
    transform: translateY(-250px);
}
.slide-enter-active{
    transition: all .3s ease-out;
}
.slide-leave-to{
    opacity: 0;
    transform: translateY(-250px);
}
.slide-leave-active{
    transition: all .2s ease-in;
}



.fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
.fade-enter-from{
    opacity: 0;
}

</style>
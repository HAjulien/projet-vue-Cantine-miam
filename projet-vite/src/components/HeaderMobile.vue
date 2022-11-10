<template>
    <div>

        <header class=" md:hidden lg:hidden headerMobile flex justify-between items-center px-2 dark:bg-gray-800 bg-gray-300">
            <Logo/>

            <div class=" flex justify-around items-center ">
                <BtnDarkMode/>
                
                <button class=" flex items-center ml-6" @click="toggleModale" v-if=" user == '' ">
                    <fa :style="{height: '30px', color: '#097770', }"   icon='user' />
                </button>
                <span class="px-3 text-xs dark:text-slate-200 text-center"  v-if=" user != '' ">
                    <router-link :to="'/profile/' + user.pseudo" >
                        bonjour <br> {{user.pseudo}}
                    </router-link>
                </span>
                <span class=" border rounded border-black dark:border-slate-200 py-0.5  px-1" @click="logout"  v-if=" user != '' ">
                    <fa :style="{height: '23px', color: '#097770', }"   icon='sign-out' />                    
                </span>
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
import Login_logout from '../mixins/Login_logout';


export default {
    name:'HeaderMobile',
    mixins: [Login_logout],
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
        },
    },

}
</script>

<style>

header{
    height: 45px;
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
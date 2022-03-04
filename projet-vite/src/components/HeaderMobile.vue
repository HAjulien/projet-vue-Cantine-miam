<template>
<div>
        <header class=" md:hidden lg:hidden headerMobile flex justify-between items-center px-2 dark:bg-gray-700 bg-gray-200	 h-16">
            <router-link to="/" ><img src="../assets/images/logo.png" class="w-24 h-10" /> </router-link> 
            <div class=" flex justify-around items-center w-32">
                <BtnDarkMode/>
                <router-link to="" class=" flex items-center ml-3 ">
                                <fa :style="{height: '24px', color: '#097770', }"   icon='user' />
                </router-link>
            </div>
        </header>
        <ProfileModale/>
</div>
</template>

<script>
import BtnDarkMode from './BntDarkMode.vue';
import ProfileModale from './ProfileModale.vue';

export default {
    name:'HeaderMobile',
    components: {
        BtnDarkMode,
        ProfileModale,
    },

}
</script>

<style>

</style>
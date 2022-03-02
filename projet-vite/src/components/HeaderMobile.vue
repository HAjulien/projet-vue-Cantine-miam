<template>
    <header class=" md:hidden lg:hidden headerMobile flex justify-between items-center px-2 dark:bg-gray-700 bg-gray-200	 h-16">
        <img src="../assets/images/logo.png" class="w-24 h-10" />
        <div class=" flex justify-around items-center w-32">
            <BtnDarkMode/>
            <router-link to="" class=" flex items-center ml-3 ">
                            <fa :style="{height: '24px', color: '#097770', }"   icon='user' />
            </router-link>
        </div>
    </header>
</template>

<script>
import BtnDarkMode from './BntDarkMode.vue'

export default {
    name:'HeaderMobile',
    components: {
        BtnDarkMode,
    },

}
</script>

<style>

</style>
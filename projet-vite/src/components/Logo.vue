<template>
            <router-link to="/" >
                <transition name="fade" mode="out-in">
                    <img src="../assets/images/logo.png" class="  w-20 h-9 ml-3" v-if="!dark" /> 
                    <img src="../assets/images/logoSecondaire.png" class="  w-20 h-9 ml-3" v-else /> 
                </transition>
            </router-link> 

</template>

<script>
import { mapGetters } from 'vuex';
export default
{
    computed: {
    ...mapGetters(['dark']),
    },
}
</script>

<style>

</style>
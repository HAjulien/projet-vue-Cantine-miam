<template>
    <footer class="footerMobile md:hidden px-2 bg-gray-200 dark:bg-gray-700 dark:text-slate-100  ">

        <p class="text-center text-xl m-3" > nous suivre sur :</p>

        <ReseauxSociaux/>

        <p class="text-center mt-4">CANTINE MIAM tous droits réservés, 2022</p>

    </footer>
</template>

<script>
import ReseauxSociaux from './ReseauxSociaux.vue'

export default {
    name: 'FooterMobile',
    components: {
        ReseauxSociaux,
    }

}

</script>

<style lang="scss" scoped>

footer{
    transition: all .2s;
}

</style>
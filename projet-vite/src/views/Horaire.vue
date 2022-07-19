<template>
    <div id="app" class="bg-gray-100 dark:bg-gray-700 dark:text-gray-100 py-6 md:pt-20">
        <PencarteOuverture/>
        <HoraireTableau/>
        <Localisation/>
    </div>
</template>

<script>
import HoraireTableau from '../components/HoraireTableau.vue';
import PencarteOuverture from '../components/PencarteOuverture.vue';
import Localisation from '../components/Localisation.vue';
import ProgressBar from '../mixins/ProgressBar'


export default {
    name:'horaire',
    mixins: [ProgressBar],
    components: {
        HoraireTableau,
        PencarteOuverture,
        Localisation
    }

}
</script>

<style lang="scss" scoped>

@media screen and (max-width: 768px){
    #app{
            max-height:calc( 100vh - 165px );
    }

}
    
    #app{
        width: 100vw;
        flex: 1 1 100%;
        overflow: scroll;
        overflow-x: hidden;
    }

</style>
/<template>
    <div id="app" class="dark:bg-gray-800"> 
        <BannerDesktop/>
        <Carousel/>
        <Articles/>
    </div>


</template>

<script>
import BannerDesktop from '../components/BannerDesktop.vue';
import Carousel from '../components/Carousel.vue';
import Articles from '../components/Articles.vue';
import ProgressBar from '../mixins/ProgressBar'

export default {
    name:'home',
    mixins: [ProgressBar],
    components:{
        BannerDesktop,
        Carousel,
        Articles,
    },
    data() {

        return {
        }
    },

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
        overflow: scroll;
        overflow-x: hidden;
    }

</style>



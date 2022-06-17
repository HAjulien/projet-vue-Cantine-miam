/<template>
    <div id="app" class="dark:bg-gray-600"> 
        <BannerDesktop/>
<Suspense>
    <template #default>
        <Carousel/>
    </template>
    <template #fallback>
        Loading...
    </template>
</Suspense>
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
            max-height:calc( 100vh - 180px );
    }

}
    
    #app{
        width: 100vw;
        flex: 1 1 100%;
        overflow: scroll;
        overflow-x: hidden;
    }

</style>



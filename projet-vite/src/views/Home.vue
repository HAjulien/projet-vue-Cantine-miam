/<template>
  <div id="app" class="dark:bg-gray-600"> 
        <BannerDesktop/>
        <Carousel/>
        <Articles/>
  </div>


</template>

<script>
import BannerDesktop from '../components/BannerDesktop.vue';
import Carousel from '../components/Carousel.vue';
import Articles from '../components/Articles.vue';

export default {
  name:'home',
    components:{
        BannerDesktop,
        Carousel,
        Articles,
    },
    data() {

        return {
        }
    },
    mounted () {
        this.$el.addEventListener('scroll', function(){
            let scrollTop = this.$el.scrollTop;
            let clientHeight = this.$el.clientHeight;
            let scrollHeight = this.$el.scrollHeight;

            let scrollPercent = Math.round((scrollTop) / (scrollHeight - clientHeight) * 100);

            this.$emit('progressUpdate', scrollPercent);
        }.bind(this));
    },
    beforeUnmount() {
        this.scrollPercent = 0;
        this.$emit('progressUpdate', this.scrollPercent);
    },
}

</script>

<style lang="scss" scoped>


@media screen and (max-width: 768px){
    #app{
            max-height:calc( 100vh - 125px );
    }

}
    
    #app{
        width: 100vw;
        flex: 1 1 100%;
        overflow: scroll;
        overflow-x: hidden;
    }

</style>



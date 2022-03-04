/<template>
  <div id="app" class="dark:bg-gray-600"> 
       
        <Carousel/>
        <Articles/>
  </div>


</template>

<script>
import Feature from '../components/Feature.vue';
import Carousel from '../components/Carousel.vue';
import Articles from '../components/Articles.vue';

export default {
  name:'home',
    components:{
        Feature,
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



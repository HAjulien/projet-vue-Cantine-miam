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
            progress:0,

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
            max-height:calc( 93vh - 75px );
    }

}
    
    #app{
        width: 100vw;
        flex: 1 1 100%;
        overflow: scroll;
        overflow-x: hidden;
    }

    .button{
        width: 120px;
        height: 50px;
        text-align: center;
        transition: all .4s linear;
    }



    .bounce-enter-active {
    animation: bounce-in .5s;
    }
    .bounce-leave-active {
    animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }

    }
    h2{
        color: $blue;
    }

</style>



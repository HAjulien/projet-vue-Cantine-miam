/<template>
  <div id="app"> 
       
        <Carousel/>
        <Post/>
  </div>


</template>

<script>
import Post from '../components/Post.vue';
import Carousel from '../components/Carousel.vue';

export default {
  name:'home',
    components:{
        Post,
        Carousel,
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
    
    #app{
        width: 100vw;
        flex: 1 1 100%;
        max-height: calc(93vh - 75px);
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



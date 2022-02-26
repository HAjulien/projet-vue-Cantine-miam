/<template>
  <div>
        <ProgressBar :progress='progress'/>
        <div >
            <div class="test text-center">
                <transition name="bounce">
                    <p v-show="isActive" >
                            test
                            <button 
                            class=" button text-white font-bold py-2 px-4 rounded"
                            @click=" isActive = !isActive"
                            :class="[isActive ? 'bg-pink-500' : 'bg-pink-500']"
                            >x
                            </button>

                    </p>
                </transition>
            </div>
            <button 
            class=" button text-white font-bold py-2 px-4 rounded"
            @click="isActive = !isActive"
            :class="[isActive ? 'bg-pink-500' : 'bg-lime-500']"
            >{{ isActive ? 'x' : 'menu' }}
            </button>
        </div>

        <Post @progressUpdate="setProgress"/>
  </div>


</template>

<script>

import Post from '../components/Post.vue';
import ProgressBar from '../components/ProgressBar.vue';


export default {
  name:'home',
    components:{
        ProgressBar,
        Post
    },
    data() {

        return {
            progress:0,
            isActive:false,

        }
    },
    methods: {
        setProgress (progress) {
            this.progress = progress;
        },
    }
}
</script>

<style>
    .button{
        width: 150px;
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


</style>



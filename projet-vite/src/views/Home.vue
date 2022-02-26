/<template>
  <div>
        <ProgressBar :progress='progress'/>
            <button 
            class=" zaa text-white font-bold py-2 px-4 rounded"
            @click="isActive = !isActive"
            :class="[isActive ? 'bg-lime-300' : 'bg-pink-300']"
            >{{ isActive ? 'menu' : 'x' }}
            </button>

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
    .zaa{
        width: 150px;
        height: 50px;
        text-align: center;
        transition: all .4s linear;
    }



</style>



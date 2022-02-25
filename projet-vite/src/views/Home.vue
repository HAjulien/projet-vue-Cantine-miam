/<template>
  <div>
        <ProgressBar :progress='progress'/>
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

        }
    },
    methods: {
        setProgress (progress) {
            this.progress = progress;
        }
    }
}
</script>

<style>

</style>



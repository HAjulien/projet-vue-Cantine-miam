/<template>
<div>

    <div class="mt-16 md:flex">
        <Feature v-for="(feature, index) in features" :key="index" :title="feature.title" :image="feature.image" :paragraphe="feature.paragraphe" :button="feature.button"/>
    </div>

  <div class="sm:flex items-center shadow-md m-2 border-2 p-4">
    <div class="md:px-10 sm:px-5 ">
      <h1 class="text-gray-800 font-bold text-2xl my-2 dark:text-black">long established</h1>
      <p class="text-gray-700 mb-2 md:mb-6 dark:text-gray-300">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
     
    </div>
    <div>
          
          <iframe width="400" height="265" src="https://www.youtube.com/embed/skBGJ6OQTOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="m-auto"
          ></iframe>

    </div>
  </div>

</div>
</template>

<script>
import axios from "axios";
import Feature from "./Feature.vue";

export default {
    name:'Articles',
    components:{
        Feature,
    },
    data () {
        return{
            features: [],

        }
    },
    created () {
        axios
        .get("http://localhost:3000/features.json")
        .then (response => (this.features = response.data.features))
    },
}
</script>

<style>

</style>
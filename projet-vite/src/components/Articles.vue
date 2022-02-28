/<template>

    <div class="mt-16 md:flex">
        <Feature v-for="(feature, index) in features" :key="index" :title="feature.title" :image="feature.image" :paragraphe="feature.paragraphe" :button="feature.button"/>
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
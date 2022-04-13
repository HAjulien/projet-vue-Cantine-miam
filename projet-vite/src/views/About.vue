/<template>
<div id="app">
    <Pencarte/>
    <Rating :grade="0" :maxHalfStars="10" />
    <InputNumber template="XX XX XX XX XX" />
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio laboriosam asperiores ut culpa soluta nobis veniam quos, placeat recusandae impedit quaerat quisquam, repudiandae id. Atque adipisci voluptatum repellat maiores pariatur.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio laboriosam asperiores ut culpa soluta nobis veniam quos, placeat recusandae impedit quaerat quisquam, repudiandae id. Atque adipisci voluptatum repellat maiores pariatur.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio laboriosam asperiores ut culpa soluta nobis veniam quos, placeat recusandae impedit quaerat quisquam, repudiandae id. Atque adipisci voluptatum repellat maiores pariatur.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio laboriosam asperiores ut culpa soluta nobis veniam quos, placeat recusandae impedit quaerat quisquam, repudiandae id. Atque adipisci voluptatum repellat maiores pariatur.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio laboriosam asperiores ut culpa soluta nobis veniam quos, placeat recusandae impedit quaerat quisquam, repudiandae id. Atque adipisci voluptatum repellat maiores pariatur.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio laboriosam asperiores ut culpa soluta nobis veniam quos, placeat recusandae impedit quaerat quisquam, repudiandae id. Atque adipisci voluptatum repellat maiores pariatur.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio laboriosam asperiores ut culpa soluta nobis veniam quos, placeat recusandae impedit quaerat quisquam, repudiandae id. Atque adipisci voluptatum repellat maiores pariatur.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio laboriosam asperiores ut culpa soluta nobis veniam quos, placeat recusandae impedit quaerat quisquam, repudiandae id. Atque adipisci voluptatum repellat maiores pariatur.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio laboriosam asperiores ut culpa soluta nobis veniam quos, placeat recusandae impedit quaerat quisquam, repudiandae id. Atque adipisci voluptatum repellat maiores pariatur.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio laboriosam asperiores ut culpa soluta nobis veniam quos, placeat recusandae impedit quaerat quisquam, repudiandae id. Atque adipisci voluptatum repellat maiores pariatur.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio laboriosam asperiores ut culpa soluta nobis veniam quos, placeat recusandae impedit quaerat quisquam, repudiandae id. Atque adipisci voluptatum repellat maiores pariatur.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio laboriosam asperiores ut culpa soluta nobis veniam quos, placeat recusandae impedit quaerat quisquam, repudiandae id. Atque adipisci voluptatum repellat maiores pariatur.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio laboriosam asperiores ut culpa soluta nobis veniam quos, placeat recusandae impedit quaerat quisquam, repudiandae id. Atque adipisci voluptatum repellat maiores pariatur.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio laboriosam asperiores ut culpa soluta nobis veniam quos, placeat recusandae impedit quaerat quisquam, repudiandae id. Atque adipisci voluptatum repellat maiores pariatur.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio laboriosam asperiores ut culpa soluta nobis veniam quos, placeat recusandae impedit quaerat quisquam, repudiandae id. Atque adipisci voluptatum repellat maiores pariatur.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio laboriosam asperiores ut culpa soluta nobis veniam quos, placeat recusandae impedit quaerat quisquam, repudiandae id. Atque adipisci voluptatum repellat maiores pariatur.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio laboriosam asperiores ut culpa soluta nobis veniam quos, placeat recusandae impedit quaerat quisquam, repudiandae id. Atque adipisci voluptatum repellat maiores pariatur.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio laboriosam asperiores ut culpa soluta nobis veniam quos, placeat recusandae impedit quaerat quisquam, repudiandae id. Atque adipisci voluptatum repellat maiores pariatur.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio laboriosam asperiores ut culpa soluta nobis veniam quos, placeat recusandae impedit quaerat quisquam, repudiandae id. Atque adipisci voluptatum repellat maiores pariatur.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio laboriosam asperiores ut culpa soluta nobis veniam quos, placeat recusandae impedit quaerat quisquam, repudiandae id. Atque adipisci voluptatum repellat maiores pariatur.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio laboriosam asperiores ut culpa soluta nobis veniam quos, placeat recusandae impedit quaerat quisquam, repudiandae id. Atque adipisci voluptatum repellat maiores pariatur.</p>
</div>
</template>

<script>
import Pencarte from '../components/pencarteOuverture.vue'
import InputNumber from '../components/InputNumber.vue'
import Rating from '../components/Rating.vue'
import ProgressBar from '../mixins/ProgressBar'

export default {
  name:'about',
  mixins: [ProgressBar],
    components:{
        Pencarte,
        InputNumber,
        Rating,
    },
    data() {

        return {
        }
    },


}
</script>

<style lang="scss" scoped>

    
    #app{
        width: 100vw;
        flex: 1 1 100%;
        overflow: scroll;
        overflow-x: hidden;
        
    }

    @media screen and (min-width: 768px){

        #app{
            margin-top: 50px;
        }

    }

    @media screen and (max-width: 768px){
        #app{
                max-height:calc( 100vh - 125px );
        }

    }
</style>


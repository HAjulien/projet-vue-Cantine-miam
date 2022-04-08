/<template>
<div id="app">
    <Pencarte/>
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

export default {
  name:'about',
    components:{
        Pencarte,
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


/<template>
<div id="app">
     <h1>necessaire</h1>
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
export default {
  name:'about',
    components:{

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


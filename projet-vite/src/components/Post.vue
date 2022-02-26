/<template>
  <article>
      <div class="content dark:bg-yellow-200">
          <h2>The article Title </h2>
          <h3>subscribe to the channel</h3>
          <p class="dark: dark:text-fuchsia-600"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio nesciunt dolore, enim exercitationem nemo voluptatibus! Possimus, molestiae! Neque asperiores cum fuga quis nobis perferendis laborum, commodi, quae dolores est temporibus mollitia libero, aut eos ducimus totam? Natus consequuntur magni sequi necessitatibus, fuga explicabo fugit praesentium ratione, amet quos vitae?</p>
          <p>Blanditiis dolorem quo quidem dolore, quas magni voluptate repellat placeat aut, ratione nobis odit reprehenderit reiciendis. Laboriosam deleniti molestiae odio cupiditate autem laudantium ullam quam corrupti mollitia sapiente aliquam, similique, eius dicta iusto maiores. Deserunt facilis quis accusantium fugiat quod incidunt fugit officiis molestias necessitatibus, vero error odit omnis eligendi!</p>
          <p>Magni perspiciatis tempora, obcaecati aperiam maiores ex ea vitae delectus nam, nisi distinctio! Nemo repellendus iure quam, eveniet animi aspernatur incidunt ab saepe molestias qui, culpa modi perferendis corrupti nisi aut deleniti sunt doloribus maxime velit consequatur eum fugit accusamus provident. Tenetur quo, odit eos illo molestias dignissimos similique voluptate.</p>
          <p>Iure libero a nesciunt aliquid qui facilis corrupti, rem temporibus magnam, quidem perspiciatis voluptatem nulla maiores sunt nostrum, impedit laboriosam enim veniam quos consectetur quia esse earum rerum? Voluptas, natus ea aperiam consequuntur ad nesciunt ullam? Provident porro, accusamus nihil perspiciatis enim placeat vel, in, quae architecto quasi at necessitatibus.</p>
          <p>Aliquid adipisci rerum atque, magnam incidunt exercitationem harum voluptate error, sit voluptates non aliquam. Quidem sunt quae quam provident culpa obcaecati, architecto adipisci tempora blanditiis eum, sint officiis nobis repellat praesentium velit doloribus sit beatae unde animi aspernatur modi eveniet minima a? Ullam magnam rerum, atque nesciunt explicabo dolorem suscipit.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque non amet accusantium voluptatem corporis laudantium placeat quaerat recusandae quam quis saepe, voluptatibus tempore. At quae ducimus voluptas vitae, laudantium reprehenderit sequi odit ex exercitationem totam accusamus consequuntur temporibus doloribus obcaecati excepturi, eveniet maxime quos dolor et modi animi corporis. Dicta ducimus cumque dolor tenetur doloremque debitis provident quas voluptas ullam ipsam est qui voluptatibus itaque numquam veritatis a non fuga corporis porro tempore consectetur, odio aliquam fugiat placeat. Dolore fugit blanditiis possimus non asperiores quia numquam animi eveniet magnam doloribus minus labore nihil, quibusdam accusantium voluptatum! Quisquam velit quod nulla?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem fugiat tenetur, sapiente molestiae reprehenderit cupiditate sunt eos quas velit eius debitis reiciendis id voluptatum assumenda natus! Iste fugiat cumque eos exercitationem amet facilis voluptatum qui soluta minus, iure nam nulla aliquid provident ipsam animi commodi aliquam. Quasi eveniet sint quaerat, alias voluptas numquam sunt culpa? Laboriosam aliquid nulla rerum quisquam dicta maxime ipsam odio, a, error impedit exercitationem ullam. Deserunt.</p>
          <p>Assumenda culpa perspiciatis perferendis minus recusandae voluptatibus, possimus rem, adipisci harum modi cupiditate, alias esse consectetur mollitia quia quasi aliquam doloribus consequatur itaque molestiae excepturi ad! Vero laborum cupiditate similique ipsam aperiam, quae expedita provident quis hic voluptatum voluptatibus dolorem maxime iusto tempore velit quod perferendis tempora voluptatem temporibus eum. Excepturi nihil deserunt eligendi quibusdam architecto, accusantium culpa ducimus, dolore dignissimos optio mollitia aliquid nam magnam debitis necessitatibus in sint?</p>
          <p>Alias reiciendis veniam, tempora rem iure nulla distinctio, aliquam aperiam cupiditate et dolorem pariatur nesciunt explicabo nobis dolor qui tenetur quis exercitationem. Excepturi, obcaecati ab sunt, ratione fugiat omnis ipsam voluptatibus veniam reprehenderit, consequuntur necessitatibus? Nulla labore eos, voluptatem sit doloribus ratione esse praesentium laboriosam soluta. Adipisci magni quos, modi quis, corrupti neque officia illum, aut qui tenetur provident unde consectetur! Ea doloribus facilis velit assumenda recusandae maiores illo repudiandae.</p>
      </div>
  </article>
</template>

<script>
export default {
    name: 'post',
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

<style  lang="scss" scoped>

    article{
        width: 100vw;
        flex: 1 1 100%;
        max-height: calc(100vh - 80px);
        background-color: #f8f8f8;
        overflow: scroll;
        overflow-x: hidden;
    }
    .content {
        padding: 25px;
        transition: all 1s ease-in-out;

    }
    h2{
        color: $green;
        font-size: 40px;
        font-weight: 900;
        margin-bottom: 10px;
    }
    h3{
        color: #676767;
        font-size: 22px;
        font-weight: 300;
        margin-bottom: 30px;
    }
    p{
        color: #313131;
        font-size: 18px;
        transition: all 1s ease-in-out;

    }

</style>
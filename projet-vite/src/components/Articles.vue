/<template>
<div>

    <div class="mt-12 md:flex">
        <Feature v-for="(feature, index) in features" :key="index" :title="feature.title" :image="feature.image" :paragraphe="feature.paragraphe" :button="feature.button" :chemin="feature.chemin" />
    </div>
    <div class="sm:flex sm:flex-col md:flex-row article lg:h-[400px] rounded-xl shadow-md m-2  border-2 p-4 mb-8  bg-gray-100 dark:bg-gray-500 text-lg  hover:border-4 hover:border-amber-300 ">

        <div class="md:px-10 sm:px-5 rounded-xl flex-1">
            <h2 class="text-center font-extrabold text-2xl my-2 dark:text-black">long established</h2>
            <p class="text-gray-800 indent-5 mb-8 mt-6 md:mb-6 dark:text-slate-200">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p> 
        </div>

        <div class="video md:w-[750px] flex-1">
            <iframe src="https://www.youtube.com/embed/skBGJ6OQTOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="m-auto"
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
        .get("https://cantine-miam.herokuapp.com/api/features")
        .then (response => (this.features = response.data.features))
        const infoBubble = 'Agence nationale pour la Formation Professionnelle des Adultes'
        document.documentElement.style.setProperty("--text", JSON.stringify(infoBubble))
    },
    beforeUpdate() {
                console.log(this.features[1])
                alert("before update")
    },

}
</script>

<style >

    :root{
        --text: 'reussite';
    }
    .article{
    transition: all .2s linear;
    }
    .article:hover{
    transition: all .2s linear;
    }

    iframe{
        min-width: 350px;
        width: 100%;
        max-width: 600px;
        height: 350px;
    }

/* bulle information sur abbr afpa */

/* on crée le span bubble pour bien positionner before */

    #bubble{
        position: relative;
        text-decoration: underline;
        cursor: help;
    }
/* pour montrer que l'on peut se renseigner sur sigle afpa */
    p [title]::after{
        content: "?";
        display: inline-block;
        position: absolute;
        bottom: 70%;
        left: 80%;
        text-indent: 0px;
        font-size: .9rem;
        font-weight: bolder;
        color: #097770; 
        transition: all .4s ease-in-out;
    }
/* bulle information qui apparait lors d'un hover */
        p [title]::before{
        position: absolute;
        display: flex;
        content: var(--text); 
        bottom: 110%;
        left: 30%;
        width: 180px;
        height: 55px;
        padding: 5px;
        text-align: center;
        font-size: .75rem;
        line-height: 15px;
        text-indent: 0;
        background-color: #097770ea;
        color: #FFFFFF;
        border-radius: 10px;
        opacity: 0;
        transition: all .4s ease-in-out;
    }
    p [title]:hover::before{
        opacity: 1;
        transition: all .4s ease-in-out;
    }
    p [title]:hover:after{
        opacity: 0;
        transition: all .4s ease-in-out;
    }

@media screen and (max-width:426px){
    iframe{
        min-width: 200px;
        height: 190px;
    }

}


</style>
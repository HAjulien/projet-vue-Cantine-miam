<template>
  <div id="carousel" class="md:hidden">

    <swiper 
    :pagination="pagination" 
    :modules="modules" 
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    class="mySwiper">
      <swiper-slide
      v-for="contenu in contenuCarousel" v-bind:key="contenu.id" > 

        <!-- <img v-bind:src="'src/assets/images/' + contenu.image" /> -->
        <img :src="contenu.image" :alt="contenu.descriptionImage">
        <h1>cantine miam</h1>
        
      </swiper-slide>
    </swiper>

    <div class="loading" v-if="isLoading">
      <Spinner/>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";


// import required modules
import { Pagination, Autoplay } from "swiper";
import axios from 'axios';
import Spinner from '../components/Spinner.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    Spinner,
  },

  setup() {
    return {
      pagination: {
        clickable: true,
      },
      modules: [Pagination, Autoplay],
    };
  },
  
  data() {
    return {
      contenuCarousel: [],
      isLoading : false
    }
  },
  async created () {
    this.isLoading = true
    axios
      .get("https://cantinemiam.herokuapp.com/api/image_carousels?page=1")
      .then (response => (this.contenuCarousel = response.data["hydra:member"]))
    this.isLoading = false

  },
};
</script>

<style lang="scss" scoped>


#carousel { 
  position: relative;
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.loading{
    @include absolutePosition(0,0,0,0);
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 10;
}

.swiper {
  width: 100%;
  height: calc( 100vh - 175px );
}

.swiper-slide {
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
span, h1{
  display: block;
  position: absolute;
  top: 10%;
  left: 50%;
  min-width: 280px;
  padding: 5px 15px;
  border-radius: 30px ;
  background-color: rgba(255, 255, 255, 0.95);
  color: $principale;
  font-size: 2rem;
  text-align: center;
  transform: translateX(-50%);
  z-index: 1;

}
</style>

<style lang="scss">

.swiper-pagination-bullet {
  width: 20px;
  height: 20px; 
  background-color: rgba(255, 255, 255, 0.7);
  border: 3px solid  rgba(255, 255, 255, 0.6);
  opacity: 1;
}

.swiper-pagination-bullet-active {
  transform: scale(1.1);
}

.swiper-pagination-bullet-active:nth-child(3) {
  background-color: #cda673b0;
  border: 3px solid #6d522f,
}
.swiper-pagination-bullet-active:nth-child(2) {
  background-color:  #097770b0;
  border: 3px solid #034d48,

}
.swiper-pagination-bullet-active:nth-child(1) {
  background-color: rgba(208, 211, 18, 0.7);
  border: 3px solid  rgb(191, 224, 45);

}

</style>
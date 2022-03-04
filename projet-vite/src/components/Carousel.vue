<template>
  <div id="carousel" class="md:hidden">
        <swiper :pagination="pagination" :modules="modules" class="mySwiper">
          <swiper-slide> <img src="../assets/images/accueil1.jpg" alt=""> </swiper-slide>
          <swiper-slide><img src="../assets/images/accueil2.jpg" alt=""></swiper-slide>
          <swiper-slide> <img src="../assets/images/accueil3.jpg" alt=""> </swiper-slide>

        </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      pagination: {
        clickable: true,
      },
      modules: [Pagination],
    };
  },

};
</script>

<style scoped>


#carousel { 
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: calc( 100vh - 125px );
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
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
</style>

<style>

.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  
}

.swiper-pagination-bullet-active {
  color: #fff;
  background: #007aff;
}

</style>